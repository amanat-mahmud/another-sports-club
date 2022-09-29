import React from 'react';
import './Sport.css'
const Sport = (props) => {
    const {img,price,name,time} = props.sport;
    // console.log(img,price,name,time)
    return (
        <div className='sport-container'>
            <img src={img} alt="" />
            <div className='sport-info'>
                <h3>Name: {name}</h3>
                <p>Duration:{time} minutes</p>
                <h4>Cost:${price}</h4>
            </div>
            <button className='added-btn'>
                Added
            </button>
        </div>
    );
};

export default Sport;