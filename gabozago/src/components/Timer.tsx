import React, { FC, useCallback, useEffect, useState } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { useStore, useDispatch, useSelector } from 'react-redux';




const Timer = () => {

    const hour = useSelector((state: {hour: string; minute: string; second: string;}) => state.hour);
    const minute = useSelector((state: {hour: string; minute: string; second: string;}) => state.minute);
    const second = useSelector((state: {hour: string; minute: string; second: string;}) => state.second);


    const [hours, setHours] = useState<any>(parseInt(hour));
    const [minutes, setMinutes] = useState<any>(parseInt(minute));
    const [seconds, setSeconds] = useState<any>(parseInt(second));

    useEffect(() => {
        const countdown = setInterval(() => {

          if (seconds > 0) {
            setSeconds(seconds - 1);
          }

          if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(countdown);
            } else {
              setMinutes(minutes - 1);
              setSeconds(59);
            }
          }

          if (seconds === 0) {
            if (minutes === 0) {
              if (hours === 0) {
                  clearInterval(countdown);
              } else {
                setHours(hours - 1);
                setMinutes(59);
                setSeconds(59);
              }
            }
          }

        }, 1000);
        return () => clearInterval(countdown);
      }, [hours, minutes, seconds]);


    return (
        <div className="timer">
            <h1>{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
        </div>
    );
}

export default Timer;