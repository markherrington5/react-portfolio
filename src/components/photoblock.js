import React from "react";
import photo1 from "../images/photography/photo1.jpg";

const Photoblock = (props) => (
    <div className="photoblock landscape">
            <img
              src={props.Source}
              alt={props.Slt}
              className="photo"
            />
            <p className="imgDesc">{props.Line1}</p>
            <p className="imgDesc">{props.line1}</p>
            <p className="imgDesc">Rome, Italy</p>
            <p className="imgDesc">October 2016</p>
          </div>
);

export default Photoblock;

