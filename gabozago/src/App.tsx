
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
            <Route element={<Home inputTime={''} leftTime={''}/>} path="/home"></Route>

            <Route element={<Start/>} path="/start"></Route>

          </Routes>

          <Footer />

        </div>
      </Router>
    </>
  );
}


export default App;
