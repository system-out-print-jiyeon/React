import React, { FC, useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import './Home.css';
import Timer from './Timer';


function Home(){
    
    const [inputTime, setInpuTime] = useState<string>('');

    const custInputTime = inputTime+":00";
    const t1 = moment();                            // 현재시간
    const t2 = moment(custInputTime, "HH:mm:ss");   // 입력시간
    const [leftTime, setLeftTime] = useState<string>('');
    
    console.log("t1 : " + t1);
    console.log("t2 : " + t2);
    console.log("now : " + moment().format("HH:mm:ss"));
    console.log("custInputTime : " + custInputTime);
    console.log("leftTime : " + leftTime);

    const onInputTime = useCallback((e:any) => {
        // 이걸 넘겨서 계산은 home에서
        const hour = moment.duration(t2.diff(t1)).hours();
        const minute = moment.duration(t2.diff(t1)).minutes();
        const second = moment.duration(t2.diff(t1)).seconds();
        setLeftTime(hour + "시간 " + minute + "분 " + second + "초");
    },[]);

    return (
        <div>
            <br/>
            <h4>⏱ 퇴근시간 {inputTime} 까지</h4>
            <Timer leftTime={leftTime} inputTime={inputTime}/>
        </div>
    );
}

export default Home;