import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const ForgotPassword = () => {
    const { resetPassword } = useContext(AuthContext);
    const [formData, setFormData] = useState(null);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    async function handleResetPassword(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await resetPassword(formData.email);
            setMessage('Check your inbox for further instructions');
        } catch(err) {
            setError(err.message);
        }
        setLoading(false);
    }

    return (
        <div>
            <p>Password Reset</p>
            {error && <p>{error}</p>}
            {message && <p>{message}</p>}
            <form onSubmit={handleResetPassword}>
                <label>Email</label>
                <input onChange={handleChange} type='email' name="email"/>
                <button disabled={loading} type='submit'>Reset Password</button>
            </form>
        </div>
    )
}

export default ForgotPassword;
