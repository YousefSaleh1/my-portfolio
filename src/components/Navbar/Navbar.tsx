
import "./Navbar.css";
import {  useState } from "react";
import { HiCode } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { FaCube, FaLink } from "react-icons/fa6";
import { FaCogs, FaHome, FaUserAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
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
  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  const toggleDarkMode = (): void => {
    setIsDarkMode(!isDarkMode);
    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark-mode");
  };

  const toggleDisplay = (): void => {
    setSideBarActive(!sideBarActive);
  };

  return (
    <>
      <nav className="ys-navbar">
        <div id="ys-container" className="container">
          <a className="nav-icon" href="#">
            <HiCode className="icon" />
            <span>Ahmed</span>
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
                  <FaCube className="nav-link-icon" />
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
                  className={`nav-link  ${
                    activeItem === "contact" ? "active-nav" : ""
                  }`}
                >
                  <FaLink className="nav-link-icon" />
                  <span className="nav-link-info">Contact</span>
                </a>
              </li>
            </ul>
            <ul className="nav-item">
              <li className="item">
                <div className="nav-link" onClick={toggleDarkMode}>
                  {isDarkMode ? <FaMoon /> : <FaSun />}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {}
      {sideBarActive && (
        <Sidebar
          activeItem={activeItem}
          handleItemClick={handleItemClick}
          toggleDisplay={toggleDisplay}
          toggleDarkMode={toggleDarkMode}
          isDarkMode={isDarkMode}
        />
      )}
    </>
  );
}

export default Navbar;
