function Experience({ id }) {
  return (
    <section className="section" id={id}>
      <div className="experience">
        {/* <div className="box-top experience-top"> */}
        <h2 className="box-top">My Experience</h2>
        {/* </div> */}
        <div className="box-btm">
          <div className="box experience-box">
            <img src={require("../images/logo.png")} alt="" />
            <h2>EliteValley</h2>
            <h4>Web Developer</h4>
            <p>
              <strong>&bull;</strong> Created Multiple Software Development
              Projects with their
            </p>
            <p>
              <strong>&bull;</strong> detailed Documentation. Worked with the
              Dynamic Team of EliteValley
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
