import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* 리듀서 생성 */
function calculateReducer(state: any){
  return state;
}

const store = createStore(calculateReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
