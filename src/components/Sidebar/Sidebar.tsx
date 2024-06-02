import { useState } from 'react';
import { IoMdClose } from 'react-icons/io'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import './Sidebar.css'
import { FaCube, FaLink } from "react-icons/fa6";
import { FaCogs, FaHome, FaUserAlt } from "react-icons/fa";
export default function Sidebar({ toggleDisplay, toggleDarkMode, isDarkMode, handleItemClick }) {
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

    window.addEventListener("scroll", handleDynamicScroll);

    return (
        <>
            <div className="background-opacity"></div>
            <div className='sidebar'>
                <div className="sidebar-header">
                    <button onClick={toggleDisplay}>
                        <IoMdClose className='icon' />
                    </button>
                </div>
                <div className="sidebar-content">
                    <ul className="items">

                        <li
                            className='item'
                            onClick={() => {
                                toggleDisplay();
                                handleItemClick("home");
                                handleScroll("hero-section");
                            }}
                        >
                            <a
                                href="#"
                                className={`nav-link  ${activeItem === 'home' ? 'active-nav' : ''}`}
                            >
                                <FaHome className="nav-link-icon" />
                                <span className="nav-link-info">Home</span>
                            </a>
                        </li>
                        <li
                            className='item'
                            onClick={() => {
                                toggleDisplay();
                                handleItemClick("about");
                                handleScroll("about-section");
                            }}
                        >
                            <a
                                href="#"
                                className={`nav-link  ${activeItem === 'about' ? 'active-nav' : ''}`}
                            >
                                <FaUserAlt className="nav-link-icon" />
                                <span className="nav-link-info">About</span>
                            </a>
                        </li>
                        <li
                            className='item'
                            onClick={() => {
                                toggleDisplay();
                                handleItemClick("skills");
                                handleScroll("skills-section");
                            }}
                        >
                            <a
                                href="#"
                                className={`nav-link  ${activeItem === 'skills' ? 'active-nav' : ''}`}
                            >
                                <FaCogs className="nav-link-icon" />
                                <span className="nav-link-info">Skills</span>
                            </a>
                        </li>
                        <li
                            className='item'
                            onClick={() => {
                                toggleDisplay();
                                handleItemClick("projects");
                                handleScroll("projects-section");
                            }}
                        >
                            <a
                                href="#"
                                className={`nav-link  ${activeItem === 'projects' ? 'active-nav' : ''}`}
                            >
                                <FaCube className="nav-link-icon" />
                                <span className="nav-link-info">Projects</span>
                            </a>
                        </li>
                        <li
                            className='item'
                            onClick={() => {
                                toggleDisplay();
                                handleItemClick("contact");
                                handleScroll("contact-section");
                            }}
                        >
                            <a
                                href="#"
                                className={`nav-link  ${activeItem === 'contact' ? 'active-nav' : ''}`}
                            >
                                <FaLink className="nav-link-icon" />
                                <span className="nav-link-info">Contact</span>
                            </a>
                        </li>
                        <li className="item">
                            <div className="nav-link" onClick={toggleDarkMode}>
                                {
                                    isDarkMode ?
                                        <>
                                            <FaSun className='nav-link-icon' />
                                            <span className="nav-link-info">Light Mode</span>
                                        </>
                                        :
                                        <>
                                            <FaMoon className='nav-link-icon' />
                                            <span className="nav-link-info">Dark Mode</span>
                                        </>
                                }
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
