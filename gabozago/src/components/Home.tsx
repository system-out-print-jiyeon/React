import React from 'react';
import './Home.css';
import Timer from './Timer';

function Home(){
    return (
        <div className="home">
            <span>Home</span>
            <Timer/>
        </div>
    );
}

export default Home;