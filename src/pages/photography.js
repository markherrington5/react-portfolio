import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeBtn from "../components/homeBtn.js";
import SubHeader from "../components/subHeader.js";
import Photoblock from "../components/photoblock.js";
import ContactInfo from "../components/contactInfo.js";
import "../styles/photography.css";
import av1_vista_rome from "../images/photography/av1vistarome.jpg";
import mat124g_hp5_xtown_farmburger from "../images/photography/124ghp5xtown1.jpg";
import olympus35rc_tmax_bealest from "../images/photography/35rctmaxbeale.jpg";
import m645s_portra160_stlzoo_butterfly from "../images/photography/m645sp160stlzoo1.jpg";
import cl_trix_bhamcarsandcoffee from "../images/photography/cltrixcarscoffee.jpg";
import av1_vista_sanvigilio from "../images/photography/av1vistasanvigilio.jpg";
import mat124g_hp5_xtown_skylight from "../images/photography/124ghp5xtown2.jpg";
import m645s_portra160_stlzoo_sculpture from "../images/photography/m645sp160stlzoo2.jpg";
import zorki_vista_oslo from "../images/photography/zorkivistaoslo.jpg";
import cl_fomapan_masonmill from "../images/photography/clfomapanmasonmill.jpg";
import cl_ektachrome_pool from "../images/photography/clektagablespool.jpg";
import cl_tmax_atlhistcenter from "../images/photography/cltmaxatlhistcenter.jpg";
import fe2_trix_atlutd from "../images/photography/fe2trixmercstadium.jpg"

const photography = () => (
  <div>
    <HomeBtn />
    <Container>
      <Row>
        <Col>
          <SubHeader title={"Photography"} />
          <Row className="photoblock justify-content-md-center">
            <Col xs={12} md={7}>
              <Photoblock
                source={fe2_trix_atlutd}
                alt={"201909_ATLUnitedGame_03, Kodak Tri-X 400"}
                line1={"Nikon FE2 / 50mm f/1.8 Series E / Kodak Tri-X 400"}
                line2={"Atlanta, GA"}
                line3={"September 2019"}
              />
            </Col>
          </Row>
          <Row className="photoblock justify-content-md-center">
            <Col xs={12} md={12}>
              <Photoblock
                source={av1_vista_rome}
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
                source={mat124g_hp5_xtown_farmburger}
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
                source={olympus35rc_tmax_bealest}
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
                source={m645s_portra160_stlzoo_butterfly}
                alt={"201803_StLouisZoo_01 M645, Portra 160"}
                line1={"Mamiya M645 Super / 80mm f/2.8N / Kodak Portra 160"}
                line2={"St. Louis, MO, USA"}
                line3={"March 2018"}
              />
            </Col>
          </Row>
          <Row className="photoblock justify-content-md-center">
              <Col xs={12} md={7}>
                <Photoblock
                  source={cl_trix_bhamcarsandcoffee}
                  alt={"201906_CarsAndCoffee CL, Tri-X"}
                  line1={"Leitz-Minolta CL / Nokton Classic 40mm / Kodak Tri-X 400"}
                  line2={"Birmingham, AL, USA"}
                  line3={"June 2019"}
                />
              </Col>
            </Row>
          <Row className="photoblock justify-content-md-center">
            <Col xs={12} md={12}>
              <Photoblock
                source={av1_vista_sanvigilio}
                alt={"201610_SanVigilio_01 AV-1, Vista 200"}
                line1={"Canon AV-1 / 50mm f/1.8 FD / Agfa Vista 200"}
                line2={"San Vigilio, Italy"}
                line3={"October 2016"}
              />
            </Col>
          </Row>
          <Row className="photoblock justify-content-md-center">
            <Col xs={12} md={7}>
              <Photoblock
                source={cl_ektachrome_pool}
                alt={"201908_Pool_01 CL, Ektachrome"}
                line1={"Leitz-Minolta CL / Nokton Classic 40mm / Kodak Ektachrome 100"}
                line2={"Atlanta, GA"}
                line3={"August 2019"}
              />
            </Col>
          </Row>
          <Row className="photoblock justify-content-md-center">
            <Col xs={12} md={9}>
              <Photoblock
                source={mat124g_hp5_xtown_skylight}
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
                source={m645s_portra160_stlzoo_sculpture}
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
                source={zorki_vista_oslo}
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
                source={cl_fomapan_masonmill}
                alt={"201904_MasonMill_06 CL, Fomapan 400"}
                line1={
                  "Leitz-Minolta CL / Nokton Classic 40mm / Fomapan 400"
                }
                line2={"Decatur, GA, USA"}
                line3={"April 2019"}
              />
            </Col>
          </Row>
          <Row className="photoblock justify-content-md-center" id='finalphoto'>
            <Col xs={12} md={7}>
              <Photoblock
                source={cl_tmax_atlhistcenter}
                alt={"201908_ATLHistoryCenter_02 CL, T-Max 100"}
                line1={
                  "Leitz-Minolta CL / Nokton Classic 40mm / Kodak T-Max 400"
                }
                line2={"Decatur, GA, USA"}
                line3={"April 2019"}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <ContactInfo />
  </div>
);

export default photography;
