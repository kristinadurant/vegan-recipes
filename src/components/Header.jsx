import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
    const { currentUser } = useContext(AuthContext);

    return (
        <header style={{borderBottom: '2px solid #999'}}>
            <div className="inner" style={{display: 'flex', justifyContent: 'space-between'}}>
                <Link to='/'>Home</Link>
                { !currentUser
                ? <Link to='/login'>Log In</Link>
                : <Link to='/profile'>Account</Link>
                }
            </div>    
        </header>
    )
}

export default Header;
