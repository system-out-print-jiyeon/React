/* eslint-disable */ 

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = "배고파";
  function funcPost(){
    return "하하";
  }

  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '가나다라마바사']);
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);

  let [입력값, 입력값변경] = useState('');
  /*
  function 반복된UI(){
    var 어레이 = [];
    for (var i = 0; i<3; i++){
      어레이.push(<div>안녕</div>);
    }
    return 어레이;
  }
*/


  function 제목바꾸기(){
    var newArray = [...글제목];
    newArray[0] = '여자 코트 추천';
    글제목변경(newArray);
  }

  

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'pink', fontSize:'30px'}}>개발 blog</div>
      </div>
      {/*
      <button onClick={ 제목바꾸기 }>button</button>
      <div className='list'>
        <h4> { 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1) }}> 👍 </span>{따봉}</h4>
        <p>2월 17일 발행</p>
        <hr/>
      </div> 
      <div className='list'>
        <h4> { 글제목[1] } </h4>
        <p>3월 18일 발행</p>
        <hr/>
      </div> 
      <div className='list'>
        <h4> { 글제목[2] } </h4>
        <p>3월 19일 발행</p>
        <hr/>
      </div> 
      */}
      {/* 반복된UI()*/ }

      {
        글제목.map(function(글, i){
          return(
            <div className='list' key={i}>
              <h4 onClick={()=>{누른제목변경(i)}}> { 글 } <span onClick={ () => { 따봉변경(따봉 + 1) }}> 👍 </span>{따봉} </h4>
              <p>3월 18일 발행</p>
              <hr/>
            </div> 
          ) 
        })
      }

      {/*
      <button onClick={()=>{누른제목변경(0)}}>버튼1</button>
      <button onClick={()=>{누른제목변경(1)}}>버튼2</button>
      <button onClick={()=>{누른제목변경(2)}}>버튼3</button>
      */}
      
      
      <div className="publish">
        <input onChange={ (e) => {입력값변경(e.target.value)}} />
        <button onClick={ () => {
          var arrayCopy = [...글제목];
          arrayCopy.unshift(입력값);
          글제목변경( arrayCopy );
        }}>저장</button>
      </div>

      



      <button onClick={ ()=>{ modal변경(!modal)} }>열고닫기</button>



      {
        modal === true 
        ? <Modal 글제목={글제목} 누른제목={누른제목}></Modal> 
        : null
      }


    </div>
  );
}

function Modal(props){
  return (
    <div className='modal'>
      <h2>{ props.글제목[props.누른제목] }</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}






export default App;
