import "./Sidebar.css";
import { FaHome, FaUserAlt, FaCogs, FaCube, FaLink, FaSun, FaMoon } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

interface SidebarProps {
    isActive: boolean;
    toggleDisplay: () => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    activeItem: string;
    handleItemClick: (itemName: string) => void;
}
const Sidebar: React.FC<SidebarProps> = ({ isActive, toggleDisplay, isDarkMode, toggleDarkMode, activeItem, handleItemClick }) => {

    return (
        <>
            <div className={`sidebar ${isActive ? "active" : ""}`}>
                <div className="sidebar-header">
                    <button onClick={toggleDisplay}>
                        <IoMdClose className='icon' />
                    </button>
                </div>
                <div className="sidebar-content">
                    <ul className="sidebar-items">
                        <li className="sidebar-item" onClick={() => {
                            handleItemClick('home')
                            toggleDisplay()
                        }}>
                            <a href="#hero-section"
                                className={`nav-link  ${activeItem === "home" ? 'active-nav' : ''}`}
                            >
                                <FaHome className="nav-link-icon" /> Home
                            </a>
                        </li>
                        <li className="sidebar-item" onClick={() => {
                            handleItemClick('about')
                            toggleDisplay()
                        }}>
                            <a href="#about-section"
                                className={`nav-link  ${activeItem === "about" ? 'active-nav' : ''}`}
                            >
                                <FaUserAlt className="nav-link-icon" /> About
                            </a>
                        </li>
                        <li className="sidebar-item" onClick={() => {
                            handleItemClick('skills')
                            toggleDisplay()
                        }}>
                            <a href="#skills-section"
                                className={`nav-link  ${activeItem === 'skills' ? 'active-nav' : ''}`}
                            >
                                <FaCogs className="nav-link-icon" /> Skills
                            </a>
                        </li>
                        <li className="sidebar-item" onClick={() => {
                            handleItemClick('projects')
                            toggleDisplay()
                        }}>
                            <a href="#projects-section"
                                className={`nav-link  ${activeItem === 'projects' ? 'active-nav' : ''}`}
                            >
                                <FaCube className="nav-link-icon" /> Projects
                            </a>
                        </li>
                        <li className="sidebar-item" onClick={() => {
                            handleItemClick('contact')
                            toggleDisplay()
                        }}>
                            <a href="#contact-section"
                                className={`nav-link  ${activeItem === 'contact' ? 'active-nav' : ''}`}
                            >
                                <FaLink className="nav-link-icon" /> Contact
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <div className="nav-link" onClick={()=>{
                                toggleDarkMode()
                                toggleDisplay()
                                }}>
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
    );
};

export default Sidebar;