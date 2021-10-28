import React from 'react';

import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import WorkIcon from '@material-ui/icons/Work';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import SettingsIcon  from '@material-ui/icons/Settings';

const Header = (props) => {
    const handleSmoothScroll = (section) => {
        switch(section) {
            case 'about':
                window.scrollTo({ top: props.about.current.offsetTop, behavior: "smooth" });
                break;
            case 'work':
                window.scrollTo({ top: props.work.current.offsetTop, behavior: "smooth" });
                break;
            case 'skills':
                window.scrollTo({ top: props.skills.current.offsetTop, behavior: "smooth" });
                break;
            case 'contact':
                window.scrollTo({ top: props.contact.current.offsetTop, behavior: "smooth" });
                break;
            default:
                break;
        }
    }

    return (
        <div className="header">
            <div className="header__link" onClick={() => handleSmoothScroll('about')} >
                <PersonIcon />
                <span className="header__link__text">About</span>
            </div>
            <div className="header__link" onClick={() => handleSmoothScroll('work')} >
                <WorkIcon />
                <span className="header__link__text">Work</span>
            </div>
            <div className="header__link" onClick={() => handleSmoothScroll('skills')} >
                <SettingsIcon />
                <span className="header__link__text">Skills</span>
            </div>
            <div className="header__link" onClick={() => handleSmoothScroll('contact')} >
                <ContactMailIcon />
                <span className="header__link__text">Contact</span>
            </div>            
        </div>
    );
};

export default Header;
