
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Timer from './components/Timer';
import Footer from './components/Footer';
import Start from './components/Start';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/">
            <Home />
          </Route>

          <Route path="/start/:input">
            <Start />
          </Route>

          <Route path="/:input">
            <Home />
          </Route>

          <Route path="*">
            <p>im not found</p>
          </Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
