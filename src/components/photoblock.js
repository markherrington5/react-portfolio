import React from "react";
import { Image } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Photoblock = props => (
    <Link to={`/photography/${props.name}`} style={{ margin: '.5em', width: '220px', height: '220px', display: 'flex', border: '1px solid black' }} >
      <Image src={props.src} alt={props.alt} className="photo" style={{ maxWidth: 'auto', maxHeight: 'auto', objectFit: 'contain' }} />
    </Link>
);

export default Photoblock;