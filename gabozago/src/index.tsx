import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import moment from 'moment';

const timerState = {
  inputTime: '',
  hour: '',
  minute: '',
  second: ''
}

const modalState = {modal : true};

/* 리듀서 생성 */
function inputReducer(state = timerState, action: { type: string; payload: string; }){

  if(action.type == 'tossInputTime'){
    const custInputTime = action.payload+":00";
    const t1 = moment();                            // 현재시간
    const t2 = moment(custInputTime, "HH:mm:ss");   // 입력시간

    const diffHour = moment.duration(t2.diff(t1)).hours();
    const diffMinute = moment.duration(t2.diff(t1)).minutes();
    const diffSecond = moment.duration(t2.diff(t1)).seconds();

    state.inputTime = action.payload;
    state.hour = diffHour < 10 ? "0"+diffHour : ""+diffHour;
    state.minute = diffMinute < 10 ? "0"+diffMinute : ""+diffMinute;
    state.second = diffSecond < 10 ? "0"+diffSecond : ""+diffSecond;

  }
  return state;
}

function modalReducer(state = modalState, action: {type: string; payload: boolean}){
  if(action.type == 'modalOpen'){
    state.modal = action.payload;
  }else{
    state.modal = action.payload;
  }
  return state;
}

const store = createStore(combineReducers({inputReducer, modalReducer}));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
