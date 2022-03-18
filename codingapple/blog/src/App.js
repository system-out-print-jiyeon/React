import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = "배고파";
  function funcPost(){
    return "하하";
  }

  let [글제목,글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '가나다라마바사']);

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{color:'pink', fontSize:'30px'}}>개발 blog</div>
      </div>
      <div className='list'>
        <h4> { 글제목[0] } </h4>
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
    </div>
  );
}

export default App;
