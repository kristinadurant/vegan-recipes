import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    async function handleLogin(e) {
        e.preventDefault();

        try {
            setError('');
            setLoading(true);
            await login(formData.email, formData.password);
        } catch(err) {
            setError(err.message);
        }
        setLoading(false);
    }

    return (
        <div>
            <p>Log In</p>
            {error && <p>{error}</p>}
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input onChange={handleChange} type='email' name="email"/>
                <label>Password</label>
                <input onChange={handleChange} type='password' name="password"/>
                <button disabled={loading} type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login;
