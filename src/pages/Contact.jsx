import { useState } from "react";

const inputStyle = {
  width: "100%",
  padding: "8px 12px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  boxSizing: "border-box",
};

const errorStyle = {
  color: "red",
  fontSize: "0.875rem",
  marginTop: "4px",
};

const buttonStyle = {
  backgroundColor: "#020814ff",
  color: "white",
  padding: "10px 20px",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
  fontSize: "1rem",
};

const successStyle = {
  marginBottom: "16px",
  padding: "12px",
  backgroundColor: "#90edceff",
  color: "#010309ff",
  border: "1px solid #01010fff",
  borderRadius: "4px",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email is invalid";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: null });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess(false);
      return;
    }
    // Normally send form here (e.g., API call)
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "40px auto",
        padding: 20,
        border: "1px solid #ddd",
        borderRadius: 6,
        backgroundColor: "#afdcf9ff",
      }}
    >
      <h2 style={{ fontSize: 24, fontWeight: "bold", marginBottom: 24 }}>
        Contact Us
      </h2>

      {success && (
        <div style={successStyle}>Your message was sent successfully!</div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: 20 }}>
          <label
            htmlFor="name"
            style={{ display: "block", marginBottom: 6, fontWeight: "bold" }}
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            style={{ ...inputStyle, borderColor: errors.name ? "red" : "#ccc" }}
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p style={errorStyle}>{errors.name}</p>}
        </div>

        <div style={{ marginBottom: 20 }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: 6, fontWeight: "bold" }}
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            style={{
              ...inputStyle,
              borderColor: errors.email ? "red" : "#ccc",
            }}
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p style={errorStyle}>{errors.email}</p>}
        </div>

        <div style={{ marginBottom: 20 }}>
          <label
            htmlFor="message"
            style={{ display: "block", marginBottom: 6, fontWeight: "bold" }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            style={{
              ...inputStyle,
              borderColor: errors.message ? "red" : "#ccc",
              resize: "vertical",
            }}
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <p style={errorStyle}>{errors.message}</p>}
        </div>

        <button type="submit" style={buttonStyle}>
          Send
        </button>
      </form>
    </div>
  );
}
