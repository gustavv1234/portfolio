// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/projetos" component={Projetos} />
          <Route path="/contato" component={Contato} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;