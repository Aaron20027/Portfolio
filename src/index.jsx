import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/navbar";

import Me from "./assets/me2.jpg";

import CustomChipComp from "./components/CustomChipComp";

import { Grid, Typography, Box } from "@mui/material";

import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

import { ReactTyped } from "react-typed";

function Index() {
  const projects = [
    {
      title: "Fake News Detection",
      text: " A web-based system that detects fake news using sentiment analysis and deep learning to help users identify misleading information. It leverages BERT for contextual understanding and VADER for sentiment scoring to enhance detection accuracy.",
      skills: ["Python", "Flask", "PyTorch"],
      link: "https://github.com/Aaron20027/FakeNewDetection",
    },
    {
      title: "ESGDash",
      text: "ESGDash is a web application designed to help Petrogroup efficiently manage, analyze, and visualize its ESG (Environmental, Social, and Governance) and CSR (Corporate Social Responsibility) data. Built with usability and scalability in mind, the platform transforms raw sustainability data—initially sourced from Excel—into structured, actionable insights.",
      skills: ["Python", "React", "Material UI", "PostgreSQL "],
      link: "https://github.com/ThatOneLeaf/PetroDash-WEB",
    },
    {
      title: "Paparonie's Pizza Mobile POS",
      text: "Paparonie's Pizza Mobile POS is a mobile Point of Sale (POS) system built with Java in Android Studio. The app provides a simple and efficient interface tailored for fast-paced environments like pizza shops.",
      skills: ["Android Studio", "Java"],
      link: "https://github.com/Aaron20027/MobilePOS",
    },
    {
      title: "Wanderer",
      text: "Wanderer is a 2D platformer made in Unity where your goal is to survive, upgrade, and chase high scores. You start in a lush forest, dodging traps, collecting coins, and battling enemies. After each run, you visit a shop to buy upgrades like double jump, speed boost, or extra health. Next, dive into a dark, dangerous cave with tougher enemies and bigger rewards. Survive the cave to loop back into a more challenging forest stage",
      skills: ["Unity", "C#", "MySQL"],
      link: "https://github.com/Machoo28/WANDER",
    },
    {
      title: "Local Government Website",
      text: "A responsive and user-friendly web platform for a Local Government Unit (LGU) that delivers essential information and services. It includes pages for announcements, news, downloadable forms, service guides, and contact form.",
      skills: ["HTML", "CSS", "ASP.NET", "C#"],
      link: "https://github.com/Aaron20027/MajayjayProject",
    },
    {
      title: "Heart Attack Prediction",
      text: "Enter your health information to instantly find out your risk of a heart attack. Our smart tool analyzes your data and gives you a quick, accurate prediction—helping you take control of your heart health.",
      skills: ["Python", "Flask", "MySQL"],
      link: "https://github.com/Aaron20027/Heart-Attack-Prediction",
    },
  ];

  return (
    <div>
      <Navbar />

      <div
        id="main"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          boxSizing: "border-box",
        }}
      >
        {/* Left Half (Text) */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: "5vw",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 5rem)",
              fontWeight: "normal",
              margin: 0,
            }}
          >
            <ReactTyped
              strings={[
                "Hello World!", // English
                "¡Hola Mundo!", // Spanish
                "Hallo Welt!", // German
                "Ciao Mondo!", // Italian
                "Bonjour le Monde!", // French
                "Olá Mundo!", // Portuguese
                "こんにちは世界！", // Japanese (Konnichiwa Sekai!)
                "안녕하세요 세계!", // Korean (Annyeonghaseyo Segye!)
                "你好，世界！", // Chinese (Nǐ hǎo, shìjiè!)
                "Привет, мир!", // Russian (Privet, mir!)
              ]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </h1>
          <h1
            style={{
              fontSize: "clamp(3rem, 10vw, 10rem)",
              fontWeight: "bold",
              margin: "0.5rem 0",
            }}
          >
            I'm Aaron
          </h1>
          <span
            style={{
              display: "inline-block",
              width: "fit-content",
              maxWidth: "100%",
              backgroundColor: "rgba(248, 177, 60, 1)",
              color: "black",
              padding: "0.5rem 1rem",
              borderRadius: "999px",
              fontSize: "clamp(1rem, 2vw, 1.5rem)",
              fontWeight: "500",
              marginTop: "1rem",
              whiteSpace: "nowrap",
              lineHeight: 1.4,
            }}
          >
            Aspiring Software Developer / Data Scientist
          </span>
        </div>

        {/* Right Half (Image) */}
        <div
          style={{
            flex: 1,
            position: "relative",
            height: "100vh",
          }}
        >
          <img
            src={Me}
            alt="Me"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              maxWidth: "100%",
              maxHeight: "100%",
              zIndex: 1,
            }}
          />
        </div>
      </div>

      <div
        id="about"
        className="container"
        style={{
          height: "auto",
          display: "flex",
          alignItems: "center",
          padding: "2rem",
        }}
      >
        {/* LEFT: Image */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <div
            style={{
              width: "90%",
              maxWidth: "450px",
              height: "600px",
              overflow: "hidden",

              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={Me}
              alt="Me"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>

        {/* RIGHT: About Text */}
        <div style={{ flex: 1, paddingLeft: "2rem" }}>
          <h2 style={{ fontSize: "3rem", marginTop: "0" }}>About Me</h2>
          <p>
            An enthusiastic Computer Science student with hands-on experience in
            machine learning, data wrangling, and model deployment through
            academic and personal projects. Proficient in Python, SQL, and data
            visualization. Eager to contribute analytical and problem-solving
            skills to real-world tech challenges. Also passionate about software
            development, with experience building responsive web applications
            and writing clean, maintainable code using modern frameworks.
          </p>
          <div
            style={{
              width: "100%",
              display: "flex",
              marginTop: "2rem",
              justifyContent: "flex-start",
            }}
          >
            <div className="button-box" style={{ maxWidth: "250px" }}>
              <button
                className="purchase"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Bernaldez_CV_Updated.pdf";
                  link.download = "Aaron-Bernaldez-Resume.pdf";
                  link.click();
                }}
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="skills"
        className="container"
        style={{
          background: "#0a0a0a",
          padding: "4rem 2rem",
          color: "#fff",
          gap: "2px",
          minHeight: "auto",
        }}
      >
        <h2 style={{ fontSize: "3rem", marginTop: "0" }}>Skills</h2>
        <CustomChipComp
          label="Python"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        />
        <CustomChipComp
          label="PHP"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
        />
        <CustomChipComp
          label="SQL"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        />
        <CustomChipComp
          label="Java"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        />
        <CustomChipComp
          label="C#"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg"
        />
        <CustomChipComp
          label="HTML"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        />
        <CustomChipComp
          label="CSS"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        />
        <CustomChipComp
          label="ASP.NET"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg"
        />
        <CustomChipComp
          label="React.js"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        />
        <CustomChipComp
          label="Material UI (MUI)"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
        />
        <CustomChipComp
          label="Bootstrap"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        />
        <CustomChipComp
          label="Flask"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
        />
        <CustomChipComp
          label="FastAPI"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
        />
        <CustomChipComp
          label="Unity"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
        />
        <CustomChipComp
          label="PostgreSQL"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        />
        <CustomChipComp
          label="MySQL"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        />
        <CustomChipComp
          label="GitHub"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        />
        <CustomChipComp
          label="Excel"
          iconUrl="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/filezilla/filezilla-plain.svg"
        />{" "}
        {/* No Excel logo on Devicon — using a neutral file icon as fallback */}
      </div>

      <div
        id="projects"
        className="container"
        style={{
          height: "auto",
          padding: "4rem 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          perspective: "1000px",
        }}
      >
        <h2 style={{ fontSize: "3rem", marginTop: "0" }}>Projects</h2>

        <Box mt={4}>
          <Grid container spacing={4}>
            {projects.slice(0, 6).map((project, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card
                  title={project.title}
                  text={project.text}
                  skills={project.skills}
                  buttonLabel="View Repo"
                  onButtonClick={() => window.open(project.link, "_blank")}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>

      <div
        id="contact"
        className="container"
        style={{
          minHeight: "80vh",
          display: "flex",
          marginTop: "0.2rem",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem 1rem 4rem 1rem",
        }}
      >
        <div style={{ padding: "0rem 1rem", textAlign: "center" }}>
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
