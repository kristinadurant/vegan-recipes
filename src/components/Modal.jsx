import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import { ModalContext } from '../context/ModalContext';

const Modal = () => {
    const { modal, setModal } = useContext(ModalContext);
    if (!modal) return null;

    return ReactDom.createPortal(
        <div>
            <div>{modal}</div>
            <button className="button-close" onClick={() => setModal(null)}>x</button>
        </div>,
        document.getElementById('portal')
    )
}

export default Modal;
