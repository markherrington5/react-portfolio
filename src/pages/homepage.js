import React from "react";
import LgName from "../components/LgName.js";
import "../styles/homepage.css";

const homepage = () => (
  <div>
    <LgName />
    <p id="intro">
      Hi! I'm Mark Herrington, a new web developer excited about entering the
      world of coding. I have a BA from Rhodes College in Memphis, where I
      majored in History and minored in Religious Studies. I am a recent
      graduate of the Georgia Tech Full Stack Web Development boot camp in
      Atlanta.
    </p>
    <p className="about">
      Web development is about the marriage of new technology and proven design.
    </p>
    <p className="about">
      My interest in the former began when I was quite young. While this
      enthusiasm was not channeled into coding until recently, I have always had
      an affinity for computers and technology. When I was in elementary school,
      I began playing games, and also began to break (and subsequently fix) the
      family computer. In high school, I built my first computer of my own, and
      have continued to do so ever since. My formal introduction to coding was
      at Rhodes College, where I took a course in Python in my third year.
    </p>
    <p className="about">
      My formal training in web development has been in the spring 2019 cohort
      at Georgia Tech's professional education program. The course has covered
      HTML, CSS, JavaScript, jQuery, Bootstrap, AJAX, Node.js, mySQL and
      Sequelize, MongoDB and Mongoose, and React.js.
    </p>
    <p className="about">
      My passion for design has continued to develop. Because my father is an
      architect, I grew up somewhat familiar with that field. It was not until
      fall 2016, though, that this familiarity became fascination. That year, I
      participated in the Western track of the yearly Rhodes-Sewanee European
      Studies program. Although this trip contributed to my progress in History
      and Religious Studies, what I most enjoyed were the classes in Art History
      and the program's dean's architectural tours.
    </p>
    <p className="about">
      Web design is merely another step in this shared timeline. The history of
      art and architecture is also the history of geometry, space, typography,
      and color. According to German designer Dieter Rams, good design (and a
      good website) is innovative, aesthetic, understandable, unobtrusive,
      honest, long-lasting, and thorough down to the last detail.
    </p>
  </div>
);

export default homepage;
