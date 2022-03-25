/* eslint-disable */ 
import React from 'react';
import logo from './logo.svg';
import {Button, Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './App.css';
import { useContext, useState } from 'react';
import Data from './data.js';
import Detail from './Detail.js';
import Cart from './Cart.js';
import axios from 'axios';
import {Link, Route, Switch} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

/* 같은 변수값을 공유할 범위 생성 , detail에서도 쓸거니까 export해야됨*/
export let 재고context = React.createContext();
console.log(재고context);


function App() {

  let [prod, prod변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Apple store</Navbar.Brand>
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

      

      <Switch>  {/* 여러개 맞아도 하나만 보여줌. 중복매칭 허용X, 중복발생하면 그중 맨위에것만,  v6에서는 <Routes>, <Route>*/}
        <Route exact path="/">
          <div className='background'>
            <h1 className='title'>Apple Store</h1>
            <p className='title'>
              스토어. 좋아하는 Apple 제품을 구입하는 가장 좋은 방법.
            </p>
            <p>
              <Button variant="primary">Primary</Button>{' '}
            </p>
          </div>
          <div className="container">
            
            {/* 같은 값을 공유할 html을 범위로 싸맴 , Card에서 props전송없이 재고라는 state사용가능*/}
            <재고context.Provider value={재고}>

              <div className="row">
                {
                  prod.map((a,i)=>{
                    return <Card prod={prod[i]} i={i} key={i}/>
                  })
                }
              </div>

            </재고context.Provider>
            <button className='btn btn-primary' onClick={()=>{

              /* 로딩중이라는 UI 띄움 */

              axios.get('https://system-out-print-jiyeon.github.io/data2.json')
              .then((result)=>{
                /* 로딩중이라는 UI 안보이게 처리 */
                prod변경([...prod, ...result.data]);
              })
              .catch(()=>{
                console.log("실패했어용");
              });
              
            }}>더보기</button>
          </div>
        </Route>
        <Route path="/detail/:id">
          {/* detail에도 재고state 공유 */}
          <재고context.Provider value={재고}>
            <Detail prod={prod} 재고={재고} 재고변경={재고변경}/>
          </재고context.Provider>
        </Route>

        <Route path='/cart'>
            <Cart></Cart>
        </Route>

        <Route path="/:id">
          <div>아무거나 적었을 때 보여주기</div>
        </Route>

      </Switch>

    </div>
  );
}






function Card(props){
  /* 범위에 공유된 값 사용하기 */
  let 재고 = useContext(재고context);
  let history = useHistory();

  return (
    <div className="col-md-4" onClick={() => {history.push('/detail/' + props.prod.id, (props.i+1))}}>
      <img src={"https://system-out-print-jiyeon.github.io/prod" + (props.i+1) + ".jpg"} width="100%" />
      <h4>{ props.prod.title }</h4>
      <p>{ props.prod.content }</p> & <p>{ props.prod.price }</p>
      {/* 만약 또 컴포넌트안에 넣어야된다면 */}
      <Test></Test>
      
    </div>
  )
}


function Test(){
  let 재고 = useContext(재고context);
  return <p>{재고[0]}</p>
}



export default App;
