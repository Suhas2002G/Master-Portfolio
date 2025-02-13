import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/blog.jpg";
import emotion from "../../Assets/Projects/logistic.webp";
import editor from "../../Assets/Projects/society360.png";
import chatify from "../../Assets/Projects/logistic.webp";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/ecom.png";

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
              imgPath={editor}
              isBlog={false}
              title="Society 360"
              description="Society 360 is a comprehensive Society Management System designed to streamline the operations of residential communities. It provides a centralized platform for owners to manage notices, pay maintenance, and book amenities, while offering admins efficient tools for managing notices, payments, & complaints. With features like Razorpay integration."
              ghLink="https://github.com/Suhas2002G/Society-View"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Santa's Treasure"
              description="Santa's Treasure is a web application designed to simulate Santa’s gift delivery logistics. The application optimizes the delivery route, allows users to select and pay for gifts, and provides an admin dashboard for real-time logistics monitoring. The system also integrates Razorpay for secure payment processing and includes OTP verification for deliveries, ensuring that orders are only marked as Delivered when the correct OTP is entered by the delivery partner."
              ghLink="https://github.com/Suhas2002G/Santa-Treasure"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Blog-Crafters"
              description="Blog-Crafters is a dynamic platform designed to empower bloggers by offering tools for creating, managing, and sharing engaging content. With user-friendly templates, it simplifies the blogging process. Whether you're a beginner or an experienced writer, Blog-Crafters helps bring your ideas to life and connect with readers effortlessly."
              ghLink="https://github.com/Suhas2002G/Blog-Crafters"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="ShopSphere [Ecom]"
              description="The ShopSphere website offers a seamless shopping experience with a wide range of products and secure payment gateway integration for smooth transactions. It includes email integration for order confirmations, shipping updates. The platform ensures user-friendly navigation, an intuitive checkout process, and fast, reliable delivery services."
              ghLink="https://github.com/Suhas2002G/Ecommerce"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
