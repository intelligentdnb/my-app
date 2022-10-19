import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../footer/Footer';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import {AiFillCopy} from "react-icons/ai"
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
                        <li>github</li>
                        <li>linkedin</li>
                        <br/>
                        <p>email</p>
                        <li>juandiarts@gmail.com</li>
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