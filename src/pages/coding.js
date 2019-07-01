import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import HomeBtn from "../components/homeBtn.js";
import SubHeader from "../components/subHeader.js";
import CodingBlock from "../components/codingBlock.js";
import ContactInfo from "../components/contactInfo.js";

const coding = () => (
  <div>
    <HomeBtn />
    <Container>
      <Row>
        <Col>
          <SubHeader title={"Coding"} />
          <Row>
            <Col>
            <CodingBlock
              ProjectTitle={"Ingles 2.0"}
              ProjectDetails={"For our third and final project, my group decided to create a proof-of-concept overhaul of an existing company's site. We chose Ingles, a modest regional supermarket chain with an outdated web presence. Ingles 2.0 presents users with an attractive interface and exclusive discounts and rewards for loyal customers who choose to share their information with the site. The project only concerns itself with the most important pages on the site, but is organized for ease of expansion. It makes use of backend authentication, React.js, and MongoDB to store produts, selected specials, credentials, and users' feedback messages to the company."}
              ImgSource={'hello'}
              ImgAlt={'helloaswell'}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    <ContactInfo />
  </div>
);

export default coding;