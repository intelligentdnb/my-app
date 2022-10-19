import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../footer/Footer';
import {FaDownload} from "react-icons/fa"
import "./contact.css"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_7qfl2wn', 'template_3bdufol', e.target, 'C3e82jUVt-Q_Ju8sJ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <div className='invisible_header'></div>
            <div className='"contact_container"'>
                <div>
                    <form ref={form} onSubmit={sendEmail} className="container_form">
                        <label>your name</label>
                        <input type="text" name="user_name" className='user_name' />
                        <label>your email</label>
                        <input type="email" name="user_email" className='user_email' />
                        <label>your message to me</label>
                        <textarea name="message" className='message' />
                        <input type="submit" value="send to my email" className='button' />
                    </form>
                </div>
                <div className='contact_list_container'>
                    <ul>
                        <p>socials</p>
                        <li><a href="https://github.com/intelligentdnb" target="__BLANK">github</a></li>
                        <li><a href='https://www.linkedin.com/in/juan-diego-mas-ca-836710243/' target="__BLANK">linkedln</a></li>
                        <br/>
                        <br/>
                        <p>email</p>
                        <li>juandiarts@gmail.com</li>
                        <br/>
                        <br/>
                        <p>curriculum vitae</p>
                        
                        <li><a href='' className='cvs'>dowload in spanish</a></li>
                        <li><a href='' className='cvs'>dowload in english</a></li>
                    </ul>
                </div>
            </div>
            <div className='contact_footer'>
                <Footer />
            </div>
        </div>
    );
}

export default Contact