import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import githubLogo from "../images/githubLogo.svg";
import linkedinLogo from "../images/linkedinLogo.svg";
import instagramLogo from "../images/instaLogo.svg";

const ContactMe = (props) => (
  <div id="contactInfo">
  <Row>
    <Col md={6} xs={12}>
      <h2 className="contact">Contact Me</h2>
      <p id="email">email: markherrington5@gmail.com</p>
      <div>
        <a
          href="https://www.linkedin.com/in/markherrington18/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="linkImg" src={linkedinLogo} alt="linkedinLogo" />
        </a>
      </div>
      <div>
        <a
          href="https://www.instagram.com/mtherrington/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="linkImg"
            src={instagramLogo}
            alt="instagramLogo"
          />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/markherrington5"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="linkImg" src={githubLogo} alt="githubLogo" />
        </a>
      </div>
    </Col>
  </Row>
</div>
);

export default ContactMe;