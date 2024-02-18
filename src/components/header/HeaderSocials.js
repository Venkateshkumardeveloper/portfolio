import React from 'react'

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";


const HeaderSocials = () => {
    const linkedInUrl = "https://www.linkedin.com/in/mandla-venkateshkumar-630818280/"
    const githubUrl = "https://github.com/Venkateshkumardeveloper"
    const instagramUrl = "https://www.instagram.com/buntyvenky/"
  return (
    <div className='header_socials'>
        <a href={linkedInUrl} target='_blank'><BsLinkedin /></a>
        <a href={githubUrl} target='_blank'><FaGithub /></a>
        <a href={instagramUrl} target='_blank'><FiInstagram /></a>
    </div>
  )
}

export default HeaderSocials