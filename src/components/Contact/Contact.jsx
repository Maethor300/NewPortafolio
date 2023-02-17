import React from "react";
import './Contact.css';
import {AiOutlineMail} from 'react-icons/ai';
import {RiMessengerLine} from 'react-icons/ri';
import {AiOutlineWhatsApp} from 'react-icons/ai';
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0wr34gs', 'template_kl7zqel', form.current, 'T5egudhLXXeJiRnvJ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                  <article className="contact__option">
                    <AiOutlineMail className="contact__option-icon"/>
                    <h4>Email</h4>
                    <h5>davidleomendoza300@gmail.com</h5>
                    <a href="mailto:davidleomendoza300@gmail.com" target="_blank">Send a message</a>
                  </article>
                  {/* <article className="contact__option">
                    <RiMessengerLine className="contact__option-icon"/>
                    <h4>Messenger</h4>
                    <h5>My Facebook</h5>
                    <a href="https://facebook.com" target="_blank">Send a message</a>
                  </article> */}
                  <article className="contact__option">
                    <AiOutlineWhatsApp className="contact__option-icon"/>
                    <h4>WhatsApp</h4>
                    <h5>+57 3125322428</h5>
                    <a href="https://api.whatsapp.com/send?phone=573125322428">Send a message</a>
                  </article>
                </div>
                {/* END OF CONTACT OPTIONS*/}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="text" name="email" placeholder="Your Email" required/>
                    <textarea name = "message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}
export default Contact;