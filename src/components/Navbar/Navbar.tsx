import { FaCogs, FaHome, FaUserAlt } from 'react-icons/fa';
import './Navbar.css';
import { HiCode } from "react-icons/hi";
import { FaCube, FaLink } from 'react-icons/fa6';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { useState } from 'react';
import { FaBars } from "react-icons/fa";
import Sidebar from '../Sidebar/Sidebar';

function Navbar() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [sideBarActive, setSideBarActive] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
  };

  const toggleDarkMode = (): void => {
    setIsDarkMode(!isDarkMode);
    const rootElement = document.documentElement;
    rootElement.classList.toggle('dark-mode');
  }

  const toggleDisplay = (): void => {
    setSideBarActive(!sideBarActive);
  }

  const menuItems = [
    { name: 'home', icon: <FaHome className='nav-link-icon' />, label: 'Home' },
    { name: 'about', icon: <FaUserAlt className='nav-link-icon' />, label: 'About' },
    { name: 'skills', icon: <FaCogs className='nav-link-icon' />, label: 'Skills' },
    { name: 'projects', icon: <FaCube className='nav-link-icon' />, label: 'Projects' },
    { name: 'contact', icon: <FaLink className='nav-link-icon' />, label: 'Contact' },
  ];
  
  return (
    <>
      <nav className='ys-navbar'>
        <div id='ys-container' className="container" >
          <a className='nav-icon' href="#">
            <HiCode className='icon' />
            <span>Yousef</span>
          </a>
          <button className='ys-toggler' onClick={toggleDisplay} type="button">
            <FaBars />
          </button>
          <div className="nav-info">
            <ul className="nav-item .mx-auto">
            {menuItems.map((item) => (
              <li
                key={item.name}
                className='item'
                onClick={() => handleItemClick(item.name)}
              >
                <a
                  href="#"
                  className={`nav-link  ${activeItem === item.name ? 'active-nav' : ''}`}
                >
                  {item.icon}
                  <span className="nav-link-info">{item.label}</span>
                </a>
              </li>
            ))}
            </ul>
            <ul className="nav-item">
              <li className="item">
                <div className="nav-link" onClick={toggleDarkMode}>
                  {isDarkMode ? <FaSun /> : <FaMoon />}
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>{}
      {sideBarActive && <Sidebar activeItem={activeItem} handleItemClick={handleItemClick} menuItems={menuItems} toggleDisplay={toggleDisplay} toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />}
    </>
  )
}

export default Navbar
