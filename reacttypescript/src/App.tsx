import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import { Dispatch } from 'redux'
import {RootState} from './index'

let 박스: JSX.Element = <div></div>;
// let 박스: JSX.IntrinsicElements['div'] = <div>dkdkdkd</div>; 더 정확한것

function App() {

  let [user, setUser] = useState<string | number>('kim');

  return (
    <div>
      <h4>안녕안녕</h4>
      <Profile name="철수" age="20"></Profile>
    </div>
  );
}

/* component 만들 때 타입지정 */
function Profile(props:{name : string, age:string}) :JSX.Element{
  return (
    <div> {props.age}살 {props.name}의 프로필입니다</div>
  )
}



export default App;
