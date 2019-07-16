import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/codingBlock.css"

const CodingBlock = props => (
    <Row>
        <Col xs={12} md={7}>
            <h2 id="ProjectTitle">{props.ProjectTitle}</h2>
            <p id="ProjectDetails">{props.ProjectDetails}</p>
        </Col>
        <Col xs={12} md={5}>
            <img id="projectThumb" src={props.ImgSource} alt={props.alt}/>
        </Col>
    </Row>
  );
  
  export default CodingBlock;