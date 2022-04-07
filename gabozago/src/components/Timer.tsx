import React, { FC, useCallback } from 'react';
import Moment from 'react-moment';
import moment from 'moment';
import { Duration } from 'moment';


export interface IProps {
    inputTime: string
}

const Timer: FC<IProps> = ({
    inputTime
}:IProps) => {
    
    

    return (
        <div className="timer">
            퇴근시간 {inputTime} 까지...
        </div>
    );
}

export default Timer;