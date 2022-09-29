import React from 'react';
import './Person.css'
const Person = (props) => {
    const {time} = props;
    return (
        <div className='person-container'>
            <h3>Person</h3>
            <h3>Game Duration:{time}</h3>
        </div>
    );
};

export default Person;<h3>Person</h3>