import React from "react";

export default function Education() {
  const educationData = [
    {
      institute: "The Superior University, Lahore",
      degree: "Bachelor's in Computer Science (Ongoing)",
      color: "#ff6f61",
    },
    {
      institute: "I.C.S Intermediate",
      degree: "Aspire Group of Colleges, Lahore",
      color: "#1e90ff",
    },
    {
      institute: "Matriculation",
      degree: "Freedom Grammar School , Lahore",
      color: "#32cd32",
    },
  ];

  return (
    <div
      style={{
        background: "#000000",
        minHeight: "100vh",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Single container holding entire Education & CV content */}
      <div
        style={{
          background: "#161b22",
          borderRadius: "20px",
          padding: "40px",
          maxWidth: "900px",
          width: "100%",
          color: "#c9d1d9",
          boxShadow: "0 10px 30px rgba(0,0,0,0.8)",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "2.5rem",
            fontWeight: "900",
            color: "#ff7f50",
            textShadow: "0 2px 8px rgba(255,127,80,0.6)",
            animation: "pulse 3s ease-in-out infinite",
          }}
        >
          🎓 Education & CV
        </h2>

        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <a
            href="/maimoonacv.pdf"
            download
            style={{
              background:
                "linear-gradient(45deg, #ff7f50, #ff4500, #ffa07a, #ff7f50)",
              backgroundSize: "300% 300%",
              color: "#fde7e7ff",
              padding: "14px 32px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "1.2rem",
              boxShadow: "0 6px 20px rgba(255, 69, 0, 0.6)",
              display: "inline-block",
              transition: "background-position 1.5s ease",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundPosition = "100% 0")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundPosition = "0 0")
            }
          >
            Download My CV
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >
          {educationData.map(({ institute, degree, color }, idx) => (
            <div
              key={idx}
              style={{
                background: "#0d1117",
                borderRadius: "15px",
                padding: "25px 20px",
                boxShadow: `0 8px 20px ${color}55`,
                border: `2px solid ${color}`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.boxShadow = `0 15px 40px ${color}cc`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = `0 8px 20px ${color}55`;
              }}
            >
              <h3
                style={{
                  marginBottom: "10px",
                  fontSize: "1.3rem",
                  fontWeight: "700",
                  color: color,
                  textShadow: `0 1px 4px ${color}aa`,
                }}
              >
                {institute}
              </h3>
              <p
                style={{
                  fontSize: "1rem",
                  color: "#e0e2e5ff",
                  lineHeight: "1.4",
                  fontWeight: "500",
                }}
              >
                {degree}
              </p>
            </div>
          ))}
        </div>

        <style>
          {`
            @keyframes pulse {
              0%, 100% {
                text-shadow: 0 2px 8px rgba(255,127,80,0.6);
                color: #ff7f50;
              }
              50% {
                text-shadow: 0 0 15px rgba(255,127,80,1);
                color: #ffb380;
              }
            }
          `}
        </style>
      </div>
    </div>
  );
}
