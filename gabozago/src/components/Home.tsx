import './Home.css';
import Timer from './Timer';
import { useSelector } from 'react-redux';
import { RootState } from '../modules/reducers';

function Home(){
    
    const state = useSelector((state:RootState) => state);
    const inputTime = state.inputReducer.inputTime;

    return (
        <div>
            <br/><br/>
            <h4>⏱ 퇴근시간 {inputTime} 까지</h4>
            <br/><br/>
            <Timer/>
        </div>
    );
}

export default Home;