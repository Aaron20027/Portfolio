import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/navbar";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

function Index() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <div>
      <Navbar toggle={toggle} />

      <div
        id="main"
        className="container"
        style={{ height: "100vh", padding: "100px", boxSizing: "border-box" }}
      >
        <h1>Hello world,</h1>
        <h1>I'm Aaron </h1>

        <p>
          An enthusiastic Computer Science student with hands-on experience in
          machine learning, data wrangling, and model deployment through
          academic and personal projects. Proficient in Python, SQL, and data
          visualization. Eager to contribute analytical and problem-solving
          skills to real-world tech challenges. Also passionate about software
          development, with experience building responsive web applications and
          writing clean, maintainable code using modern frameworks.
        </p>
      </div>

      <div
        id="about"
        className="container"
        style={{ height: "100vh", background: "red" }}
      >
        <p>About Section</p>
      </div>

      <div
        id="skills"
        className="container"
        style={{
          background: "#1a1a1a",
          padding: "4rem 2rem",
          color: "#fff",
          minHeight: "100vh",
        }}
      >
        <h2>Skills Section</h2>
      </div>

      <div
        id="projects"
        className="container"
        style={{
          minHeight: "100vh",

          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "2rem",
          perspective: "1000px",
        }}
      >
        <h2 style={{ fontSize: "3rem", marginTop: "0" }}>Projects</h2>
        <div>
          <Card />
        </div>
      </div>

      <div
        id="contact"
        className="container"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
          <h6
            style={{
              fontSize: "2rem",
              fontWeight: "normal",
              marginBottom: "0.5rem",
            }}
          >
            Let's get in touch
          </h6>
          <h2 style={{ fontSize: "3rem", marginTop: "0" }}>Contact Me</h2>
        </div>

        <div
          className="contact"
          style={{ display: "flex", flexDirection: "column", gap: "8px" }}
        >
          <div
            className="contact-item"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <FaEnvelope className="icon" />
            <strong>Email:</strong>
            <a
              href="mailto:aaronbernaldez80@gmail.com"
              style={{ fontSize: "1.4rem", color: "red" }}
            >
              aaronbernaldez80@gmail.com
            </a>
          </div>

          <div
            className="contact-item"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <FaGithub className="icon" />
            <strong>Github:</strong>
            <a
              href="https://github.com/Aaron20027"
              style={{ fontSize: "1.4rem", color: "red" }}
            >
              Github/Aaron20027
            </a>
          </div>

          <div
            className="contact-item"
            style={{ display: "flex", alignItems: "center", gap: "8px" }}
          >
            <FaLinkedin className="icon" />
            <strong>LinkedIn:</strong>
            <a
              href="https://www.linkedin.com/in/aaron-b-4b27a5222/"
              style={{ fontSize: "1.4rem", color: "red" }}
            >
              LinkedIn/Aaron Bernaldez
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
