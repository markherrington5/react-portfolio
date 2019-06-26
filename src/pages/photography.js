import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/photography.css";
import photo from "../images/photography/201610_Rome_01 AV-1, Vista 200.jpg";

const photography = () => (
  <Container id='s1'>
    <Row>
      <Col>
        <h2>Under Construction!</h2>
        <img src={photo} alt="photo1" id="photo1" />
      </Col>
    </Row>
  </Container>
);

export default photography;
