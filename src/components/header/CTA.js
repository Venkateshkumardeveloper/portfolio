import React from 'react'

import resumePDF from '../../assets/Venkateshkumar resume.pdf'

const CTA = props => {


const  handleDownload = ()=>{
  const link = document.createElement('a');

  link.href = resumePDF;
  link.download = 'Venkateshkumar resume.pdf';

  document.body.appendChild(link);
  link.click();

  document.body.removeChild(link);



}




  const externalActiveNav = id => {
    props.getActiveTab(id)
  }


  return (
    <div className='cta'>
        <a href="#contact" className='btn' onClick={() => {externalActiveNav("#contact")}}>Let's Talk</a>
        <a href="#about" className='btn btn-primary' onClick={() => {externalActiveNav("#about")}}>Explore Us</a>
        <button onClick={handleDownload}   className='btn btn-primary' type=''>Resume</button>
    </div>
  )
}

export default CTA