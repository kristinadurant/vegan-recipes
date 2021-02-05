import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const { currentUser, logout, deleteUser } = useContext(AuthContext);
    const [error, setError] = useState('');

    async function handleLogout() {
        try {
            setError('');
            await logout();
        } catch(err) {
            setError(err.message);
        }
    }
    async function handleDelete() {
        try {
            setError('');
            await deleteUser();
        } catch(err) {
            setError(err.message);
        }
    }
    
    return (
        <div>
            <p>{currentUser.displayName}</p>
            <p>{currentUser.email}</p>
            {error && <p>{error}</p>}      
            <button onClick={handleLogout}>Log Out</button>
            <button onClick={handleDelete}>Delete Account</button>
        </div>
    )
}

export default Profile;
