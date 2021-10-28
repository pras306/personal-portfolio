import React from 'react';

import './Card.css';

const Card = (props) => {
    const renderContent = () => {
        return <React.Fragment>{props.content}</React.Fragment>
    }

    return (
        <div className="card">
            <div className="card__title">{props.title}</div>
            <div className="card__content">{renderContent()}</div>
        </div>
    )
}

export default Card;
