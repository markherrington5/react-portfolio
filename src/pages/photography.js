import React from "react";
import { useParams } from "react-router-dom";
import { Container, Image } from "react-bootstrap";
import HomeBtn from "../components/homeBtn.js";
import SubHeader from "../components/subHeader.js";

import { photos } from "../images/imagelist.js";

import "../styles/photography.css";

function Photography() {

  let { id } = useParams();

  return (
    <React.Fragment>
      <HomeBtn />
      <Container>
        {photos.map((photo) => {
          if (id === photo.name) {
            return (
              <React.Fragment>
                <SubHeader title={photo.date} />
                <Image src={photo.src} alt={photo.name} style={{ maxWidth: '800px', maxHeight: '600px' }} />
                <p>{photo.camera}</p>
                <p>{photo.location}</p>
              </React.Fragment>
            )
          }
        })}
      </Container>
    </React.Fragment>
  )
}

const container = document.createElement("div");
document.body.appendChild(container);
export default Photography;