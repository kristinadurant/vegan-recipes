import './style/style.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import { ModalProvider } from './context/ModalContext';
import Home from './pages/Home';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import Profile from './pages/Profile';
import ProfileUpdate from './pages/ProfileUpdate';
import Modal from './components/Modal';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ModalProvider>
          <Header />
          <Modal />
        </ModalProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute exact path='/profile' component={Profile} />
          <PrivateRoute exact path='/profile/update' component={ProfileUpdate} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/forgot-password' component={ForgotPassword} />
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
