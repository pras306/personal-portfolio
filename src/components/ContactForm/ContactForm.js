import React, { useState } from 'react';
import emailjs from 'emailjs-com';

import './ContactForm.css';

const ContactForm = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState(null);

    const validateForm = () => {
        let errorObj = {};
        let formIsValid = true;

        if(!name) {
            errorObj["name"] = "*Please enter your name.";
            formIsValid = false;
        } else {
            errorObj["name"] = "";
        }

        if(message.length <= 0) {
            errorObj["message"] = "*Please provide your message.";
            formIsValid = false;
        } else {
            errorObj["message"] = "";
        }

        setErrors(errorObj);
        return formIsValid;
    }

    const sendMail = (e) => {
        console.log('here');
        e.preventDefault();

        if(!validateForm()) return;
        
        console.log('here 2');
        props.onLoad(true);

        const templateParams = {
            name: name,
            email: email,
            message: message
        };

        emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, templateParams, process.env.REACT_APP_EMAILJS_USER_ID)
        .then((result) => {
            console.log('here 3');
            if(result.status === 200) {
                props.onLoad(false);
                alert("Your message was sent successfully.");
            } else {
                props.onLoad(false);
                alert("There was a problem sending your message. Please try again later.");
            }
        }, (error) => {
            props.onLoad(false);
            alert("There was a problem sending your message. Please try again later.");
        });
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <form className="cf" onSubmit={sendMail}>
            <span className="cf__header">Contact Form</span>
            <div className="cf__input">
                <label htmlFor="name">Name: </label>
                <input name="name" type="text" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <span className="cf__errors">{errors ? errors.name : ""}</span>
            <div className="cf__input">
                <label htmlFor="email">Email ID: </label>
                <input name="email" type="email" placeholder="Enter your email address (OPTIONAL)" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <span className="cf__errors">{errors ? errors.mail : ""}</span>
            <div className="cf__input">
                <label htmlFor="message">Message: </label>
                <textarea name="message" placeholder="Enter your message..."  value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <span className="cf__errors">{errors ? errors.message : ""}</span>
            <button className="cf__button" >Send Message</button>
        </form>
    );
};

export default ContactForm;
