import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/coding.css";
import HomeBtn from "../components/homeBtn.js";
import SubHeader from "../components/subHeader.js";
import CodingBlock from "../components/codingBlock.js";
import ContactInfo from "../components/contactInfo.js";
import InglesThumb from "../images/projectThumbs/inglesThumb.jpg";
import SmartifyThumb from "../images/projectThumbs/smartifyThumb.jpg";
import FinderThumb from "../images/projectThumbs/employeeFinderThumb.jpg";
import TransitThumb from "../images/projectThumbs/transitThumb.jpg";

const coding = () => (
  <div>
    <HomeBtn />
    <Container>
      <Row>
        <Col>
          <SubHeader title={"Coding"} />
          <Row className="codingBlock">
            <CodingBlock
              ProjectTitle={"Ingles 2.0"}
              ProjectDetails={
                "For our final and most important group project, my group decided to create a proof-of-concept overhaul of an existing company's site. We chose Ingles, a modest regional supermarket chain with an outdated web presence. Ingles 2.0 presents users with an attractive interface and exclusive discounts and rewards for loyal customers who choose to share their information with the site. The project only concerns itself with the most important pages on the site, but is organized for ease of expansion. It makes use of backend authentication, React.js, and MongoDB to store produts, selected specials, credentials, and users' feedback messages to the company."
              }
              ImgSource={InglesThumb}
              ImgAlt={"Ingles Project Thumbnail"}
            />
          </Row>
          <Row className="codingBlock">
            <CodingBlock
              ProjectTitle={"Smartify"}
              ProjectDetails={
                "The first group project at Georgia Tech's Boot Camp, Smartify uses a natural language processor API and a thesaurus API to modify up to five adjectives or verbs in a user's input string. The project tested our capacity to deal with unexpected speed bumps, as the English language proved the largest hurdle. This application was also my first experience with the Materialize CDN."
              }
              ImgSource={SmartifyThumb}
              ImgAlt={"Smartify Project Thumbnail"}
            />
          </Row>
          <Row className="codingBlock">
            <CodingBlock
              ProjectTitle={"Employee Finder"}
              ProjectDetails={
                "The Employee Finder site is an early individual exercise with databases. Using Sequelize, the app takes the user's answers, compares them to a list of existing 'employees' in the MySQL database, and returns the employee with the closest match to the user's response."
              }
              ImgSource={FinderThumb}
              ImgAlt={"Employee Finder Project Thumbnail"}
            />
          </Row>
          <Row className="codingBlock">
            <CodingBlock
              ProjectTitle={"Birmingham Transit"}
              ProjectDetails={"When a friend approached me about making a website for one of his fifth year architecture projects, I jumped at the opportunity to practice with vector graphics, CSS styling, and JavaScript. This early proof-of-concept allows the user to interact with specific elements of the transit map, and it also challenged my ability to meet my friend's extremely specific demands regarding font choice and layout.  Unfortunately, it has since been abandoned per my friend's request.  However, it was still valuable in teaching me how to target and manipulate specific elements of SVG images."}
              ImgSource={TransitThumb}
              ImgAlt={"Bham Transit Project Thumbnail"}
            />
          </Row>
        </Col>
      </Row>
    </Container>
    <ContactInfo />
  </div>
);

export default coding;
