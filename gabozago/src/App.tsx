
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <div className="App">
        <h3>가보자 가보자</h3>
      </div>
    </Router>
  );
}


function Header() {

  return (
    <div className="header">
        <h3>GABOZAGO</h3>
    </div>
  );
}

export default App;
