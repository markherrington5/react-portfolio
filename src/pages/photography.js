import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeBtn from "../components/homeBtn.js";
import PhotoHeader from "../components/photoHeader.js";
import Photoblock from "../components/photoblock.js";
import "../styles/photography.css";
import photo1 from "../images/photography/photo1.jpg";
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
    <Container>
      <Row>
        <Col>
          <PhotoHeader />
          <Row className="photoblock justify-content-md-center">
            <Col xs={12} md={12}>
              <Photoblock
                source={photo1}
                alt={"201610_Rome_01 AV-1, Vista 200"}
                line1={"Canon AV-1 / 50mm f/1.8 FD / Agfa Vista 200"}
                line2={"Rome, Italy"}
                line3={"October 2016"}
              />
            </Col>
          </Row>
          <Row className="photoblock justify-content-md-center">
            <Col xs={12} md={9}>
              <Photoblock
                source={photo2}
                alt={"201708_Crosstown_01 124G, HP5"}
                line1={"Yashica Mat-124G / Ilford HP5"}
                line2={"Memphis, TN, USA"}
                line3={"August 2017"}
              />
            </Col>
          </Row>
          <Row className="photoblock justify-content-md-center">
            <Col xs={12} md={7}>
              <Photoblock
                source={photo3}
                alt={"201802_Beale_19 35RC, T-Max 400"}
                line1={"Olympus 35RC / Kodak T-Max 400"}
                line2={"Memphis, TN, USA"}
                line3={"February 2018"}
              />
            </Col>
          </Row>
          <Row className="photoblock justify-content-md-center">
            <Col xs={12} md={12}>
              <Photoblock
                source={photo4}
                alt={"201803_StLouisZoo_01 M645, Portra 160"}
                line1={"Mamiya M645 Super / 80mm f/2.8N / Kodak Portra 160"}
                line2={"St. Louis, MO, USA"}
                line3={"March 2018"}
              />
            </Col>
          </Row>
          <Row className="photoblock justify-content-md-center">
            <Col xs={12} md={12}>
              <Photoblock
                source={photo5}
                alt={"201610_SanVigilio_01 AV-1, Vista 200"}
                line1={"Canon AV-1 / 50mm f/1.8 FD / Agfa Vista 200"}
                line2={"San Vigilio, Italy"}
                line3={"October 2016"}
              />
            </Col>
          </Row>
          <Row className="photoblock justify-content-md-center">
            <Col xs={12} md={9}>
              <Photoblock
                source={photo6}
                alt={"201708_Crosstown_03 124G, HP5"}
                line1={"Yashica Mat-124G / Ilford HP5"}
                line2={"Memphis, TN, USA"}
                line3={"August 2017"}
              />
            </Col>
          </Row>
          <Row className="photoblock justify-content-md-center">
            <Col xs={12} md={12}>
              <Photoblock
                source={photo7}
                alt={"201803_Laumeier_05 M645, Portra 160"}
                line1={"Mamiya M645 Super / 80mm f/2.8N / Portra 160"}
                line2={"St. Louis, MO, USA"}
                line3={"March 2018"}
              />
            </Col>
          </Row>
          <Row className="photoblock justify-content-md-center">
            <Col xs={12} md={7}>
              <Photoblock
                source={photo8}
                alt={"201609_Norway_01 Zorki, Vista 200"}
                line1={"Zorki-4K / ЮПИТЕР-8 50mm f/2 / Agfa Vista 200"}
                line2={"Oslo, Norway"}
                line3={"September 2016"}
              />
            </Col>
          </Row>
          <Row className="photoblock justify-content-md-center">
            <Col xs={12} md={12}>
              <Photoblock
                source={photo9}
                alt={"201904_MasonMill_06 CL, Fomapan 400"}
                line1={
                  "Leitz-Minolta CL / Voigtländer Nokton Classic 40mm / Fomapan 400"
                }
                line2={"Decatur, GA, USA"}
                line3={"April 2019"}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>
);

export default photography;
