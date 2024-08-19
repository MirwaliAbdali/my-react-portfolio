import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import menuIcon from "../images/menu.svg";
import closeIcon from "../images/close-menu.svg";

function Navbar() {
  const [scrollNav, setScrollNav] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenuIcon() {
    setMenuOpen((menuOpen) => !menuOpen);
  }

  function closeMenuIcon() {
    setMenuOpen(false);
  }

  const changeNavBg = () => {
    if (window.scrollY >= 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);

    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav className={scrollNav ? "nav nav-active" : "nav"}>
      <h1 className="logo">
        <Link to="header" smooth={true} duration={300} onClick={closeMenuIcon}>
          Portfo<span className="logo-split">lio</span>
        </Link>
      </h1>

      <div onClick={toggleMenuIcon}>
        <img
          className="menu-icons"
          src={menuOpen ? closeIcon : menuIcon}
          alt="menu-icons"
        />
      </div>

      <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
        <li>
          <Link
            className="link"
            to="header"
            smooth={true}
            duration={300}
            onClick={closeMenuIcon}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="about"
            smooth={true}
            duration={300}
            onClick={closeMenuIcon}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="languages"
            smooth={true}
            duration={300}
            onClick={closeMenuIcon}
          >
            Languages
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="experience"
            smooth={true}
            duration={300}
            onClick={closeMenuIcon}
          >
            Experience
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="skills"
            smooth={true}
            duration={300}
            onClick={closeMenuIcon}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="achievements"
            smooth={true}
            duration={300}
            onClick={closeMenuIcon}
          >
            Achievements
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="projects"
            smooth={true}
            duration={300}
            onClick={closeMenuIcon}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className="link"
            to="responsibilities"
            smooth={true}
            duration={300}
            onClick={closeMenuIcon}
          >
            Responsibilities
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
