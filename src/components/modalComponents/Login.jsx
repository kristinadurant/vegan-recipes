import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { ModalContext } from '../../context/ModalContext';

const Login = () => {
    const { login } = useContext(AuthContext);
    const { setModal } = useContext(ModalContext);
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
            <h1>Log In</h1>
            {error && <p>{error}</p>}
            <form onSubmit={handleLogin}>
                <label htmlFor="email">Email</label>
                <input onChange={handleChange} type='email' name="email" id="email" required/>
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} type='password' name="password" id="password" required/>
                <button className="button" disabled={loading} type='submit'>Log In</button>                    
            </form>
            <button className="link" onClick={() => setModal('ForgotPassword')}> 
                Forgot Password?
            </button>
            <button className="link" onClick={() => setModal('Signup')}> 
                Need an Account?
            </button>
        </div>
    )
}

export default Login;
