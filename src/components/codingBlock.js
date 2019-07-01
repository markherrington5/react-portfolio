import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../styles/codingBlock.css"

const CodingBlock = props => (
    <Row>
        <Col xs={12} md={7}>
            <h1 id="ProjectTitle">{props.ProjectTitle}</h1>
        </Col>
        <Col xs={12} md={5}>
            <img src={props.source} alt={props.alt}/>
        </Col>
    </Row>
  );
  
  export default CodingBlock;