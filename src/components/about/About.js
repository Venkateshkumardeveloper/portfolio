import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// import { FiUsers } from "react-icons/fi";
import { VscFolder } from "react-icons/vsc";
// import { RiTeamFill } from "react-icons/ri";

import PERSON from '../../assets/img2.jpg'
import './about.css'

const About = () => {

  useEffect(() => {
    AOS.init({
      delay: 50,
      easing: 'ease'

    })}, [])
  return (
    <section id="about" data-aos="fade-left">
      <h5>Get to Know</h5>
      <h2>About Us</h2>

      <div className='container about_container'>
        <div className='about_us'>
          <div className='about_us_image'>
            <img src={PERSON} alt="about" />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            {/* <article className='about_card'>

              <FiUsers  className='about_icon'/>
              <h5>Our Team</h5>
              <small>10+ Employees</small>
            </article> */}

            <article className='about_card'>
              <a href="#services">    <VscFolder  className='about_icon'/></a>
              <h5>Projects</h5>
              <small>3+ Completed Projects</small>
            </article>

            {/* <article className='about_card'>
              <RiTeamFill  className='about_icon'/>
              <h5>Clients</h5>
              <small>10+ WorldWide</small>
            </article> */}

          </div>

          <p>
          I am jobseeker with hands on experience in developing and 
designing web applications using HTML, CSS, Javascript, React and 
other frontend frameworks. Including developing complex backend 
systems with Python & Django, webservices and databases.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About