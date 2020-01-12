import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routes from './components/Routes';

function App() {
  return (
    <Router>
      <div>
        <Routes/>
      </div>
    </Router>
  );
}

export default App;
