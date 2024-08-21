import { useEffect, useRef } from "react";
import { Button } from "../App";
import Navbar from "./Navbar";
import { Typed } from "react-typed";

function Header() {
  const typedElement = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["I'm Mirwali<span> Abdali</span> Web Developer."],
      typeSpeed: 180,
      backSpeed: 80,
      backDelay: 100,
      startDelay: 50,
      // loop: true,
      showCursor: false,
      contentType: "html",
    };
    const typed = new Typed(typedElement.current, options);

    // Cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <header className="header">
      <Navbar />
      {/* <video autoPlay muted loop className="background-video">
        <source
          src={`${process.env.PUBLIC_URL}/videos/header-bg-video.mp4`}
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video> */}

      <div className="header-info">
        <p className="hello">Hello</p>
        <h1 className="header-title" ref={typedElement}>
          {null}
        </h1>
        <p className="header-content">
          Web developer and Designer with 3+ years of experience with modern
          technologies.
        </p>
        <a
          href="/Professional-Resume-Web-Developer.pdf"
          download="Web-Developer-Resums.pdf"
        >
          <Button>Download Resume</Button>
        </a>
      </div>
    </header>
  );
}

export default Header;
