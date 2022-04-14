import React, { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom"; // v6은 useNavigate 
import { Button } from 'react-bootstrap';
import './Start.css';
import Toast from './common/Toast';
import { RootState } from '../modules/reducers';

function Start(){
    
    const history = useHistory();
    const dispatch = useDispatch();
    const [inputTime, setInputTime] = useState<string>('');
    const toastState = useSelector((state:RootState) => state.toastReducer);
    const [isShow, setIsShow] = useState(false);

    const onInputTime = useCallback((e:any) => {
        setInputTime(e.target.value);
    },[inputTime]);

    const navigateBtn = () => {
        if(inputTime){
            dispatch({type : 'tossInputTime', payload : inputTime})
            history.push("/home/" + inputTime );
        }else{
            setIsShow(true);
        }
    }

    const closeToast = () =>{
        setIsShow(false);
    }

    return (
        <div className="start">
            <div className='timeInput'>
                <div className="home">
                    <br/><br/>
                    <span className='titleText'>퇴근시간을 입력하세요</span>

                    <input  type='time'
                            value={inputTime}
                            onChange={onInputTime}/>
                </div>
                <br/>
                <Button variant="light" onClick={navigateBtn} size="sm"> 입력 </Button>
            </div>

        {
            isShow === true
            ?(
                <div>
                    <Toast theme={toastState.theme} toast={isShow} closeToast={closeToast} textAlign={toastState.textAlign}>
                        시간을 <strong>입력</strong>해주세요 🥺
                    </Toast>
                </div>
                )
            : null
        }

        </div>
    );
}

export default Start;