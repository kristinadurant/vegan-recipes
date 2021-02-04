import './style/style.css';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import RecipePage from './pages/RecipePage';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/vegan-recipes/:id' component={RecipePage} /> 
      </Switch>
    </BrowserRouter>
  );
}

export default App;
