import React from "react";
import "../styles/photoHeader.css";

const SubHeader = (props) => (
    <h1 id="photoTitle">
        <div class="animatePhotoTitle shortDelay">{props.title}</div>
    </h1>
);

export default SubHeader;