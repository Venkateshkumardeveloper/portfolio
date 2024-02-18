import React from 'react'


import { FaFacebookF,FaTwitter,FaLinkedinIn  } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>VK</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer_socials'>
        <a href="https://facebook.com" target="_blank">
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank">
        <FiInstagram />
        </a>
        <a href="https://twitter.com" target="_blank">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" target="_blank">
          <FaLinkedinIn />
        </a>
      </div>

      <div className='footer_copyright'>
        <small>&copy; Venkatesh kumar Pvt Ltd. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer