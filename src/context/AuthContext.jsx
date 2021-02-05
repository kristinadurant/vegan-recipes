import React, { useState, useEffect } from 'react';
import { auth } from '../firebase.js';

const AuthContext = React.createContext();


const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password) {
        return auth.createUserWithEmailAndPassword(email, password);
    }

    function login(email, password) {
        return auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }
    
    function updateProfile(email) {
        return currentUser.updateEmail(email);
    }
    
    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);


    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateProfile,
        updatePassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider};