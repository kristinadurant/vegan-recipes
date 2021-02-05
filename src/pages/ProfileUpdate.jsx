import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const { updateProfile, currentUser } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: currentUser.email
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    async function handleUpdateProfile(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await updateProfile(formData.email);
        } catch(err) {
            setError(err.message);
        }
        setLoading(false);
    }
console.log(formData);
    return (
        <div>
            <p>Update</p>
            {error && <p>{error}</p>}
            <form onSubmit={handleUpdateProfile}>
                <label>Email</label>
                <input onChange={handleChange} type='email' name="email" defaultValue={currentUser.email}/>
                <button disabled={loading} type='submit'>Update</button>
            </form>
        </div>
    )
}

export default Login;
