import './App.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Header from './components/Header';
import React from 'react';
import ShoutOutsByName from './components/ShoutOutsByName';
import ShoutOutsList from './components/ShoutOutsList';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/">
            <ShoutOutsList />
          </Route>
          <Route path="/to/:name">
            <ShoutOutsByName />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
