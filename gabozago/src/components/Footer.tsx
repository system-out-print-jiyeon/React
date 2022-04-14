import { useState } from 'react';
import './Footer.scss';
import { useDispatch, useSelector } from 'react-redux';
import Toast from './common/Toast';
import { RootState } from '../modules/reducers';

function Footer(){

    const dispatch = useDispatch();
    const toastState = useSelector((state:RootState) => state.toastReducer);
    const [isShow, setIsShow] = useState(false);
    

    const closeToast = () =>{
      setIsShow(false);
  }
    
    const copyUrl = () => {
        navigator.clipboard.writeText("https://system-out-print-jiyeon.github.io/gabozago/");
        setIsShow(true);
    }

    return (
        <div className="footer">
            <a onClick={copyUrl} className='linktag'> 🔗 Copy Link </a>

            {
                isShow === true
                ?(
                    <div>
                        <Toast theme={toastState.theme} toast={isShow} closeToast={closeToast} textAlign={toastState.textAlign}>
                        🔗 링크를 <strong>복사</strong>했습니다
                        </Toast>
                    </div>
                    )
                : null
            }

        </div>
    );

}

export default Footer;