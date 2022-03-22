/* eslint-disable */ 
import React from 'react';
import logo from './logo.svg';
import {Button, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './App.css';
import { useContext, useState } from 'react';
import Data from './data.js';
import Detail from './Detail.js';
import axios from 'axios';
import {Link, Route, Switch} from 'react-router-dom';

export let 재고context = React.createContext();


function App() {

  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      

      <Switch>  {/* 여러개 맞아도 하나만 보여줌. 중복매칭 허용X, 중복발생하면 그중 맨위에것만 */}
        <Route exact path="/">
          <div className='background'>
            <h1>Hello, world!</h1>
            <p>
              This is simple 어쩌구 ~~~~
            </p>
            <p>
              <Button variant="primary">Primary</Button>{' '}
            </p>
          </div>
          <div className="container">
            
            <재고context.Provider value={재고}>

              <div className="row">
                {
                  shoes.map((a,i)=>{
                    return <Card shoes={shoes[i]} i={i} key={i}/>
                  })
                }
              </div>

            </재고context.Provider>
            <button className='btn btn-primary' onClick={()=>{

              /* 로딩중이라는 UI 띄움 */

              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((result)=>{
                /* 로딩중이라는 UI 안보이게 처리 */
                console.log(result.data);
                shoes변경([...shoes, ...result.data]);
              })
              .catch(()=>{
                console.log("실패했어용");
              });
              
            }}>더보기</button>
          </div>
        </Route>
        <Route path="/detail/:id">
          <재고context.Provider value={재고}>
            <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
          </재고context.Provider>
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을 때 보여주기</div>
        </Route>

      </Switch>



    </div>
  );
}






function Card(props){

  let 재고 = useContext(재고context);
  return (
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes" + (props.i+1) + ".jpg"} width="100%" />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content }</p> & <p>{ props.shoes.price }</p>
      <Test></Test>
      
    </div>
  )
}


function Test(){
  let 재고 = useContext(재고context);
  return <p>{재고[0]}</p>
}



export default App;
