import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeBtn from "../components/homeBtn.js";
import PhotoHeader from "../components/photoHeader.js";
import "../styles/photography.css";
import photo from "../images/photography/photo1.jpg";
import photo2 from "../images/photography/photo2.jpg";
import photo3 from "../images/photography/photo3.jpg";
import photo4 from "../images/photography/photo4.jpg";
import photo5 from "../images/photography/photo5.jpg";
import photo6 from "../images/photography/photo6.jpg";
import photo7 from "../images/photography/photo7.jpg";
import photo8 from "../images/photography/photo8.jpg";
import photo9 from "../images/photography/photo9.jpg";

const photography = () => (
  <div>
    <HomeBtn />
    <Container id="s1">
      <Row>
        <Col>
          <PhotoHeader />
          <div className="photoblock landscape">
            <img
              src={photo}
              alt="201610_Rome_01 AV-1, Vista 200"
              className="photo"
            />
            <p className="imgDesc">Rome, Italy</p>
            <p className="imgDesc">Canon AV-1 / 50mm f/1.8 FD</p>
            <p className="imgDesc">Agfa Vista 200</p>
            <p className="imgDesc">October 2016</p>
          </div>
          <div className="photoblock square">
            <img
              src={photo2}
              alt="201708_Crosstown_01 124G, HP5"
              className="photo"
            />
            <p className="imgDesc">Memphis, TN, USA</p>
            <p className="imgDesc">Yashica Mat-124G</p>
            <p className="imgDesc">Ilford HP5</p>
            <p className="imgDesc">August 2017</p>
          </div>
          <div className="photoblock portrait">
            <img
              src={photo3}
              alt="201802_Beale_19 35RC, T-Max 400"
              className="photo"
            />
            <p className="imgDesc">Memphis, TN, USA</p>
            <p className="imgDesc">Olympus 35RC</p>
            <p className="imgDesc">Kodak T-Max 400</p>
            <p className="imgDesc">February 2018</p>
          </div>
          <div className="photoblock landscape">
            <img
              src={photo4}
              alt="201803_StLouisZoo_01 M645, Portra 160"
              className="photo"
            />
            <p className="imgDesc">St. Louis, MO, USA</p>
            <p className="imgDesc">Mamiya M645 Super / 80mm f/2.8N</p>
            <p className="imgDesc">Kodak Portra 160</p>
            <p className="imgDesc">March 2018</p>
          </div>
          <div className="photoblock landscape">
            <img
              src={photo5}
              alt="201610_SanVigilio_01 AV-1, Vista 200"
              className="photo"
            />
            <p className="imgDesc">San Vigilio, Italy</p>
            <p className="imgDesc">Canon AV-1 / 50mm f/1.8 FD</p>
            <p className="imgDesc">Agfa Vista 200</p>
            <p className="imgDesc">October 2016</p>
          </div>
          <div className="photoblock square">
            <img
              src={photo6}
              alt="201708_Crosstown_03 124G, HP5"
              className="photo"
            />
            <p className="imgDesc">Memphis, TN, USA</p>
            <p className="imgDesc">Yashica Mat-124G</p>
            <p className="imgDesc">Ilford HP5</p>
            <p className="imgDesc">August 2017</p>
          </div>
          <div className="photoblock landscape">
            <img
              src={photo7}
              alt="201803_Laumeier_05 M645, Portra 160"
              className="photo"
            />
            <p className="imgDesc">St. Louis, MO, USA</p>
            <p className="imgDesc">Mamiya M645 Super / 80mm f/2.8N</p>
            <p className="imgDesc">Portra 160</p>
            <p className="imgDesc">March 2018</p>
          </div>
          <div className="photoblock portrait">
            <img
              src={photo8}
              alt="201609_Norway_01 Zorki, Vista 200"
              className="photo"
            />
            <p className="imgDesc">Oslo, Norway</p>
            <p className="imgDesc">Zorki-4K / ЮПИТЕР-8 50mm f/2</p>
            <p className="imgDesc">Agfa Vista 200</p>
            <p className="imgDesc">September 2016</p>
          </div>
          <div className="photoblock landscape">
            <img
              src={photo9}
              alt="201904_MasonMill_06 CL, Fomapan 400"
              className="photo"
            />
            <p className="imgDesc">Decatur, GA</p>
            <p className="imgDesc">Leitz-Minolta CL / Voigtländer Nokton Classic 40mm</p>
            <p className="imgDesc">Fomapan 400</p>
            <p className="imgDesc">April 2019</p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default photography;
