import React, { FC, useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import './Home.css';
import Timer from './Timer';

export interface IProps {
    inputTime: string
    leftTime: string
}

const Home: FC<IProps> = ({
    inputTime,
    leftTime
}:IProps) => {

    

    

    return (
        <div>
            <Timer inputTime={inputTime} leftTime={leftTime}/>
        </div>
    );
}

export default Home;