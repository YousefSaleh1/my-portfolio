import { IoMdClose } from 'react-icons/io'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import './Sidebar.css'

export default function Sidebar({ toggleDisplay, toggleDarkMode, isDarkMode, menuItems, handleItemClick, activeItem }) {
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
                        {menuItems.map((item) => (
                            <li
                                key={item.name}
                                className='item'
                                onClick={() => {
                                    toggleDisplay();
                                    handleItemClick(item.name);
                                }}
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
