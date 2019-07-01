import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LgName from "../components/LgName.js";
import LinkBtns from "../components/LinkBtns.js";
import ContactInfo from "../components/contactInfo.js";
import "../styles/homepage.css";
import portrait from "../images/portrait.jpg";

const homepage = () => (
  <div>
    <LgName />
    <Container>
      <Row>
        <Col xs={12} md={7}>
          <p id="greeting">Hi! I'm Mark Herrington.</p>
          <p id="intro">
            I'm a new web developer excited about entering the world of coding.
            I have a BA in History from Rhodes College in Memphis and a full stack
            web development certification from Georgia Tech. I am currently working
            as a designer/developer at Emory University.
          </p>
        </Col>
        <Col sm={5}>
          <img id="portrait" src={portrait} alt="portrait" />
        </Col>
      </Row>
      <Row id="row2">
        <Col xs={12} md={4}>
          <LinkBtns />
        </Col>
        <Col xs={12} md={8}>
          <p className="about">
            Web development is about the marriage of new technology and proven
            design.
          </p>
          <p className="about">
            Aside from a lone Python class during my undergraduate studies at
            Rhodes College, my formal training in web development has been in
            the spring 2019 cohort at Georgia Tech's professional education
            program.
          </p>
          <p className="about">
            Though I grew up with some amount of familiarity with art and
            design, it was not until fall 2016 that this familiarity grew into
            fascination. That year, I participated in the Western track of the
            yearly Rhodes-Sewanee European Studies program. Although this trip
            contributed to my progress in History and Religious Studies, what I
            most enjoyed were the classes in Art History and the program's
            dean's architectural tours.
          </p>
          <p className="about">
            Web design is merely another step in this shared timeline. The
            history of art and architecture is also the history of geometry,
            space, typography, and color. According to German designer Dieter
            Rams, good design (and a good website) is innovative, aesthetic,
            understandable, unobtrusive, honest, long-lasting, and thorough down
            to the last detail.
          </p>
        </Col>
      </Row>
    </Container>
    <ContactInfo />
  </div>
);

export default homepage;
