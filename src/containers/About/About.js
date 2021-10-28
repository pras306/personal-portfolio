import React from 'react';

import './About.css';
import { PROFILE_DETAILS } from '../../constants/Profile';
import Card from '../../components/Card/Card';

const About = () => {
    const renderProfile = PROFILE_DETAILS.map((item, idx) => {
        return <Card key={idx} title={item.title} content={item.content}/>
    });

    return (
        <div className="about">
            {renderProfile}
        </div>
    );
};

export default About;
