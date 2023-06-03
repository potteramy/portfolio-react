import React from "react";
import AboutImage from "../../public/portrait.jpg"

export default function About() {
  return (
    <div className="App-body">
      <div className="App-about">
        <div className="About-text">
          <h1>About</h1>
          <p>
            I am a full stack developer finishing boot camp with the University
            of Minnesota this june. I have worked with HTML, CSS, Javascript, NodeJS, MySQL2, MongoDB, ExpressJS, and Reactjs.
          </p>
        </div>
        <div className="About-image">
          <img src={AboutImage} />
        </div>
      </div>
    </div>
  );
}
