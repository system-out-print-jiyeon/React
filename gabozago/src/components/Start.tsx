import React, { useCallback, useEffect, useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom"; // v6부터는 useHistory 안씀, useNavigate 씀
import { Button } from 'react-bootstrap';
import './Start.css';


function Start(){
    
    const history = useHistory();
    const dispatch = useDispatch();
    const [inputTime, setInputTime] = useState<string>('');
    
    

    const onInputTime = useCallback((e:any) => {
        setInputTime(e.target.value);
    },[inputTime]);

    const navigateBtn = () => {
        dispatch({type : 'tossInputTime', payload : inputTime})
        history.push("/home");
    }


    return (
        <div className="start">
            <div className='timeInput'>
                <div className="home">
                    <br/>
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