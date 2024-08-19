function Skills({ id }) {
  return (
    <section className="section" id={id}>
      <div className="skill">
        {/* <div className="box-top"> */}
        <h2 className="box-top">My Skills</h2>
        {/* </div> */}
        <div className="box-btm">
          <div className="box">
            <img
              className="box-img"
              src={require("../images/cp-removebg-preview.png")}
              alt=""
            />
            <h2>Competitive Programming</h2>
            <p className="skill-content">
              <strong>&bull;</strong> Competitive programming is a sport of
              coding, where individuals engage in solving algorithmic challenges
              against the clock, showcasing their problem-solving skills and
              efficiency in crafting elegant and optimized solutions.
            </p>
          </div>
        </div>
        <div className="box-btm">
          <div className="box">
            <img
              className="box-img"
              src={require("../images/fe-removebg-preview.png")}
              alt=""
            />
            <h2>Front-end Development</h2>
            <p className="skill-content">
              <strong>&bull;</strong> Front-end development is the art of
              bringing digital creativity to life, focusing on the user
              interface and user experience to seamlessly merge design with
              functionality, shaping the visual and interactive elements of
              websites.
            </p>
          </div>
        </div>
        <div className="box-btm">
          <div className="box">
            <img
              className="box-img"
              src={require("../images/ml-removebg-preview.png")}
              alt=""
            />
            <h2>Expertize React & Laravel</h2>
            <p className="skill-content">
              <strong>&bull;</strong> I also have 3+ years of experience in
              React and Laravel, I'm an professional expert of them, I can
              provide each kind of services in the React and Laravel, I have so
              maney projects in React and Laravel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
