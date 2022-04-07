import React, { useCallback } from 'react';
import './Home.css';
import Timer from './Timer';
import { useState } from 'react';

function Home(){

    const [inputTime, setInputTime] = useState<string>('');
    const onInputTime = useCallback((e:any) => {
        setInputTime(e.target.value);
    },[]);
    


    return (
        <div>
            {/* 나중에 라우터로 분리하기 */}
            <div className='timeInput'>
                <div className="home">
                    <span>퇴근시간을 입력하세요</span>
                    <input  type='time'
                            value={inputTime}
                            onChange={onInputTime}/>
                </div>
            </div>
            <Timer inputTime={inputTime}/>
        </div>
    );
}

export default Home;