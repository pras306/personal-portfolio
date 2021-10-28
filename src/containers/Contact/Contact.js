import React from 'react';

import './Contact.css';
import ContactForm from '../../components/ContactForm/ContactForm';

const Contact = (props) => {
    return (
        <div className="contact">
            <ContactForm onLoad={props.onLoad}/>
        </div>
    );
};

export default Contact;
