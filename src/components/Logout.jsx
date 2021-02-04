import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Logout = () => {
    const { signup } = useContext(AuthContext);
    const [formData, setFormData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    async function handleSignUp(e) {
        e.preventDefault();
        
        if (formData.password !== formData.confirm_password) {
            return setError('Passwords do not match');
        }

        try {
            setError(null);
            setLoading(true);
            await signup(formData.email, formData.password);
        } catch(err) {
            setError(err.message);
        }
        setLoading(false);
    }

    return (
        <div>
            <p>Sign Up</p>
            {error && <p>{error}</p>}
            <form onSubmit={handleSignUp}>
                <label>Email</label>
                <input onChange={handleChange} type='email' name="email"/>
                <label>Password</label>
                <input onChange={handleChange} type='password' name="password"/>
                <label>Confirm Password</label>
                <input onChange={handleChange} type='password' name="confirm_password"/>
                <button disabled={loading} type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default Logout;
