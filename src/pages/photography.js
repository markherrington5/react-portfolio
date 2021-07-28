import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeBtn from "../components/homeBtn.js";
import SubHeader from "../components/subHeader.js";

import ContactInfo from "../components/contactInfo.js";
import Photoblock from "../components/photoblock.js";

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
import cl_ektachrome_pool from "../images/photography/clektagablespool.jpg";
import cl_tmax_atlhistcenter from "../images/photography/cltmaxatlhistcenter.jpg";
import fe2_trix_atlutd from "../images/photography/fe2trixmercstadium.jpg";
import av1_vista_venice from "../images/photography/av1vistavenice.jpg";
import m645s_delta3200_rites from "../images/photography/m645sdelta3200rites.jpg";
import av1_panf_rhodes from "../images/photography/av1panfrhodes.jpg"
import olympus35rc_gold_chattanooga from "../images/photography/35rcgoldchattanooga.jpg"

const photos = [
  {
    src: fe2_trix_atlutd,
    fullscreen: fe2_trix_atlutd,
    line1: "Nikon FE2 / 50mm f/1.8 Series E / Kodak Tri-X 400",
    line2: "Atlanta, GA",
    line3: "September 2019"
  },
  {
    src: av1_vista_rome,
    line1: "Canon AV-1 / 50mm f/1.8 FD / Agfa Vista 200",
    line2: "Rome, Italy",
    line3: "October 2016"
  },
  {
    src: mat124g_hp5_xtown_farmburger,
    line1: "Yashica Mat-124G / Ilford HP5",
    line2: "Memphis, TN",
    line3: "August 2017"
  },
  {
    src: olympus35rc_tmax_bealest,
    line1: "Olympus 35RC / Kodak TMax 400",
    line2: "Memphis, TN",
    line3: "February 2018"
  },
  {
    src: m645s_portra160_stlzoo_butterfly,
    line1: "Mamiya M645 Super / 80mm f/2.8N / Kodak Portra 160",
    line2: "St. Louis, MO",
    line3: "March 2018"
  },
  {
    src: cl_trix_bhamcarsandcoffee,
    line1: "Leitz-Minolta CL / Nokton Classic 40mm / Kodak Tri-X 400",
    line2: "Birmingham, AL",
    line3: "June 2019"
  },
  {
    src: av1_vista_sanvigilio,
    line1: "Canon AV-1 / 50mm f/1.8 FD / Agfa Vista 200",
    line2: "San Vigilio, Italy",
    line3: "October 2016"
  },
  {
    src: m645s_delta3200_rites,
    line1: "Mamiya M645 Super / 80mm f/2.8N / Kodak P3200",
    line2: "Memphis, TN",
    line3: "May 2018"
  },
  {
    src: mat124g_hp5_xtown_skylight,
    line1: "Yashica Mat-124G / Ilford HP5",
    line2: "Memphis, TN",
    line3: "August 2017"
  },
  {
    src: cl_ektachrome_pool,
    line1: "Leitz-Minolta CL / Nokton Classic 40mm / Kodak Ektachrome 100",
    line2: "Atlanta, GA",
    line3: "August 2019"
  },
  {
    src: av1_panf_rhodes,
    line1: "Canon AV-1 / 50mm f/1.8 FD / Ilford PanF",
    line2: "Memphis, TN",
    line3: "January 2017"
  },
  {
    src: m645s_portra160_stlzoo_sculpture,
    line1: "Mamiya M645 Super / 80mm f/2.8N / Portra 160",
    line2: "St. Louis, MO",
    line3: "March 2018"
  },
  {
    src: zorki_vista_oslo,
    line1: "Zorki-4k / ЮПИТЕР-8 / Agfa Vista 200",
    line2: "Oslo, Norway",
    line3: "September 2016"
  },
  {
    src: av1_vista_venice,
    line1: "Canon AV-1 / 50mm f/1.8 FD / Agfa Vista 200",
    line2: "Venice, Italy",
    line3: "October 2016"
  },

  {
    src: cl_tmax_atlhistcenter,
    line1: "Leitz-Minolta CL / Nokton Classic  40mm / Kodak TMax 400",
    line2: "Decatur, GA",
    line3: "April 2019"
  },
  {
    src: olympus35rc_gold_chattanooga,
    line1: "Olympus 35RC / Kodak Gold 200",
    line2: "Chattanooga, TN",
    line3: "February 2018"
  }
]

function Photography() {

  return (
    <div>
      <HomeBtn />
      <Container>
        <Row>
          <Col>
            <SubHeader title={"Photography"} />

            {photos.map((photo, index) => {
              return (
                <Row className="photoblock justify-content-md-center" key={index}>
                  <Col xs={12} md={7}>
                    <Photoblock
                      source={photo.src}
                      alt={`${photo.src}`}
                      line1={photo.line1}
                      line2={photo.line2}
                      line3={photo.line3}
                    />
                  </Col>
                </Row>
              )
            })}
          </Col>
        </Row>
      </Container>
      <ContactInfo />
    </div>
  )
}

const container = document.createElement("div");
document.body.appendChild(container);
export default Photography;
