import React, { useState, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Gallery from "react-photo-gallery";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeBtn from "../components/homeBtn.js";
import SubHeader from "../components/subHeader.js";
import Carousel, { Modal, ModalGateway } from "react-images";

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
import fe2_trix_atlutd from "../images/photography/fe2trixmercstadium.jpg";
import av1_vista_venice from "../images/photography/av1vistavenice.jpg";
import m645s_delta3200_rites from "../images/photography/m645sdelta3200rites.jpg";
import av1_panf_rhodes from "../images/photography/av1panfrhodes.jpg"
import olympus35rc_gold_chattanooga from "../images/photography/35rcgoldchattanooga.jpg"
import ae1_hp5_overton from "../images/photography/ae1hp5overton.jpg"

const photos = [
  {
    src: fe2_trix_atlutd,
    fullscreen: fe2_trix_atlutd,
    width: 2,
    height: 3
  },
  {
    src: av1_vista_rome,
    width: 3,
    height: 2
  },
  {
    src: mat124g_hp5_xtown_farmburger,
    width: 1,
    height: 1
  },
  {
    src: olympus35rc_tmax_bealest,
    width: 2,
    height: 3
  },
  {
    src: m645s_portra160_stlzoo_butterfly,
    width: 4,
    height: 3
  },
  {
    src: cl_trix_bhamcarsandcoffee,
    width: 2,
    height: 3
  },
  {
    src: av1_vista_sanvigilio,
    width: 3,
    height: 2
  },
  {
    src: m645s_delta3200_rites,
    width: 3,
    height: 4
  },
  {
    src: mat124g_hp5_xtown_skylight,
    width: 1,
    height: 1
  },
  {
    src: cl_ektachrome_pool,
    width: 2,
    height: 3
  },
  {
    src: av1_panf_rhodes,
    width: 3,
    height: 2
  },
  {
    src: m645s_portra160_stlzoo_sculpture,
    width: 4,
    height: 3
  },
  {
    src: ae1_hp5_overton,
    width: 3,
    height: 2
  },
  {
    src: zorki_vista_oslo,
    width: 2,
    height: 3
  },
  {
    src: cl_fomapan_masonmill,
    width: 3,
    height: 2
  },
  {
    src: av1_vista_venice,
    width: 2,
    height: 3
  },

  {
    src: cl_tmax_atlhistcenter,
    width: 2,
    height: 3
  },
  {
    src: olympus35rc_gold_chattanooga,
    width: 2,
    height: 3
  }
]

function Photography() {

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div>
      <HomeBtn />
      <Container>
        <Row>
          <Col>
            <SubHeader title={"Photography"} />
            <Gallery photos={photos} onClick={openLightbox} />
            <ModalGateway>
              {viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                  <Carousel
                    currentIndex={currentImage}
                    views={photos.map(x => ({
                      ...x,
                      srcset: x.srcSet,
                      caption: x.title
                    }))}
                  />
                </Modal>
              ) : null}
            </ModalGateway>
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
