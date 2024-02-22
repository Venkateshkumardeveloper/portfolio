import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import { BiCheck } from "react-icons/bi";

import './services.css'

const Services = () => {
  useEffect(() => {
    AOS.init({
      delay: 400,

    })}, [])
  return (
    <section id='services' data-aos="fade-right">
      {/* <h5>What we Offer</h5> */}
      <h2>MY Projects</h2>

      <div className='container services_container'>
     

        <article className='service'>
          <div className='service_head'>
            <h3>HTML and CSS projects</h3>
          </div>
          <p>Click below text to navigate projects</p>

          <ul className='service_list'>
            <li>
           
              <BiCheck className='service_list-icon' />
              <a href="https://venkateshkumardeveloper.github.io/QR-generator/qr.html"target='_blank'  rel="noreferrer" >   <p>QR Generator</p></a>
           
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <a href='https://venkateshkumardeveloper.github.io/Responsive-Registration-form/' target='_blank'  rel="noreferrer" >
              <p>Static Login form Ui</p>
              </a>
            
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <a href='https://venkateshkumardeveloper.github.io/Calculator/' target='_blank'  rel="noreferrer">  <p>Calculator </p></a>
            
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <a href='https://venkyuiproject.netlify.app/project' target='_blank'  rel="noreferrer">   <p>UI clone Photographer portfolio</p></a>
           
            </li>
            {/* <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem Ipsum is simply dummy text</p>
            </li> */}
          </ul>
        </article>
        {/* END OF CONSULTANCY SERVICES */}

        <article className='service'>
          <div className='service_head'>
            <h3>React Js project</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <a href='https://venkateshportfolionairobi.netlify.app/'target='_blank'  rel="noreferrer"  >  <p>Portfolio</p></a>
            
            </li>
            {/* <li>
              <BiCheck className='service_list-icon' />
              <a href='https://venkatesh-react-crud.netlify.app/' target='_blank' rel="noreferrer" >  <p>crud</p></a>
            
            </li> */}
            {/* <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem Ipsum is simply dummy text</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem Ipsum is simply dummy text</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem Ipsum is simply dummy text</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem Ipsum is simply dummy text</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem Ipsum is simply dummy text</p>
            </li> */}
          </ul>
        </article>
        {/* END OF SERVICES */}

        {/* <article className='service'>
          <div className='service_head'>
            <h3>Our Products</h3>
          </div>

          <ul className='service_list'>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem Ipsum is simply dummy text</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem Ipsum is simply dummy text</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem Ipsum is simply dummy text</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem Ipsum is simply dummy text</p>
            </li>
            <li>
              <BiCheck className='service_list-icon' />
              <p>Lorem Ipsum is simply dummy text</p>
            </li>
          </ul>
        </article>
        END OF PRODUCTS
 */}


      </div>
    </section>
  )
}

export default Services