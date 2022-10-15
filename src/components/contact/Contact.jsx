import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Footer from '../footer/Footer';

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
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
            <Footer />
        </div>
    );
}

export default Contact