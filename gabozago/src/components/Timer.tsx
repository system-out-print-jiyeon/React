import React, { FC, useCallback, useEffect, useState } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { useStore, useDispatch, useSelector } from 'react-redux';


export interface IProps {
    inputTime: string
    leftTime: string
}

 /* state꺼내쓰기 : let 변수 = useSelector(콜백함수) */
let state = useSelector((state) => state);  /* state : redux에 있던 모든 state */
/* dispatch하는 더 쉬운 방법 : useDispatch() */
let dispatch = useDispatch();

const Timer: FC<IProps> = ({
    inputTime,
    leftTime
}:IProps) => {

    console.log("inputtime : " + inputTime);
    console.log("lefttime : " + leftTime);



    return (
        <div className="timer">
            <h1>{leftTime}</h1>
            
        </div>
    );
}

export default Timer;