import React, { useState } from 'react';
import '../index.css';
import Contact from '../components/contact';
import img from '../assets/bitmoji.svg';


const Navbar = ({ scrollToAbout }) => {

    const [showChat, setShowChat] = useState(false);

    // Function to toggle the chat component's visibility
    const toggleChat = () => {
        setShowChat(!showChat);
    };
    return (
        <div className='topnav'>
            <div className="icon-image">
                <img src={img} alt="icon" />
            </div>
            <div className="navbar">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact" onClick={toggleChat}>Contact</a></li>
                </ul>
            </div>


            {showChat && <Contact />}


        </div>

    );
};

export default Navbar;