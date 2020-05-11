import React from 'react';
import { Route } from "react-router-dom";
import HomePage from './pages/homePage';

function App() {
  return (
      <div>
        <Route path="/" exact component={HomePage} />
      </div>
  );
}

export default App;
 