import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import nike from "../../Assets/Projects/nike.png";
import wecare from "../../Assets/Projects/wecare.png";
import memoire from "../../Assets/Projects/memoire.png";

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
              imgPath={nike}
              isBlog={false}
              title="Nike Website"
              description="This project is a responsive Nike website clone built using React.js and styled with Tailwind CSS. The website showcases modern design principles, an intuitive user interface, and a dynamic layout that provides an optimized experience across different screen sizes."
              ghLink="https://github.com/UjjwalxTyagi/Nike-Website"
              demoLink="https://nike-website-git-main-ujjwal-tyagis-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memoire}
              isBlog={false}
              title="Memoire MERN Application"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/UjjwalxTyagi/Memoire-Mern-App"
              demoLink="memoire-mern-app.vercel.app"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wecare}
              isBlog={false}
              title="WeCare"
              description="WeCare is a Modernized Healthcare System which includes key features such as: WeCare Fun Bot, WeCare
Checker, Doctor Appointment Scheduling, Doctor Login System.
• Disease prediction based on symptoms using a model’s API. "
              ghLink="https://github.com/UjjwalxTyagi/WeCare"
              demoLink=" wecare32.vercel.app"
              
            />``
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
