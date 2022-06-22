import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import HomeBtn from "../components/homeBtn.js";
import SubHeader from "../components/subHeader.js"

import "../styles/photography.css";

import photos from "../tools/getphotos.js";

function Gallery() {

  return (
    <div>
      <HomeBtn />
      <Container>
        <Row>
          <Col>
            <SubHeader title={"Photography"} />
            {photos.map((photo, index) => {
              console.log(photo);
              return <img src={photo.src} alt={photo.alt} className="photo" />
            })}
          </Col>
        </Row>
      </Container>
    </div>
  )
}

const container = document.createElement("div");
document.body.appendChild(container);
export default Gallery;
