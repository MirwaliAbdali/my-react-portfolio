function Achievements({ id }) {
  return (
    <section className="section" id={id}>
      <div className="achievement">
        <div className="main-text">
          <h2 className="title">My Achievements</h2>
          <h4 className="sub-title">Some of My Major Achievements</h4>
        </div>
        <div className="cards">
          <div className="card">
            <img
              src={require("../images/web_development_certificate.jpg")}
              alt=""
            />
            <h6 className="card-content">
              Completed a full Web Development course, learning to build dynamic
              and responsive websites.
            </h6>
            <h3 className="card-title">Web Development Certification</h3>
          </div>

          <div className="card">
            <img src={require("../images/react_certificate.png")} alt="" />
            <h6 className="card-content">
              Certified in React, with skills in creating high-performance,
              interactive user interfaces.
            </h6>
            <h3 className="card-title">React Mastery Certificate</h3>
          </div>

          <div className="card">
            <img src={require("../images/coding.jpeg")} alt="" />
            <h6 className="card-content">
              Showcasing key accomplishments while mastering the art of coding.
            </h6>
            <h3 className="card-title">Coding Milestones</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
