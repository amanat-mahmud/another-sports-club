import React from 'react';
import './Header.css'
import image from '../../images/another club.png'
const Header = () => {
    return (
        <div className='header'>
            <img src={image} alt='another sports logo'/>
            <h1>Another Sports Club</h1>
        </div>
    );
};

export default Header;