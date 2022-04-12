
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
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

            <Switch>

              <Route path="/start">
                <Start/>
              </Route>

              <Route path="/home">
                <Home/>  
              </Route>

              <Route path="/:invalidUrl">
                <div className='invalid'>
                    잘못 된 주소입니다
                    <br/><br/>
                    <Link to='/start' className='linktag'> Go Back </Link>
                </div>
              </Route>

            </Switch>

          <Footer />

        </div>
      </Router>
    </>
  );
}


export default App;
