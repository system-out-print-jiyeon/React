import React, { FC, useCallback, useEffect, useState } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { useStore, useDispatch, useSelector } from 'react-redux';




const Timer = () => {

    const hour = useSelector((state: {hour: string; minute: string; second: string;}) => state.hour);
    const minute = useSelector((state: {hour: string; minute: string; second: string;}) => state.minute);
    const second = useSelector((state: {hour: string; minute: string; second: string;}) => state.second);


    const [hours, setHours] = useState<any>(hour);
    const [minutes, setMinutes] = useState<any>(minute);
    const [seconds, setSeconds] = useState<any>(second);

    useEffect(() => {
        const countdown = setInterval(() => {

          if (parseInt(seconds) > 0) {
            setSeconds(parseInt(seconds) - 1);
          }

          if (parseInt(seconds) === 0) {
            if (parseInt(minutes) === 0) {
                clearInterval(countdown);
            } else {
              setMinutes(parseInt(minutes) - 1);
              setSeconds(59);
            }
          }
          

          if (parseInt(seconds) === 0) {
            if (parseInt(minutes) === 0) {
              if (parseInt(hours) === 0) {
                  clearInterval(countdown);
              } else {
                setHours(parseInt(hours) - 1);
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
            <h1>{hours == 0 ? `0${hours}` : hours}:{minutes == 0 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h1>
        </div>
    );
}

export default Timer;