import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams } from "react-router-dom";
export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const page = parseInt(searchParams.get("page")) || 1;

  const handleFilterChange = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    newParams.set("page", 1); // Reset to page 1 when filter changes
    setSearchParams(newParams);
  };

  const handlePageChange = (newPage) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("page", newPage);
    setSearchParams(newParams);
  };

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?name=${name}&status=${status}&page=${page}`
        );
        const data = await res.json();
        setCharacters(data.results || []);
        setLoading(false);
      } catch (err) {
        setCharacters([]);
        setLoading(false);
      }
    };

    fetchCharacters();
  }, [name, status, page]);

  return (
    <main className="container my-4">
      <h1 className="mb-4">Rick & Morty Explorer</h1>

      <div className="row mb-4">
        <div className="col-md-3">
          <select
            className="form-select"
            value={status}
            onChange={(e) => handleFilterChange("status", e.target.value)}
          >
            <option value="">Filter by status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name"
            value={name}
            onChange={(e) => handleFilterChange("name", e.target.value)}
          />
        </div>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : characters.length > 0 ? (
        <>
          <div className="row">
            {characters.map((char) => (
              <div className="col-md-4 mb-4" key={char.id}>
                <CharacterCard character={char} />
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-center gap-3 mt-4">
            <button
              className="btn btn-outline-primary"
              disabled={page <= 1}
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
            <button
              className="btn btn-outline-primary"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          </div>
        </>
      ) : (
        <p>No characters found.</p>
      )}
    </main>
  );
}
