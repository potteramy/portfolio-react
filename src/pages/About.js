
import AboutImage from "./../portrait.jpg"

export default function About() {
  return (
    <div className="App-body">
      <div className="App-about">
        <div className="About-text">
          <h1>About</h1>
          <p>
            I am a full stack developer who graduated with a certificate from the University of Minnesota June, 2023. So far, I have worked with HTML, CSS, Javascript, NodeJS, MySQL2, MongoDB, ExpressJS, and Reactjs. I have been a freelance artist since 2015, working in many mediums and enjoy adding custom logos designs to my projects as a developer. I believe learning is a life-long endeavor and look forward to increasing my skill with my current technologies and learning new ones as well.
          </p>
        </div>
        <div className="About-image">
          <img src={AboutImage} alt= "portrait of a woman" className= "portrait"/>
        </div>
      </div>
    </div>
  );
}
