import React, { useState, useEffect } from 'react';
import { auth } from '../firebase.js';

const AuthContext = React.createContext();


const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    function signup(email, password, name) {
        auth.createUserWithEmailAndPassword(email, password)
        .then((response)=> {
            const user = response.user;
            user.updateProfile({displayName: name});
        });
        return;
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
    
    function updateUser(data) {
        return currentUser.updateProfile(data);
    }
    
    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    function deleteUser() {
        return currentUser.delete();
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
        updateUser,
        updatePassword,
        deleteUser
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider};