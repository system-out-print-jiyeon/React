import React, { FC, useCallback, useEffect, useState } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { useStore } from 'react-redux';


export interface IProps {
    inputTime: string
    leftTime: string
}

const Timer: FC<IProps> = ({
    inputTime,
    leftTime
}:IProps) => {

    console.log("inputtime : " + inputTime);
    console.log("lefttime : " + leftTime);



    return (
        <div className="timer">
            <h4>⏱ 퇴근시간 {inputTime} 까지</h4>
            <h1>{leftTime}</h1>
            
        </div>
    );
}

export default Timer;