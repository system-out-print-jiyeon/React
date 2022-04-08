import React, { useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from "react-router-dom"; // v6부터는 useHistory 안씀
import { Button } from 'react-bootstrap';


function Start(){
    
    const navigate = useNavigate();

    const [inputTime, setInputTime] = useState<string>('');
    const custInputTime = inputTime+":00";
    const t1 = moment();                            // 현재시간
    const t2 = moment(custInputTime, "HH:mm:ss");   // 입력시간
    const [leftTime, setLeftTime] = useState<string>('');
    
    console.log("t1 : " + t1);
    console.log("t2 : " + t2);
    console.log("now : " + moment().format("HH:mm:ss"));

    const onInputTime = useCallback((e:any) => {
        setInputTime(e.target.value);
        const hour = moment.duration(t2.diff(t1)).hours();
        const minute = moment.duration(t2.diff(t1)).minutes();
        const second = moment.duration(t2.diff(t1)).seconds();
        setLeftTime(hour + "시간 " + minute + "분 " + second + "초");
    },[inputTime]);

    const navigateBtn = () => {
        navigate("/home");
    }


    return (
        <div className="start">
            <div className='timeInput'>
                <div className="home">
                    <span className='titleText'>퇴근시간을 입력하세요</span>
                    <input  type='time'
                            value={inputTime}
                            onChange={onInputTime}/>
                </div>
                <br/>
                <Button variant="light" onClick={navigateBtn} size="sm"> 입력 </Button>
            </div>
        </div>
    );
}

export default Start;