import React from 'react';
import './Header.css';
import tooth from '../images/tooth.png';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <a href="/"><img src={tooth} alt="" /></a>
            </div>
            <div className="nav">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/doctor">Doctor</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Dental services</a></li>
                    <li><a href="/">Reviews</a></li>
                    <li><a href="/">Blog</a></li>
                    <li><a href="/">Contact us</a></li>
                </ul>
            </div>
        </header>
    );
};

export default Header;