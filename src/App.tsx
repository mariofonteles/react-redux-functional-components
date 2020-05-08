import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './pages/homePage';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Congratulations! Your App is live. Start working.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <Route path="/" exact component={HomePage} />
      </div>
    </Router>

  );
}

export default App;
 