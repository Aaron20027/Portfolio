import React, { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/navbar";

function Index() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  };

  return (
    <div>
      <Navbar toggle={toggle} />
      <div className="container">
        <Card />
      </div>

      <div
        id="about"
        className="container"
        style={{ height: "500px", background: "red" }}
      >
        <p>About Section</p>
      </div>

      <div
        id="skills"
        className="container"
        style={{ height: "500px", background: "yellow" }}
      >
        <h2>Skills Section</h2>
      </div>

      <div
        id="projects"
        className="container"
        style={{ height: "500px", background: "blue" }}
      >
        <h2>Projects Section</h2>
      </div>

      <div
        id="contact"
        className="container"
        style={{ height: "500px", background: "green" }}
      >
        <h2>Contact Section</h2>
      </div>
    </div>
  );
}

export default Index;
