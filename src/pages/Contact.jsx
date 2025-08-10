import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <div style={{ background: "#111", color: "white", padding: "40px" }}>
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontWeight: "bold",
          fontSize: "2.2rem",
          background: "linear-gradient(90deg, #ff6a00, #ff006a, #00c6ff)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientMove 3s ease infinite",
        }}
      >
        📩 Get in Touch
      </h2>

      {/* Contact Info Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "auto",
          marginBottom: "40px",
        }}
      >
        {/* Email */}
        <div style={cardStyle}>
          <FaEnvelope size={35} color="#ff9800" />
          <h4 style={{ marginTop: "10px" }}>Email</h4>
          <p style={{ color: "#ccc" }}>memoonaarif997@gmail.com</p>
        </div>

        {/* LinkedIn */}
        <div style={cardStyle}>
          <FaLinkedin size={35} color="#0e76a8" />
          <h4 style={{ marginTop: "10px" }}>LinkedIn</h4>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ccc", textDecoration: "none" }}
          >
            linkedin.com/in/yourlinkedin
          </a>
        </div>

        {/* GitHub */}
        <div style={cardStyle}>
          <FaGithub size={35} color="#fff" />
          <h4 style={{ marginTop: "10px" }}>GitHub</h4>
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#ccc", textDecoration: "none" }}
          >
            github.com/yourgithub
          </a>
        </div>

        {/* Location */}
        <div style={cardStyle}>
          <FaMapMarkerAlt size={35} color="#e91e63" />
          <h4 style={{ marginTop: "10px" }}>Location</h4>
          <p style={{ color: "#ccc" }}>Garhi Shahu, Lahore</p>
        </div>
      </div>

      {/* Contact Form */}
      <div
        style={{
          maxWidth: "600px",
          margin: "auto",
          background: "#1b1b1b",
          padding: "20px",
          borderRadius: "10px",
          border: "1px solid #333",
          boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
        }}
      >
        <h3 style={{ marginBottom: "15px", textAlign: "center", fontWeight: "bold", color: "#ff9800" }}>
          Send me a Message
        </h3>
        <form>
          <input type="text" placeholder="Your Name" style={inputStyle} />
          <input type="email" placeholder="Your Email" style={inputStyle} />
          <textarea placeholder="Your Message" rows="5" style={inputStyle}></textarea>
          <button type="submit" style={buttonStyle}>Send Message</button>
        </form>
      </div>

      {/* Gradient Animation CSS */}
      <style>
        {`
          @keyframes gradientMove {
            0% { background-position: 0%; }
            100% { background-position: 100%; }
          }
        `}
      </style>
    </div>
  );
}

const cardStyle = {
  background: "#1b1b1b",
  padding: "20px",
  borderRadius: "10px",
  border: "1px solid #333",
  textAlign: "center",
  boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
  transition: "transform 0.3s, box-shadow 0.3s",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "1rem",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  border: "1px solid #444",
  borderRadius: "5px",
  background: "#222",
  color: "white",
  fontSize: "0.95rem",
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  border: "none",
  borderRadius: "5px",
  background: "#ff9800",
  color: "black",
  fontSize: "1rem",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "0.3s",
};
