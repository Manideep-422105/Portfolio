import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import image from "../../Assets/Projects/image.png";
import sql from "../../Assets/Projects/download.png";
import rhyno from "../../Assets/Projects/Rhynologo.png";
import logo from "../../Assets/Projects/Icon.png";
import react from "../../Assets/Projects/react.png";
import time_capsule from "../../Assets/Projects/time capsule.png";
import summarizer from "../../Assets/Projects/download.jpeg";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Study Notion"
              description="StudyNotion is a fully functional ed-tech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS."
              stack={["React", "Node.js", "Express", "MongoDB", "Razorpay"]}
              ghLink="https://github.com/Manideep-422105/Study-Notion"
              demoLink="https://study-notion-five-pearl.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={time_capsule}
              isBlog={false}
              title="Time Capsule"
              description="AI-Enhanced Digital Memory Vault A full-stack serverless application that allows users to securely store and schedule the future release of messages, media, and music. Built with Next.js 16, TypeScript, and AWS DynamoDB, it features Google Gemini AI for content generation, Spotify integration for music, and Stripe for premium storage subscriptions."
              stack={["Next.js", "TypeScript", "AWS DynamoDB", "Stripe", "Gemini AI"]}
              ghLink="https://github.com/Manideep-422105/Time-Capsule"
              demoLink="https://main.d3op2u4xh0uin.amplifyapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="PGfy"
              description="PGfy is a Property Management System designed for PG owners to efficiently manage their properties and for tenants to easily find and book accommodations.Built using React Native , Node.js and Postgresql as the database."
              stack={["React Native", "Node.js", "PostgreSQL"]}
              ghLink="https://github.com/Manideep-422105/PGfy"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="College Grievance Cell"
              description="A web application designed to facilitate the grievance redressal process in educational institutions. It allows students to submit grievances, which are then reviewed and addressed by the college administration. The application is built using React.js and Node.js."
              stack={["React", "Node.js", "Express"]}
              ghLink="https://github.com/Manideep-422105/College-Grievance-Cell"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sql}
              isBlog={false}
              title="Sql Visualizer"
              description="An interactive data visualization and table management application built using React.js.
                           This project provides features such as drag-and-drop column reordering, sorting, filtering, CSV export, data visualization, and PNG download."
              stack={["React", "JavaScript", "CSV", "Chart.js"]}
              ghLink="https://github.com/Manideep-422105/Internship-Task"
              demoLink="https://atlan-task-pi.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rhyno}
              isBlog={false}
              title="Rhyno EV"
              description=" Designed and Implemented a dynamic, visually appealing web page for RHYNO EV,
                            creating an intuitive platform for customers to explore and purchase electric bikes. The project included an interactive
                            product gallery with customizable color options."
              stack={["React", "HTML/CSS", "JavaScript"]}
              ghLink="https://github.com/Manideep-422105/frontend_RhynoEV"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={react}
              isBlog={false}
              title="React based Projects"
              description="A collection of various projects built using React.js, showcasing different functionalities and designs."
              stack={["React", "JavaScript"]}
              ghLink="https://github.com/Manideep-422105/React_Projects"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={summarizer}
              isBlog={false}
              title="AI-Meeting Notes Summarizer"
              description="React.js project that generates concise meeting notes with AI-powered summarization."
              stack={["React", "AI/LLM", "Node.js"]}
              ghLink="https://github.com/Manideep-422105/AI-Notes-Summarizer"
              demoLink="https://ai-notes-summarizer-chi.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
