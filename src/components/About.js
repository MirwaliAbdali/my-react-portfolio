import { Button } from "../App";

function About({ id }) {
  return (
    <section className="section" id={id}>
      <div className="about">
        <div className="about-img">
          <img
            src={require("../images/about-profile.jpeg")}
            alt="profile-image"
          />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <h4>Hi, My name is Mirwali Abdali !!</h4>
          <p>
            I am a B.Tech Final Year Student of Nangarhar University, Pursuing
            My Degree in Computer Science. I have a keen Interest in Problem
            Solving and Finding new and Dynamic Ideas.
          </p>
          <p>
            I am a Full Stack Web developer & experienced in Front-end Web
            Development. I can provide clean code and pixel-perfect design.
          </p>
          <div className="about-list">
            <ol>
              <li>
                <h5>Web development</h5>
              </li>
              <li>
                <h5>Front-end Web development</h5>
              </li>
              <li>
                <h5>Back-end Web development</h5>
              </li>
              <li>
                <h5>Web Design</h5>
              </li>
            </ol>
          </div>
          <Button>Contact Me</Button>
        </div>
      </div>
    </section>
  );
}

export default About;
