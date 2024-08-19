function Responsibilities({ id }) {
  return (
    <section className="section" id={id}>
      <div>
        <div className="main-text">
          <h2 className="title">Position of Responsibilities</h2>
          <h4 className="sub-title">Some of My valunteer Work</h4>
        </div>
        <div className="cards">
          <div className="card">
            <img src={require("../images/speaker.jpeg")} alt="" />
            <h6 className="card-content">
              Led a team of 4 to build a web-based project management tool,
              ensuring on-time delivery and feature implementation.
            </h6>
            <h3 className="card-title">Team Lead in University Project</h3>
          </div>

          <div className="card">
            <img src={require("../images/coding.jpeg")} alt="" />
            <h6 className="card-content">
              Led a coding workshop for university students, teaching basic web
              development skills and encouraging tech adoption.
            </h6>
            <h3 className="card-title">Coding Workshop Organizer</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Responsibilities;
