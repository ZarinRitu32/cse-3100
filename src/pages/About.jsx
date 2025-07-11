export default function About() {
  return (
    <div
      style={{
        maxWidth: 600,
        margin: "40px auto",
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 6,
        backgroundColor: "#afdcf9ff",
        fontFamily: "Arial, sans-serif",
        lineHeight: 1.6,
      }}
    >
      <h2 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 16 }}>
        About Rick & Morty Explorer
      </h2>

      <p style={{ marginBottom: 16 }}>
        This is a simple React app that lets you browse, search, and filter
        characters from the Rick & Morty universe. Built by students of{" "}
        <strong>CSE-3100</strong> using the public Rick & Morty API.
      </p>

      <h3 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Developer Info
      </h3>
      <p style={{ marginBottom: 16 }}>
        Developed by <strong>"Zarin Tasnim Ritu"</strong>, a passionate student
        and web developer.
      </p>

      <h3 style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Favorite Rick & Morty Quote
      </h3>
      <blockquote
        style={{
          fontStyle: "italic",
          borderLeft: "4px solid #2563eb",
          paddingLeft: 16,
          color: "#e401b3ff",
          marginBottom: 0,
        }}
      >
        "Wubba Lubba Dub Dub!"
      </blockquote>
    </div>
  );
}
