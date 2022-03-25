import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {Nav} from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import './Detail.scss';
import {재고context} from './App.js';
import { connect } from 'react-redux';

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
    let [스위치, 스위치변경] = useState(false);
    let foundProd = props.prod.find(function(prodct){
        return prodct.id == id; 
    })
    /* let foundProd = props.prod.find(x => x.id == id); */
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
        <제목 className="red" 색상="#363636" >Detail</제목>
      </박스>

      {inputData}
      <input onChange={(e)=>{ inputData변경(e.target.value)}}/>

      {
        alert === true
        ? (<div className='my-alert2'>
            <p className='my-alert-text'>재고가 얼마 남지 않았습니다.</p>
          </div>)
        : null
      }

      

      <div className="row">
        <div className="col-md-6">
          <img src="https://system-out-print-jiyeon.github.io/prod1.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{foundProd.title}</h4>
          <p>{foundProd.content}</p>
          <p>{foundProd.price}원</p>

          {/* input으로 만들기 */}
          <Info 재고={props.재고}></Info>

          <button className="btn btn-danger" onClick={ () => {
            
            props.재고변경([9, 11, 12])
            props.dispatch({type : '항목추가', payload : {id:foundProd.id, name:foundProd.title, quan:1}});
            /* 개발환경에서 새로고침하면 redux도 초기화된다. 개발환경에서 페이지이동시 강제새로고침 안되게하려면 useHistory()훅 사용 */
            history.push('/cart');
            } }>주문하기</button> 
          &nbsp;
          <button className="btn btn-danger" onClick={()=>{
              history.goBack();
          }}>뒤로가기</button> 
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{스위치변경(false); 누른탭변경(0)}}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{스위치변경(false); 누른탭변경(1)}}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>
      
      <CSSTransition in={스위치} classNames="wow" timeout={500}>
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경}/>
      </CSSTransition>
  </div>  
  )
};

function TabContent(props){

  /* 등장하거나 업데이트될 때 */
  useEffect(() => {
    props.스위치변경(true);
  })

  if(props.누른탭 === 0){
    return <div>0번째 내용입니다</div>
  }else if(props.누른탭 === 1){
    return <div>1번째 내용입니다</div>
  }else if(props.누른탭 === 2){
    return <div>2번째 내용입니다</div>
  }
  
}

function Info(props){
  return (
    <p>재고 : {props.재고[0]} </p>
  )
}

function state를props화 (state){
  return {
      state : state.reducer,
      alert열렸니 : state.reducer2
  }
}

export default connect(state를props화)(Detail) 