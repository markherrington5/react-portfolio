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

//   <div class="portfolioDiv">
//             <h5>Ingles Markets Redesign</h5>
//             <a href="https://ingles-2.herokuapp.com/" target="_blank">
//               <img class="portfolioImg" src="./images/inglesthumb.jpg" />
//             </a>

//             <p>
            //   For our third and final project, my group decided to create a
            //   proof-of-concept overhaul of an existing company's site. We chose
            //   Ingles, a modest regional supermarket chain with an outdated web
            //   presence. "Ingles 2.0" presents users with an attractive interface
            //   and exclusive discounts and rewards for loyal customers who choose
            //   to share their information with the site. The project only
            //   concerns itself with the most important pages on the site, but is
            //   organized for ease of expansion. It makes use of backend
            //   authentication, React.js, and MongoDB to store produts, selected
            //   specials, credentials, and users' feedback messages to the
            //   company.
//             </p>
//             <a
//               href="https://ingles-2.herokuapp.com/"
//               target="_blank"
//               class="portfolioBtn"
//               >Heroku Deployment</a
//             >
//             <a
//               href="https://github.com/stefeifert/Ingles-2.0/"
//               target="_blank"
//               class="portfolioBtn"
//               >Github</a
//             >
//           </div>
