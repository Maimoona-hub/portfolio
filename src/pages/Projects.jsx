import React from "react";
import { FaCode, FaRobot, FaMicrochip, FaLaptopCode, FaPaintBrush } from "react-icons/fa";

export default function Projects() {
  const projects = [
    {
      name: "Tic Tac Toe",
      tech: ["C++"],
      desc: "A console-based Tic Tac Toe game with two-player mode.",
      icon: <FaCode size={35} color="#4CAF50" />
    },
    {
      name: "Car Barrier System",
      tech: ["Arduino"],
      desc: "Automated car barrier using Arduino and sensor technology.",
      icon: <FaMicrochip size={35} color="#FF9800" />
    },
    {
      name: "Smart Blind Stick",
      tech: ["Arduino", "Ultrasonic Sensors"],
      desc: "Assistive stick for visually impaired people with obstacle detection.",
      icon: <FaRobot size={35} color="#03A9F4" />
    },
    {
      name: "Thyroid Cancer Detection",
      tech: ["AI", "Python"],
      desc: "AI model to detect thyroid cancer from medical ultrasound images.",
      icon: <FaLaptopCode size={35} color="#9C27B0" />
    },
    {
      name: "Rating System",
      tech: ["React", "MongoDB"],
      desc: "Web-based product rating system with feedback features.",
      icon: <FaLaptopCode size={35} color="#00BCD4" />
    },
    {
      name: "Parlour Website",
      tech: ["React", "CSS"],
      desc: "A modern and responsive beauty parlour website.",
      icon: <FaPaintBrush size={35} color="#E91E63" />
    }
  ];

  return (
    <div style={{ background: "#111", color: "white", padding: "40px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>📂 My Projects</h2>
      

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "25px",
        maxWidth: "1100px",
        margin: "auto"
      }}>
        {projects.map((project, index) => (
          <div key={index} style={{
            background: "#1b1b1b",
            padding: "20px",
            borderRadius: "12px",
            border: "1px solid #333",
            boxShadow: "0 4px 15px rgba(0,0,0,0.4)",
            transition: "0.3s",
            textAlign: "center",
            position: "relative",
            overflow: "hidden"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
          >
            <div style={{ marginBottom: "15px" }}>{project.icon}</div>
            <h3 style={{ marginBottom: "10px", fontSize: "1.3rem", color: "#fff" }}>{project.name}</h3>

            {/* Tech badges */}
            <div style={{ marginBottom: "10px", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "8px" }}>
              {project.tech.map((t, i) => (
                <span key={i} style={{
                  background: "#222",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontSize: "0.85rem",
                  color: "#ccc",
                  border: "1px solid #444"
                }}>
                  {t}
                </span>
              ))}
            </div>

            <p style={{ fontSize: "0.95rem", color: "#ccc" }}>{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
