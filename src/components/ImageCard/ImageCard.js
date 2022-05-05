import React from 'react';

import './ImageCard.css';

const ImageCard = (props) => {
  return (
    <div className='image-card'>
        <h1 className='image-card__title'>{props.title}</h1>
        <div className='image-card__image_container'>
            <img src={props.image} alt={props.title} />
        </div>
        <div className="image-card__action_buttons">
            <a className="image-card__action_button" rel="noreferrer" target="_blank" href={props.siteLink}>Live Site</a>
            <a className="image-card__action_button" rel="noreferrer" target="_blank" href={props.codeLink}>View Code</a>
        </div>
        <div className='image-card__content'>
            <div className='image-card__content-text'>{props.content}</div>
            <div className='image-card__content-labels'>
                {props.footerLabels.map((label,idx) => {
                    return <span key={idx}>{label}</span>
                })}
            </div>
        </div>
    </div>
  );
};

export default ImageCard;