import React, { FC, useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import './Home.css';
import Timer from './Timer';


function Home(){
    
    const [inputTime, setInpuTime] = useState<string>('');


    return (
        <div>
            <br/>
            <h4>⏱ 퇴근시간 {inputTime} 까지</h4>
            <Timer/>
        </div>
    );
}

export default Home;