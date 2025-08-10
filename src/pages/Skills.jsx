import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaDatabase,
  FaWordpress,
  FaAngular,
  FaCode, // Visual Studio icon substitute
} from "react-icons/fa";
import { SiCplusplus, SiThreedotjs, SiFigma } from "react-icons/si";

function ArduinoIcon({ size = 40, color = "#00979D" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: "inline-block" }}
    >
      <circle
        cx="32"
        cy="32"
        r="28"
        stroke={color}
        strokeWidth="4"
        fill="#00979D22"
      />
      <path
        d="M20 32h24"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M32 20v24"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: [
        {
          name: "JavaScript (ES6+)",
          icon: <FaJs size={48} color="#F7E018" />,
          desc: "The core language of the web, enabling interactive functionality.",
        },
        {
          name: "Python",
          icon: <FaPython size={48} color="#3776AB" />,
          desc: "Versatile programming language for AI, automation, and backend systems.",
        },
        {
          name: "C++",
          icon: <SiCplusplus size={48} color="#00599C" />,
          desc: "High-performance language used for system applications and games.",
        },
      ],
    },
    {
      category: "Frameworks",
      items: [
        {
          name: "React.js",
          icon: <FaReact size={48} color="#61DBFB" />,
          desc: "A powerful JavaScript library for building fast and interactive UIs.",
        },
        {
          name: "Angular",
          icon: <FaAngular size={48} color="#dd1b16" />,
          desc: "A robust framework for building scalable web applications.",
        },
        {
          name: "Three.js",
          icon: <SiThreedotjs size={48} color="#ffffff" />,
          desc: "JavaScript 3D library for creating interactive 3D graphics on the web.",
        },
      ],
    },
    {
      category: "Tools",
      items: [
        {
          name: "MongoDB",
          icon: <FaDatabase size={48} color="#4DB33D" />,
          desc: "NoSQL database for handling large volumes of unstructured data.",
        },
        {
          name: "WordPress",
          icon: <FaWordpress size={48} color="#21759B" />,
          desc: "Popular CMS for building blogs, portfolios, and business websites.",
        },
        {
          name: "Figma",
          icon: <SiFigma size={48} color="#F24E1E" />,
          desc: "A collaborative interface design tool widely used for UI/UX projects.",
        },
        {
          name: "Visual Studio",
          icon: <FaCode size={48} color="#5C2D91" />,
          desc: "A powerful and popular IDE used for various programming languages.",
        },
        {
          name: "Arduino",
          icon: <ArduinoIcon size={48} color="#00979D" />,
          desc: "Open-source electronics platform based on easy-to-use hardware and software.",
        },
        {
          name: "HTML5",
          icon: <FaHtml5 size={48} color="#E34C26" />,
          desc: "The standard markup language for creating web page structure.",
        },
        {
          name: "CSS3",
          icon: <FaCss3Alt size={48} color="#264de4" />,
          desc: "Styling language to design responsive and visually appealing websites.",
        },
      ],
    },
    {
      category: "Soft Skills",
      items: [
        {
          name: "Teamwork",
          icon: null,
          desc: "Collaborating effectively with team members to achieve common goals.",
        },
        {
          name: "Problem Solving",
          icon: null,
          desc: "Ability to analyze problems and find efficient solutions.",
        },
        {
          name: "Communication",
          icon: null,
          desc: "Clear and effective communication in professional settings.",
        },
      ],
    },
  ];

  return (
    <div
      style={{
        background: "#0f141a",
        color: "#e1e4e8",
        padding: "40px 20px",
        minHeight: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "50px",
          fontSize: "3rem",
          fontWeight: "900",
          color: "#ff7f50",
          textShadow: "0 2px 12px rgba(255,127,80,0.8)",
          animation: "pulseColor 4s ease-in-out infinite",
        }}
      >
        🛠 Skills
      </h2>

      {skills.map(({ category, items }, i) => (
        <section key={i} style={{ marginBottom: "60px" }}>
          <h3
            style={{
              color: "#ff7f50",
              borderBottom: "3px solid #ff7f50",
              paddingBottom: "8px",
              marginBottom: "30px",
              fontSize: "1.8rem",
            }}
          >
            {category}
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "25px",
            }}
          >
            {items.map((skill, idx) => (
              <div
                key={idx}
                style={{
                  background: "#1a1f27",
                  borderRadius: "15px",
                  padding: "30px 20px",
                  textAlign: "center",
                  boxShadow: "0 8px 25px rgba(255,127,80,0.3)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                  minHeight: "180px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  animation: `fadeInUp 0.6s ease forwards`,
                  animationDelay: `${idx * 150}ms`,
                  opacity: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.07)";
                  e.currentTarget.style.boxShadow =
                    "0 15px 40px rgba(255,127,80,0.6)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow =
                    "0 8px 25px rgba(255,127,80,0.3)";
                }}
              >
                <div style={{ marginBottom: "15px" }}>
                  {skill.icon || (
                    <div
                      style={{
                        height: 48,
                        width: 48,
                        margin: "0 auto",
                        borderRadius: "50%",
                        background:
                          "radial-gradient(circle, #ff7f50 0%, #e06e36 70%)",
                      }}
                    />
                  )}
                </div>
                <h4
                  style={{
                    marginBottom: "12px",
                    fontSize: "1.4rem",
                    color: "#ffd3b6",
                    fontWeight: "700",
                  }}
                >
                  {skill.name}
                </h4>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#ccc",
                    lineHeight: "1.5",
                    fontWeight: "500",
                  }}
                >
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}

      <style>
        {`
          @keyframes pulseColor {
            0%, 100% {
              color: #ff7f50;
              text-shadow: 0 2px 12px rgba(255,127,80,0.8);
            }
            50% {
              color: #ffa07a;
              text-shadow: 0 0 20px rgba(255,160,122,1);
            }
          }
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}
