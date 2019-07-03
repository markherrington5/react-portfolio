import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/coding.css";
import HomeBtn from "../components/homeBtn.js";
import SubHeader from "../components/subHeader.js";
import ContactInfo from "../components/contactInfo.js";
import InglesThumb from "../images/projectThumbs/inglesThumb.jpg";
import SmartifyThumb from "../images/projectThumbs/smartifyThumb.jpg";
import FinderThumb from "../images/projectThumbs/employeeFinderThumb.jpg";
import TransitThumb from "../images/projectThumbs/transitThumb.jpg";

const coding = () => (
  <div>
    <HomeBtn />
    <Container>
      <Row>
        <Col>
          <SubHeader title={"Coding"} />
          <Row>
            <Col xs={12} md={6}>
              <img className='projectThumb' src={InglesThumb} alt={'Ingles project thumbnail'} />
            </Col>
            <Col xs={12} md={6}>
              <img className='projectThumb' src={SmartifyThumb} alt={'Ingles project thumbnail'} />
            </Col>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <img className='projectThumb' src={FinderThumb} alt={'Ingles project thumbnail'} />
            </Col>
            <Col xs={12} md={6}>
              <img className='projectThumb' src={TransitThumb} alt={'Ingles project thumbnail'} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <ContactInfo />
  </div>
);

export default coding;
