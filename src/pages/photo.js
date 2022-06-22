import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import HomeBtn from "../components/homeBtn.js";
import SubHeader from "../components/subHeader.js";

import "../styles/photography.css";

import photos from "../tools/getphotos.js";

function Gallery() {

  return (
    <div>
      <HomeBtn />
      <Container>
       
      </Container>
    </div>
  )
}

const container = document.createElement("div");
document.body.appendChild(container);
export default Gallery;
