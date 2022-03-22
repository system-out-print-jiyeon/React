import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import styled from 'styled-components';
import './Detail.scss';
import {재고context} from './App.js';

let 박스 = styled.div`
    padding : 20px;
`;
let 제목 = styled.h4`
    font-size : 25px;
    color : ${ props => props.색상 }
`;

function Detail(props){
  
    let [alert, alert변경] = useState(true);
    let [inputData, inputData변경] = useState('');
    let { id } = useParams();
    let [누른탭, 누른탭변경] = useState(0);
    let foundProd = props.shoes.find(function(prod){
        return prod.id == id; 
    })
    /* let foundProd = props.shoes.find(x => x.id == id); */
    let history = useHistory();

    let 재고 = useContext(재고context);


    useEffect(()=>{
      /* 2초 후에 alert창 안보이게 */
      let 타이머 = setTimeout(()=>{alert변경(false)}, 2000);
      return ()=>{ clearTimeout(타이머) }
    }, [alert]); /* alert라는 state가 변경이 될 때만 */

    

    return (
    <div className="container">
      <박스>
        <제목 className="red" 색상="blue" >Detail</제목>
      </박스>

      {inputData}
      <input onChange={(e)=>{ inputData변경(e.target.value)}}/>

      {
        alert === true
        ? (<div className='my-alert2'>
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>)
        : null
      }

      

      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{foundProd.title}</h4>
          <p>{foundProd.content}</p>
          <p>{foundProd.price}원</p>

          <Info 재고={props.재고}></Info>

          <button className="btn btn-danger" onClick={ () => {props.재고변경([9, 11, 12])} }>주문하기</button> 

          <button className="btn btn-danger" onClick={()=>{
              history.goBack();
          }}>뒤로가기</button> 
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{누른탭변경(0)}}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{누른탭변경(1)}}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>



  </div>  
  )
};

function Info(props){
  return (
    <p>재고 : {props.재고[0]} </p>
  )
}

export default Detail 