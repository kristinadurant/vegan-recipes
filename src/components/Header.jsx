import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { ModalContext } from '../context/ModalContext';

const Header = () => {
    const { currentUser } = useContext(AuthContext);
    const { setModal } = useContext(ModalContext);

    function handleClick() {
       setModal(currentUser? 'Account': 'Login');
    }

    return (
        <header style={{borderBottom: '2px solid #999'}}>
            <div className="inner" style={{display: 'flex', justifyContent: 'space-between'}}>
                <Link to='/'>Home</Link>
                <button onClick={handleClick}><i class="fas fa-user"></i></button>
            </div>    
        </header>
    )
}

export default Header;
