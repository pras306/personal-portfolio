import React from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '@material-ui/icons/Close';

import './Modal.css';

const Modal = (props) => {
    if(!props.open) return null;
    return ReactDOM.createPortal(
        <div className='modal'>
            <CloseIcon className="modal__icon" onClick={props.onClose} />
            <div className="modal__content">
                {props.children}
            </div>
        </div>,
        document.querySelector("#modal")
    )
}

export default Modal;