import React, { useEffect, useState } from 'react';
import Sport from '../Sport/Sport';
import './Sports.css'
const Sports = () => {
    const [sports,setSports] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setSports(data))
    },[])
    return (
        <div className='sports-container'>
            {
                sports.map(sport=> <Sport 
                key={sport.id}
                sport = {sport}
                ></Sport>)
            }
        </div>
    );
};

export default Sports;