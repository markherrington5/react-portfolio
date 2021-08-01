import React from "react";
import { Container, Row } from "react-bootstrap";
import HomeBtn from "../components/homeBtn.js";
import SubHeader from "../components/subHeader.js";

import ContactInfo from "../components/contactInfo.js";
import Photoblock from "../components/photoblock.js";

import { photos } from "../images/imagelist.js";

import "../styles/photography.css";

function Gallery() {

  return (
    <React.Fragment>
      <HomeBtn />
      <Container>
        <SubHeader title={"Photography"} />
        <Row>
          {photos.map((photo, index) => {
            return (
              <Photoblock key={index} { ...photo } style={{ width: '200px' }} />
            )
          })}
        </Row>
      </Container>
      <ContactInfo />
    </React.Fragment>
  )
}

const container = document.createElement("div");
document.body.appendChild(container);
export default Gallery;
