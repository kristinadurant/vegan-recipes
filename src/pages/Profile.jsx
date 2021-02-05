import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const { logout, currentUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    async function handleLogout() {
        try {
            setError('');
            await logout();
        } catch(err) {
            setError(err.message);
        }
    }

    return (
        <div>
            <p>{currentUser.email}</p>
            {error && <p>{error}</p>}      
            <button onClick={handleLogout}>Log Out</button>
        </div>
    )
}

export default Profile;
