import { useSelector } from 'react-redux';
import { RootState } from '../modules/reducers';
import backgroundImg from 'src/svg/image.jpg';

function TimeToGo(){
    
    const state = useSelector((state:RootState) => state);
    const inputTime = state.inputReducer.inputTime;

    return (
        <div>
            <br/><br/><br/>
            <img src={backgroundImg} width="100%" height="100%"/>
            <br/>
        </div>
    );
}

export default TimeToGo;