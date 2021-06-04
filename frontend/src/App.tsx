import './App.css';

import { Route, Router, Switch } from 'react-router-dom';

import Header from './components/Header';
import React from 'react';
import ShoutOutsByName from './components/ShoutOutsByName';
import ShoutOutsList from './components/ShoutOutsList';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route path="/to/:name">
            <ShoutOutsByName />
          </Route>
          <Route path="/">
            <ShoutOutsList />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
