import React from 'react';
import '../index.css';


const Navbar = ({ scrollToAbout }) => {
    return (
        <div className="navbar">
            <ul>
                <li><a id="about" href="#about" onClick={scrollToAbout}>ABOUT</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#resume">RESUME</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
    );
};

export default Navbar;