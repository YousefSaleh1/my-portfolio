import "./Navbar.css";
import { useState, useEffect } from "react";
import { HiCode } from "react-icons/hi";
import { FaMoon, FaSun, FaBars, FaCube, FaLink, FaCogs, FaHome, FaUserAlt } from "react-icons/fa";
import Sidebar from "../Sidebar/Sidebar";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sideBarActive, setSideBarActive] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const handleScroll = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDynamicScroll = () => {
    const aboutElement = document.getElementById("about-section");
    const skillsElement = document.getElementById("skills-section");
    const projectsElement = document.getElementById("projects-section");
    const contactElement = document.getElementById("contact-section");

    if (aboutElement) {
      const about = aboutElement.offsetTop;
      if (window.pageYOffset < about) {
        setActiveItem("home");
      } else if (skillsElement) {
        const skills = skillsElement.offsetTop;
        if (window.pageYOffset < skills) {
          setActiveItem("about");
        } else if (projectsElement) {
          const projects = projectsElement.offsetTop;
          if (window.pageYOffset < projects) {
            setActiveItem("skills");
          } else if (contactElement) {
            const contact = contactElement.offsetTop;
            if (window.pageYOffset < contact) {
              setActiveItem("projects");
            } else {
              setActiveItem("contact");
            }
          }
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleDynamicScroll);
    return () => {
      window.removeEventListener("scroll", handleDynamicScroll);
    };
  }, []);

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark-mode");
  };

  const toggleDisplay = () => {
    setSideBarActive(!sideBarActive);
  };

  return (
    <>
      <nav className="ys-navbar">
        <div id="ys-container" className="container">
          <a className="nav-icon" href="#">
            <HiCode className="icon" />
            <span>X1</span>
          </a>
          <button className="ys-toggler" onClick={toggleDisplay} type="button">
            <FaBars />
          </button>
          <div className="nav-info">
            <ul className="nav-item .mx-auto">
              <li
                className="item"
                onClick={() => {
                  handleItemClick("home");
                  handleScroll("hero-section");
                }}
              >
                <a
                  className={`nav-link  ${
                    activeItem === "home" ? "active-nav" : ""
                  }`}
                >
                  <FaHome className="nav-link-icon" />
                  <span className="nav-link-info">Home</span>
                </a>
              </li>
              <li
                className="item"
                onClick={() => {
                  handleItemClick("about");
                  handleScroll("about-section");
                }}
              >
                <a
                  className={`nav-link  ${
                    activeItem === "about" ? "active-nav" : ""
                  }`}
                >
                  <FaUserAlt className="nav-link-icon" />
                  <span className="nav-link-info">About</span>
                </a>
              </li>
              <li
                className="item"
                onClick={() => {
                  handleItemClick("skills");
                  handleScroll("skills-section");
                }}
              >
                <a
                  className={`nav-link  ${
                    activeItem === "skills" ? "active-nav" : ""
                  }`}
                >
                  <FaCogs className="nav-link-icon" />
                  <span className="nav-link-info">Skills</span>
                </a>
              </li>
              <li
                className="item"
                onClick={() => {
                  handleItemClick("projects");
                  handleScroll("projects-section");
                }}
              >
                <a
                  className={`nav-link  ${
                    activeItem === "projects" ? "active-nav" : ""
                  }`}
                >
                  <FaCube className="nav-link-icon"/>
                  <span className="nav-link-info">Projects</span>
                </a>
              </li>
              <li
                className="item"
                onClick={() => {
                  handleItemClick("contact");
                  handleScroll("contact-section");
                }}
              >
                <a
                  className={`nav-link ${
                    activeItem === "contact" ? "active-nav" : ""
                  }`}
                >
                  <FaLink className="nav-link-icon" />
                  <span className="nav-link-info">Contact</span>
                </a>
              </li>
            </ul>
            <div className="theme">
              {!isDarkMode ? (
                <FaSun className="theme-icon" onClick={toggleDarkMode} />
              ) : (
                <FaMoon className="theme-icon" onClick={toggleDarkMode} />
              )}
            </div>
          </div>
        </div>
      </nav>
      {sideBarActive && <Sidebar isActive={sideBarActive} toggleDisplay={toggleDisplay} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} activeItem={activeItem} handleItemClick={handleItemClick} />}
    </>
  );
}

export default Navbar;