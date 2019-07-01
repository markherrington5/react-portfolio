import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeBtn from "../components/homeBtn.js";
import SubHeader from "../components/subHeader.js";

const coding = () => (
  <div>
    <HomeBtn />
    <Container>
      <Row>
        <Col>
          <SubHeader title={"Coding"}/>
          
        </Col>
      </Row>
    </Container>
  </div>
);

export default coding;