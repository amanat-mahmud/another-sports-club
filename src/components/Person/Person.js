import React from 'react';
import './Person.css';
import Personimage from '../../images/person.jpg'
const Person = (props) => {
    const {time} = props;
    return (
        <div className='person-container'>
            <div className='person-info-top'>
                <img src={Personimage} alt="person"/>
                <div className='person-name-location'>
                    <p>Amanat</p>
                    <div className='location'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <p>Istanbul,Turkey</p>
                    </div>
                </div>
            </div>
            <h3>Person</h3>
            <h3>Game Duration:{time}</h3>
        </div>
    );
};

export default Person;<h3>Person</h3>