import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Start from './components/Start';
import TimeToGo from './components/TimeToGo';
import About from './components/About';

const App = () => {

  return (
    <>
      <Router>
        <div className="App">

          <Header />

            <Switch>

              <Route exact path="/" component={Start}></Route>
              <Route path="/home" exact component={Home}></Route>
              <Route path="/timetogo" exact component={TimeToGo}></Route>
              <Route path="/about" exact component={About}></Route>

              <Route path="/:invalidUrl">
                <div className='invalid'>
                    잘못 된 주소입니다
                    <br/><br/>
                    <Link to='/' className='linktag'> Go Back </Link>
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
