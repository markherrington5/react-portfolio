import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LgName from "../components/LgName.js";
import LinkBtns from "../components/LinkBtns.js";
import "../styles/homepage.css";
import portrait from "../images/portrait.jpg";
import resume from "../resume.pdf";

const homepage = () => (
  <div>
    <LgName />
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <h3 id="greeting">Hi! I'm Mark.</h3>
          <p id="intro">
            I'm a React developer. I have a history degree from Rhodes College and a web development certification from Georgia Tech. I currently reside work as a web developer in the Office of Information Technology at Emory University in Atlanta.
          </p>
        </Col>
        <Col sm={6}>
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
            Aside from an introductory class during my undergraduate studies at
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
          <a id="resumeLink" href={resume} target="_blank" rel="noopener noreferrer" >View my resume (pdf 45kb)</a>
        </Col>
      </Row>
    </Container>
  </div>
);

export default homepage;
