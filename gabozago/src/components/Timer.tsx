import React from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { Duration } from 'moment';

function Timer(){

    /* const now = moment().format('HH:mm:ss');
    console.log("now : " + now);
    const paramTime = '18:05' + ':00';
    console.log("paramTime : " + paramTime); */
    const durationToHMS = (duration: Duration) => {
        const hour = duration.get('hours');
        const min = duration.get('minutes');
        const sec = duration.get('seconds');
      
        return { hour, min, sec };
      };
    return (
        <div className="timer">
            durationToHMS();
        </div>
    );
}

export default Timer;