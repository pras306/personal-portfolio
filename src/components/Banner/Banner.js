import React from 'react';
import DescriptionIcon from '@material-ui/icons/Description';

import './Banner.css';
import { GitHub, LinkedIn } from '@material-ui/icons';

const Banner = (props) => {
    return (
        <div className="banner">
            <div className="banner__container">
                <span className="banner__title">{props.title}</span>
                <span className="banner__title">{props.subtitle}</span>
                <div className="banner__icons">
                    <a rel="noreferrer" target="_blank" href="https://github.com/pras306"><GitHub /></a>
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/prasanna-sriram/"><LinkedIn /></a>
                    <a target="_blank" href="/resource/files/PrasannaSriram.pdf" download><DescriptionIcon /></a>
                </div>
            </div>
        </div>
    );
};

export default Banner;
