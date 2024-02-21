import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

import { FaArrowDown } from "react-icons/fa";

import PERSON from '../../assets/venkymainimg1.jpg'
import './header.css'

const Header = ({setSelectedTab}) => {

  const getActiveTab = (id) => {
    setSelectedTab(id)
  }

  useEffect(() => {
    AOS.init({
      delay: 50,
      easing: 'ease'

    })}, [])

  return (
    <>
    
    <header id='home' data-aos="fade-right">
      <div className='container header_container'>

        <div className='header_conatiner_top'>
          <h5 className='welcome_text'>Welcome to,</h5>
               <h1 className='company_name_text'>Venkatesh kumar</h1>
          <h2>Web Developer</h2>
          <CTA getActiveTab={getActiveTab} />
        </div>


        <div className='header_container_bottom'>
          
          <HeaderSocials />
          <div className="person">
            <img src={PERSON} alt="Person" />
          </div>
          <a href="#contact" className='scroll_down'><FaArrowDown /></a>

        </div>

      </div>
    </header>
    </>
  )
}

export default Header