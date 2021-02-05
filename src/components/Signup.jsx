import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Signup = () => {
    const { signup } = useContext(AuthContext);
    const [formData, setFormData] = useState({});
    const [error, setError] = useState('');
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
            setError('');
            setLoading(true);
            await signup(formData.email, formData.password, formData.name);
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
                <label>Name</label>
                <input onChange={handleChange} type='text' name="name" required/>
                <label>Email</label>
                <input onChange={handleChange} type='email' name="email" required/>
                <label>Password</label>
                <input onChange={handleChange} type='password' name="password" required/>
                <label>Confirm Password</label>
                <input onChange={handleChange} type='password' name="confirm_password" required/>
                <button className="button" disabled={loading} type='submit'>Sign Up</button>
                <p>Already have an account? Log in</p>
            </form>
        </div>
    )
}

export default Signup;
