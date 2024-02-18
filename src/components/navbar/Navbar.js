import React, { useEffect, useState } from 'react'

import { FaTimes } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";

import './navbar.css'

const Navbar = ({selectedTab}) => {
  const [click, setClick] = useState(false);
  const [navbarColor, setNavbarColor] = useState("transparent");
  const [activeNav, setActiveNav] = useState();

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      // Change the color based on the scroll position
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setNavbarColor("#1f1f38"); // Change to your desired color
      } else {
        setNavbarColor('transparent');
      }
    };

    // Attach the event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => setClick(!click);

  const changeActiveNav = id => {
    setActiveNav(id);
    console.log(id);
    handleClick();
  }

    
  return (
    <nav>
      <div className='nav-container' style={{backgroundColor: navbarColor}}>
        <div className='nav-logo'>
          <a href="#">VK</a>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className='nav-item'><a href="#" className={`nav-links ${activeNav === '#home' ? 'underline' : ''}`} onClick={() => {changeActiveNav('#home')}}>Home</a></li>
          <li className='nav-item'><a href="#about" className={`nav-links ${activeNav === '#about' ? 'underline' : ''}`} onClick={() => {changeActiveNav('#about')}}>About</a></li>
          <li className='nav-item'><a href="#services" className={`nav-links ${activeNav === '#services' ? 'underline' : ''}`} onClick={() => {changeActiveNav('#services')}}>Services</a></li>
          <li className='nav-item'><a href="#contact" className={`nav-links ${activeNav === '#contact' ? 'underline' : ''}`} onClick={() => {changeActiveNav('#contact')}}>Contact</a></li>
        </ul>
        <div className='nav-icon' onClick={handleClick}>
          {click ? (
            <span className='icon'>
              <FaTimes />
            </span>
          ) : (
            <span className='icon'>
              <FaBarsStaggered />
            </span>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar