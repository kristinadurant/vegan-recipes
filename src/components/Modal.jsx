import React, { useContext } from 'react';
import ReactDom from 'react-dom';
import { ModalContext } from '../context/ModalContext';
import { Signup, Login, ForgotPassword } from './modalComponents';


const Modal = () => {
    const { modal, setModal } = useContext(ModalContext);
    if (!modal) return null;

    const handleKeyDown = (event) => {
        if(event.keyCode === 27) {       
            window.removeEventListener('keydown', handleKeyDown);
            setModal(null);
        }
    };
    window.addEventListener('keydown', handleKeyDown);
    
    
    return ReactDom.createPortal(
        <div id="modal">
            <div className="overlay" onClick={() => setModal(null)}>
                <button className="button-close" onClick={() => setModal(null)}>
                    <span className="hide">close</span>&#10005;
                </button>
            </div>
            <div className="container">
                { modal==='Signup' && <Signup /> }
                { modal==='Login' && <Login /> }
                { modal==='ForgotPassword' && <ForgotPassword />}
            </div>        
        </div>,
        document.getElementById('portal')
    )
}

export default Modal;
