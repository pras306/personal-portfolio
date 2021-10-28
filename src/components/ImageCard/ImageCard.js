import React, { useState } from 'react';

import './ImageCard.css';
import Modal from '../Modal/Modal';

const ImageCard = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="ic">
            <div className="ic__container">
                <div className="ic__container__action">
                    <img className="ic__container__action__image" alt={props.title} src={props.imageSrc} onClick={() => setIsOpen(true)} />
                    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
                        <img className="modal__image" alt={props.title} src={props.imageSrc} />
                    </Modal>
                    <div className="ic__container__action__buttons">
                        <a className="ic__container__action__button" rel="noreferrer" target="_blank" href={props.siteLink}>Live Site</a>
                        <a className="ic__container__action__button" rel="noreferrer" target="_blank" href={props.codeLink}>View Code</a>
                    </div>
                </div>
                <div className="ic__container__view">
                    <div className="ic__container__view__title">
                        <span>{props.title}</span>
                    </div>
                    <div className="ic__container__view__content">
                        <h5>{props.contentTitle}</h5>
                        <React.Fragment>{props.content}</React.Fragment>
                    </div>
                    <div className="ic__container__view__footer">
                        <h5>{props.footerTitle}</h5>
                        <React.Fragment>{props.footerContent}</React.Fragment>
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default ImageCard
