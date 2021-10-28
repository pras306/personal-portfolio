import React from 'react';

import './SkillCard.css';

const SkillCard = (props) => {

    return (
        <div className="skill-card">
            <img className="skill-card__image" alt="react" src={props.image} />
            <div className="skill-card__content">
                <div className="skill-card__content__header">{props.content}</div>
                <div className="skill-card__content__footer">{props.footerTitle}</div>
                <div className="skill-card__content__footer">{props.footerContent}</div>
            </div>
        </div>
    );
};

export default SkillCard;
