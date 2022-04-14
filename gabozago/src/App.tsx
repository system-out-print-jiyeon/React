import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Start from './components/Start';
import TimeToGo from './components/TimeToGo';
import About from './components/About';
import Profile from './components/Profile';

const App = () => {

  return (
    <>
      <Router>
        <div className="App">

          <Header />

            <Switch>

              <Route exact path="/" component={Start}></Route>
              <Route exact path="/home/:param" component={Home}></Route>
              <Route exact path="/timetogo" component={TimeToGo}></Route>
              <Route exact path="/about" component={About}></Route>
              <Route exact path="/profile" component={Profile}></Route>

              <Route path="/:invalidUrl">
                <div className='invalid'>
                    잘못 된 주소입니다
                    <br/><br/>
                    <Link to='/' className='linkIco'> 🔙 </Link>
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
