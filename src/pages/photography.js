import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeBtn from "../components/homeBtn.js";
import PhotoHeader from "../components/photoHeader.js";
import "../styles/photography.css";
import photo from "../images/photography/201610_Rome_01 AV-1, Vista 200.jpg";
import photo2 from "../images/photography/201708_Crosstown_01 124G, HP5.jpg";
import photo3 from "../images/photography/201802_Beale_19 35RC, T-Max 400.jpg";

const photography = () => (
  <div>
    <HomeBtn />
    <Container id="s1">
      <Row>
        <Col>
          <PhotoHeader />
          <div className="photoblock landscape">
            <img src={photo} alt="201610_Rome_01 AV-1, Vista 200" className='photo'/>
            <p className='imgDesc'>Rome, Italy</p>
            <p className='imgDesc'>Canon AV-1 / Agfa Vista 200</p>
            <p className='imgDesc'>October 2016</p>
          </div>
          <div className="photoblock square">
            <img src={photo2} alt="201708_Crosstown_01 124G, HP5" className="photo" />
            <p className='imgDesc'>Memphis, TN, USA</p>
            <p className='imgDesc'>Yashica Mat-124G / Ilford HP5</p>
            <p className='imgDesc'>August 2017</p>
          </div>
          <div className="photoblock portrait">
            <img src={photo3} alt="201802_Beale_19 35RC, T-Max 400" className="photo" />
            <p className='imgDesc'>Memphis, TN, USA</p>
            <p className='imgDesc'>Olympus 35RC / Kodak T-Max 400</p>
            <p className='imgDesc'>February 2018</p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default photography;
