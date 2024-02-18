import React, { useRef } from 'react'

import emailjs from 'emailjs-com';

import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import './contact.css'

const Contact = () => {
  const companyMailId = "contact@b2y.com"
  const companyMessengerId = "https://m.me/yuvakrishna.k"
  const companyWhatsappId = "https://wa.me/919741983488"

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_05e8jre', 'template_6nmzldq', form.current, 'S8A9g2VhAo8RFjuHr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      emailjs.sendForm('service_05e8jre', 'template_xneuagv', form.current, 'S8A9g2VhAo8RFjuHr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon' />
            <h4>Email</h4>
            <h5>venky19sf@gmail.com</h5>
            <a href={companyMailId} target='_blank'>Send a Message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon' />
            <h4>Messenger</h4>
            <h5>venky</h5>
            <a href={companyMessengerId} target='_blank'>Send a Message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon' />
            <h4>Whatsapp</h4>
            <h5>+91 7702253594</h5>
            <a href={companyWhatsappId} target='_blank'>Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows={7} placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary contact_form-button'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact