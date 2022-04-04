
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Start from './components/Start';

const App = () => {
  return (
    <>
      <Router>
        <div className="App">

          <Header />

          <Routes>
            <Route element={<Home/>} path="/"></Route>

            <Route element={<Start/>} path="/start/:input"></Route>

            <Route element={<Home/>} path="/:input"></Route>

          </Routes>

          <Footer />

        </div>
      </Router>
    </>
  );
}


export default App;
