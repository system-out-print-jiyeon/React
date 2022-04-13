import './Home.css';
import Timer from './Timer';
import { useSelector } from 'react-redux';


function Home(){
    
    const inputTime = useSelector((state: {inputTime: string}) => state.inputTime);



    return (
        <div>
            <br/>
            <h4>⏱ 퇴근시간 {inputTime} 까지</h4>
            <Timer/>
        </div>
    );
}

export default Home;