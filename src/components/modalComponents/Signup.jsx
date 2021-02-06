import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ModalContext } from '../../context/ModalContext';

const Signup = () => {
    const { signup } = useContext(AuthContext);
    const { setModal } = useContext(ModalContext);
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
            <h1>Sign Up</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleSignUp}>
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} type='text' name="name" id="name" required/>
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} type='email' name="email" id="email" required/>
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} type='password' name="password" id="password" required/>
                <label htmlFor="confirm_password">Confirm Password</label>
                <input onChange={handleChange} type='password' name="confirm_password" id="confirm_password" required/>
                <button className="button" disabled={loading} type='submit'>Sign Up</button>          
            </form>
            <button className="link" onClick={() => setModal('Login')}>
                Already have an account?
            </button>
        </div>
    )
}

export default Signup;
