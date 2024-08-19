function Projects({ id }) {
  return (
    <section className="section" id={id}>
      <div className="projects">
        <div className="main-text">
          <h2 className="title">My Projects</h2>
          <h4 className="sub-title">Some Of My Distinguished Works</h4>
        </div>

        <div className="cards">
          <div className="card">
            <img src={require("../images/librarymng.jpeg")} alt="" />
            <h6 className="card-content">
              A management system designed to simplify and automate library
              operations efficiently.
            </h6>
            <h3 className="card-title">library Management System</h3>
          </div>

          <div className="card">
            <img src={require("../images/weather.jpeg")} alt="" />
            <h6 className="card-content">
              A web app providing real-time weather updates for various
              locations worldwide.
            </h6>
            <h3 className="card-title">Weather Forecasting App</h3>
          </div>

          <div className="card">
            <img src={require("../images/worldwise.png")} alt="" />
            <h6 className="card-content">
              You travel the world, worldwise keeps track of your adventures.
            </h6>
            <h3 className="card-title">WorldWise</h3>
          </div>

          <div className="card">
            <img src={require("../images/map.png")} alt="" />
            <h6 className="card-content">
              A dynamic exploration of global locations, visualized through
              interactive mapping.
            </h6>
            <h3 className="card-title">Map of the World</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
