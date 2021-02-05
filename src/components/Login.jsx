import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
    const { login } = useContext(AuthContext);
    const [formData, setFormData] = useState({});
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
                <input onChange={handleChange} type='email' name="email" required/>
                <label>Password</label>
                <input onChange={handleChange} type='password' name="password" required/>
                <button className="button" disabled={loading} type='submit'>Log In</button>
                <p>Don't have an account? Sign up</p>
            </form>
        </div>
    )
}

export default Login;
