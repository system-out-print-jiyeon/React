import React, { useCallback, useEffect, useState } from 'react';
import './Footer.css';
import { useStore, useDispatch, useSelector } from 'react-redux';

function Footer(){

    const dispatch = useDispatch();
    const [modalOpen, setModalOpen] = useState(false);
    
    
      const closeModal = () => {
        setModalOpen(false);
      };

    
    const copyUrl = () => {
        navigator.clipboard.writeText("hihi");
        setModalOpen(true);
        dispatch({type : 'modalOpen', payload : modalOpen});
    }

    return (
        <div className="footer">
            <p>footer</p>
            <button onClick={copyUrl}>Copy Text</button>
        </div>
    );

}

export default Footer;