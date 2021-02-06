import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ModalContext } from '../../context/ModalContext';

const ForgotPassword = () => {
    const { resetPassword } = useContext(AuthContext);
    const { setModal } = useContext(ModalContext);
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
            <h1>Password Reset</h1>
            {error && <p>{error}</p>}
            {message && <p>{message}</p>}
            <form onSubmit={handleResetPassword}>
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} type='email' name="email" id="email" required/>
                <button className="button" disabled={loading} type='submit'>
                    Reset Password
                </button>
            </form>
            <button className="link" onClick={() => setModal('Login')}>
                Back to Login
            </button>
        </div>
    )
}

export default ForgotPassword;
