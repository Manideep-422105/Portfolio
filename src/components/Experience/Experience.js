import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";

function Experience() {
  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "Riverbed Technology",
      location: "Bangalore, Karnataka",
      duration: "May 2026 – Present",
      stack: ["Angular", "Python", "PostgreSQL", "Docker"],
      points: [
        "Contributing to the development of DataExpress, a high-speed enterprise platform for secure transfer of petabyte-scale datasets across data centers and cloud environments.",
        "Building full-stack features using Angular for the frontend and Python for backend services, with PostgreSQL for data persistence and Docker for containerized deployments.",
        "Working on transfer monitoring and management workflows to enable real-time visibility into large-scale data movement jobs.",
      ],
    },
    {
      role: "Full Stack App Developer Intern",
      company: "Think Logic Tech Solutions",
      location: "Remote",
      duration: "Nov 2024 – Jan 2025",
      stack: ["React Native", "Node.js", "PostgreSQL", "Razorpay"],
      points: [
        "Developed a scalable PG Management application by designing a refined schema, ensuring high scalability.",
        "Launched essential features such as user authentication and payment gateway booking, providing critical functionality required for the platform's initial user base and partner onboarding.",
        "Integrated Razorpay for digital transactions and Hyperverge for photo ID verification, replacing manual verification workflows with automated API-driven solutions.",
      ],
    },
  ];

  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <h1 className="project-heading" style={{ paddingTop: "30px" }}>
          My <strong className="purple">Experience </strong>
        </h1>
        <p style={{ color: "white", textAlign: "center" }}>
          A timeline of roles where I've built real-world products.
        </p>
        <Row style={{ justifyContent: "center", paddingTop: "30px" }}>
          <Col md={10}>
            <div className="exp-timeline">
              {experiences.map((exp, idx) => (
                <ExperienceCard key={idx} {...exp} />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Experience;
