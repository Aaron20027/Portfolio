import React, { useState } from "react";
import Navbar from "./components/navbar";

import Me from "./assets/PetroEnergy_Logo.png";
import Comp from "./assets/comp.jpg";
function Practicum() {
  const sharedPadding = {
    paddingLeft: "4rem",
    paddingRight: "4rem",
  };

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
      <Navbar />

      {/* Header Section */}
      <div
        id="main"
        style={{
          ...sharedPadding,
          paddingTop: "100px",
          paddingBottom: "0",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "3rem", marginTop: "0" }}>
            Practicum Narrative Report
          </h2>
        </div>
        <hr
          style={{
            width: "110px",
            height: "4px",
            backgroundColor: "white",
            border: "none",
            margin: "0 auto",
            marginTop: "0.1rem",
          }}
        />
      </div>

      {/* Company Overview Section */}
      <div
        className="container"
        style={{
          ...sharedPadding,
          display: "flex",
          alignItems: "center",
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
            }}
          >
            <img
              src={Me}
              alt="Me"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>

        {/* RIGHT: Text */}
        <div style={{ flex: 1, paddingLeft: "2rem" }}>
          <h2 style={{ fontSize: "3rem", marginTop: "0" }}>Company Overview</h2>
          <h2 style={{ fontSize: "2rem", marginTop: "0" }}>
            PetroEnergy Resources Corporation (PERC)
          </h2>

          <div style={{ marginTop: "1rem", fontSize: "1.1rem" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "0.5rem",
              }}
            >
              <i
                className="fas fa-calendar-alt"
                style={{ marginRight: "8px", color: "#555" }}
              ></i>
              <strong>May 2 – July 8, 2025</strong>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <i
                className="fas fa-map-marker-alt"
                style={{ marginRight: "8px", color: "#555" }}
              ></i>
              <strong>Ortigas, Pasig City</strong>
            </div>
          </div>

          <p style={{ marginTop: "2rem" }}>
            <strong>PetroEnergy Resources Corporation (PERC)</strong> is a
            publicly listed energy company in the Philippines Stock Exchange and
            a proud part of the Yuchengco Group of Companies (YGC), a
            well-established group with varied business interests. Founded in
            1994, PERC started by focusing on upstream oil exploration and
            development. Over time, it has transformed into a dynamic energy
            company dedicated to sustainability by adding renewable energy and
            power generation to its offerings. Through its subsidiaries and
            joint ventures like Maibarara Geothermal, Inc. (MGI), PetroWind
            Energy Inc. (PWEI), and PetroSolar Corporation (PSC), along with
            other green energy affiliates such as RGEC, DGEC, BGEC, SJGEC, LGEC,
            and the Buhawind and EcoSolar companies, PERC plays a key role in
            the country's shift to clean and sustainable energy.
          </p>
        </div>
      </div>

      {/* Total Hours Rendered*/}
      <div
        className="container"
        style={{
          ...sharedPadding,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          perspective: "1000px",
          paddingTop: "4rem",
        }}
      >
        <h2 style={{ fontSize: "3rem", marginTop: "0" }}>
          Nature of Assignments or Tasks Given
        </h2>
        <p style={{ marginTop: "2rem" }}>
          The nature of the task assigned during my OJT involves the complete
          all-encompassing development of a data management system focused on
          ESG (Environmental, Social, Governance) and CSR (Corporate Social
          Responsibility) data for PetroEnergy. This includes participating in
          project planning, analyzing and familiarizing with data, gathering
          requirements, researching and selecting appropriate technologies,
          designing data models and system architecture, and developing both the
          backend database and frontend platform. Additionally, the role
          includes data migration, implementing analytics and reporting
          features, performing testing, preparing documentation, and assisting
          in user training. The overall objective is to help Petrogroup derive
          business value from their ESG and CSR data through effective data
          handling and insightful analytics.
        </p>
      </div>

      {/* Repeated Overview with Image on Right */}
      <div
        className="container"
        style={{
          ...sharedPadding,
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ flex: 1, paddingRight: "2rem" }}>
          <h2 style={{ fontSize: "3rem", marginTop: "0" }}>
            Total Hours Rendered
          </h2>
          <p style={{ marginTop: "1rem" }}>
            In total, I completed 384 hours during the internship. The duration
            of my OJT lasted from April 28, 2025, to July 9, 2025. The work
            hours for the project are strategically allocated across four main
            phases to ensure a structured and efficient development process.
            Phase 1 is allocated 48 hours, covering the initial setup and data
            familiarization. Phase 2 receives 96 hours, focusing on data
            modeling and system design. The largest portion, 120 hours, is
            assigned to Phase 3, which involves the actual development and
            implementation of the system. Finally, Phase 4 is allotted 60 hours,
            dedicated to documentation, training, and project closure.
            Originally, the OJT was scheduled to end on June 30, 2025. However,
            due to unexpected delays and holidays, the duration of our stay has
            been extended.
          </p>
        </div>

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
              maxWidth: "500px",
              height: "600px",
              overflow: "hidden",
            }}
          >
            <img
              src={Comp}
              alt="Comp"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          </div>
        </div>
      </div>
      {/* conclusion */}

      <div
        className="container"
        style={{
          ...sharedPadding,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          perspective: "1000px",
        }}
      >
        <h2 style={{ fontSize: "3rem", marginTop: "0" }}>Conclusion</h2>
        <p style={{ marginTop: "1rem" }}>
          In Conclusion, my stay in PetroEnergy has proven to be a fruitful
          experience. I learned many things that I would otherwise not be able
          to learn in the classroom. The experience and knowledge I gained
          throughout the practicum will stick with me as I move forward in my
          career, serving as a foundation for future professional growth and
          helping me become a more competent and capable person in the
          workplace. I am grateful for the opportunity to be part of
          PetroEnergy, and I will carry these lessons with me as I continue to
          grow both personally and professionally.
        </p>
      </div>

      <div
        className="button-box"
        style={{
          ...sharedPadding,
          paddingTop: "3rem",
          paddingBottom: "5REM",
          maxWidth: "250px",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <button
          className="purchase"
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/Practicum_Narrative_Report.pdf";
            link.download = "Aaron-Bernaldez-Resume.pdf";
            link.click();
          }}
        >
          Download Report
        </button>
      </div>
    </div>
  );
}

export default Practicum;
