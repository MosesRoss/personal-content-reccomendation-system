import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Personalized Recommendation System</h1>
        </header>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/profile" component={ProfilePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
