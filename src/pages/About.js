
import AboutImage from "./../portrait.jpg"

export default function About() {
  return (
    <div className="App-body">
      <div className="App-about">
        <div className="About-text">
          <h1>About</h1>
          <p>
            I am a full stack developer finishing boot camp with the University
            of Minnesota this june. So far, I have worked with HTML, CSS, Javascript, NodeJS, MySQL2, MongoDB, ExpressJS, and Reactjs. I believe learning is a life-long endeavor and look forward to increasing my skill with these technologies and learning new ones as well.
          </p>
        </div>
        <div className="About-image">
          <img src={AboutImage} alt= "portrait of a woman" className= "portrait"/>
        </div>
      </div>
    </div>
  );
}
