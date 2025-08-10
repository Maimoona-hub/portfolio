import React from "react";
import Earth from "../components/Earth";
import maimoonaImage from "../assets/maimoona.jpg";

export default function Home() {
  return (
    <div style={{ background: "black", color: "white" }}>
      {/* Earth 3D */}
      <div style={{ height: "70vh" }}>
        <Earth />
      </div>

      {/* Introduction */}
      <div
        style={{
          padding: "30px",
          maxWidth: "900px",
          margin: "auto",
          textAlign: "center",
          background: "#111",
          borderRadius: "10px",
          marginTop: "-50px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
          animation: "slideUp 1s ease-out forwards", // Animation apply ki
          opacity: 0, // Initially hidden
        }}
      >
        <img
          src={maimoonaImage}
          alt="Maimoona Arif"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "15px",
            border: "3px solid #444",
          }}
        />
        <h1>Hi, I'm Maimoona Arif 👋</h1>
        <p style={{ color: "#ccc" }}>
          A final year Information  Engineering Student pursuing my Bachelor's
          degree at the Superior University , Lahore.
          <br />
          <br />
          I am passionate about applying my technical skills to solve real-world
          problems and continuously expanding my knowledge in areas like web
          development, AI, and software engineering.
          <br />
          <br />
          I am actively working on projects and seeking internship opportunities
          where I can contribute effectively while growing professionally.
        </p>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes slideUp {
            0% {
              transform: translateY(50px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}
