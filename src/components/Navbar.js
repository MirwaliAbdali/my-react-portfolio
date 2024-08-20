import { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import menuIcon from "../images/menu.svg";
import closeIcon from "../images/close-menu.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenuIcon() {
    setMenuOpen((menuOpen) => !menuOpen);
  }

  function closeMenuIcon() {
    setMenuOpen(false);
  }

  const navbarRef = useRef(null);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop === 0) {
        navbarRef.current.style.backgroundColor = "transparent";
        navbarRef.current.style.transition = ".9s";
      }
      if (scrollTop > lastScrollTop) {
        navbarRef.current.classList.add("hide");
        navbarRef.current.style.transition = ".9s";
        navbarRef.current.style.backgroundColor = "black";
      } else {
        navbarRef.current.classList.remove("hide");
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav ref={navbarRef} className="nav">
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
