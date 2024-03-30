import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Backdrop = ({ onClose }) => {
    return <div className='backdrop' onClick={onClose}></div>;
};

const ModalOverlay = ({ children }) => {
    
    return (
        <div className='modal'>
            <div className='content'>{children}</div>
        </div>
    );
};

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <>
            <Backdrop onClose={onClose} />
            <ModalOverlay>{children}</ModalOverlay>
        </>,
        document.getElementById('modal-root')
    );
};

export default Modal;
