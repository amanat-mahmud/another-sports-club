import React, { useState } from 'react';
import './Person.css';
import Personimage from '../../images/person.jpg';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
const Person = (props) => {
    const {time} = props;
    const [breakTime, setBreakTime] = useState(localStorage.getItem('break-time'));
    const SelectedTime = (time) =>{
        localStorage.setItem('break-time',time);
        // console.log(localStorage.getItem('break-time'));
        // const setTime = localStorage.getItem('break-time');
        setBreakTime(localStorage.getItem('break-time'));
        // useEffect(()=>{},[]) did not work
        
    };
    const notify = () => toast("Congrats!!!Completed a game");
    return (
        <div className='person-container'>
            <div className='person-info-top'>
                <img src={Personimage} alt="person"/>
                <div className='person-name-location'>
                    <p>Kōichi Sakakibara</p>
                    <div className='location'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <p>Istanbul,Turkey</p>
                    </div>
                </div>
            </div>
            <div className='person-info-bottom'>
                <div>
                    <h2>25</h2>
                    <p>Age</p>
                </div>
                <div>
                    <h2>6ft</h2>
                    <p>Height</p>
                </div>
                <div>
                    <h2>80</h2>
                    <p>Weight</p>
                </div>
            </div>
            <h2>Break time</h2>
            <div className='btn-container'>
                <button className='brk-btn' onClick={()=>SelectedTime(5)}>5</button>
                <button className='brk-btn'onClick={()=>SelectedTime(10)}>10</button>
                <button className='brk-btn'onClick={()=>SelectedTime(15)}>15</button>
                <button className='brk-btn'onClick={()=>SelectedTime(20)}>20</button>
                <button className='brk-btn'onClick={()=>SelectedTime(30)}>30</button>
            </div>
            <h3>Game Duration: {time} minutes</h3>
            <h3>Break Time: {breakTime} minutes</h3>
            <button className='game-btn' onClick={notify}>Game Completed</button>
            <ToastContainer/>
        </div>
    );
};

export default Person;<h3>Person</h3>