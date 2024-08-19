function Languages({ id }) {
  return (
    <section>
      <div className="lanuages" id={id}>
        <div className="lang-header">
          <h1>Languages</h1>
        </div>
        <div className="lang-container">
          <div className="lang-box">
            <div className="lang-title">
              <div className="lang-img">
                <img
                  className="lang-icon"
                  src={require("../images/C.png")}
                  alt=""
                />
              </div>
              <h4>C</h4>
            </div>
          </div>
          <div className="lang-box">
            <div className="lang-title">
              <div className="lang-img">
                <img
                  className="lang-icon"
                  src={require("../images/C++.png")}
                  alt=""
                />
              </div>
              <h4>C++</h4>
            </div>
          </div>
          <div className="lang-box">
            <div className="lang-title">
              <div className="lang-img">
                <img
                  className="lang-icon"
                  src={require("../images/HTML.png")}
                  alt=""
                />
              </div>
              <h4>HTML</h4>
            </div>
          </div>
          <div className="lang-box">
            <div className="lang-title">
              <div className="lang-img">
                <img
                  className="lang-icon"
                  src={require("../images/css.png")}
                  alt=""
                />
              </div>
              <h4>CSS</h4>
            </div>
          </div>
          <div className="lang-box">
            <div className="lang-title">
              <div className="lang-img">
                <img
                  className="lang-icon"
                  src={require("../images/JS.png")}
                  alt=""
                />
              </div>
              <h4>JavaScript</h4>
            </div>
          </div>
          <div className="lang-box">
            <div className="lang-title">
              <div className="lang-img">
                <img
                  className="lang-icon"
                  src={require("../images/Phyton.png")}
                  alt=""
                />
              </div>
              <h4>Phyton</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Languages;
