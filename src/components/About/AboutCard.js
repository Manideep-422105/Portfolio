import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Manideep Reddy </span>
            from <span className="purple"> Hyderabad, India.</span>
            <br></br>
            I recently graduated with a B.Tech in Computer Science from
            <br></br>
            <span className="purple">NIT Andhra Pradesh</span> (2022 – 2026).
            <br />
            <br />
            Currently working as a <span className="purple">Full Stack Developer Intern </span>
            at <span className="purple">Riverbed Technology</span>, Bangalore,
            building features for DataExpress — a high-speed enterprise platform
            for secure petabyte-scale data transfer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Tech News
            </li>
            {/* <li className="about-activity">
              <ImPointRight /> Travelling
            </li> */}
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Manideep</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
