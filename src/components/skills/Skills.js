import React from 'react'
import html from '../../assets/htmlimg.jpg'
import css from '../../assets/csslogo.png'
import js from '../../assets/js.png'
import reactjs from '../../assets/react.png'
import bootstrap from '../../assets/bootstrap.png'
import python from '../../assets/python.webp'

import './skills.css'

const Skills = () => {
  return (
    <div id='skills' data-aos="fade-left">
        <h2>Skills</h2>

        <div className='skills_container'>
           <img src={html} alt='html logo' className='skills_items'/>
           <img src={css} alt='css logo' className='skills_items'/>
           <img src={js} alt='js logo' className='skills_items'/>

         


        </div>
        <div className='skills_container'>
        <img src={reactjs} alt='reactjs logo' className='skills_items' />

           <img src={bootstrap} alt='bootstrap logo' className='skills_items'/>
           <img src={python} alt='python logo' className='skills_items'/>


           </div>

    </div>
  )
}

export default Skills