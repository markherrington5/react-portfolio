import React from "react";

const Photoblock = props => (
  <div className={props.orientation}>
    <img src={props.source} alt={props.alt} className="photo" />
    <p className="imgDesc">{props.line1}</p>
    <p className="imgDesc">{props.line2}</p>
    <p className="imgDesc">{props.line3}</p>
  </div>
);

export default Photoblock;