import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';

let alert초기값 = true;

function reducer2(state=alert초기값, 액션){
  if(액션.type === '닫기'){
    state = false;
    return state;
  }else {
    return state;
  }
}

let 초기값 = [
];

function reducer(state=초기값, 액션){
  let copy = [...state];
  /* if(액션.type === '항목추가'){
    let arr = [];
    
    for(var i in copy ){
      arr.push(copy[i].id);
    }
      if(arr.includes(액션.payload.id)){
        copy[i].quan++
      }else{
        copy.push(액션.payload);
      }
      return copy;
    
  } */
  if(액션.type === '항목추가'){
    let found = state.findIndex((a)=>{return a.id === 액션.payload.id});
    if(found >= 0){
      copy[found].quan++;
      return copy;
    }else{
      copy.push(액션.payload);
      return copy;
    }
  }
   else if (액션.type === '수량증가'){
    let found = state.find((a)=>{return a.id === 액션.데이터});
      found.quan++;
      return copy 
  } else if(액션.type === '수량감소'){
    let found = state.find((a)=>{return a.id === 액션.데이터});
    found.quan--;
    return copy 
  } else {
    return state   
  }
}

let store = createStore(combineReducers({reducer, reducer2}));


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App /> 
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
