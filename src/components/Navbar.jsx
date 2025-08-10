import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#222", padding: "15px", textAlign: "center" }}>
      <Link to="/" style={{ color: "white", margin: "0 15px" }}>Home</Link>
      <Link to="/skills" style={{ color: "white", margin: "0 15px" }}>Skills</Link>
      <Link to="/projects" style={{ color: "white", margin: "0 15px" }}>Projects</Link>
      <Link to="/contact" style={{ color: "white", margin: "0 15px" }}>Contact</Link>
      <Link to="/Education" style={{ color: "white", margin: "0 15px" }}>Education</Link>
    </nav>
  );
}
