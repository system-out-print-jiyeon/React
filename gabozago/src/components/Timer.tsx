import React, { FC, useCallback, useEffect, useState } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { useStore, useDispatch, useSelector } from 'react-redux';


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
            <h1>{leftTime}</h1>
            
        </div>
    );
}

export default Timer;