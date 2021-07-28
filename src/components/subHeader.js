import React from "react";
import "../styles/subHeader.css";

const SubHeader = (props) => (
    <h1 id="subTitle">
        <div className="animateSubTitle shortDelay">{props.title}</div>
    </h1>
);

export default SubHeader;