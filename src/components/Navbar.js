import React, { useState } from 'react';
import '../index.css';
import Contact from '../components/contact';


const Navbar = ({ scrollToAbout }) => {

    const [showChat, setShowChat] = useState(false);

    // Function to toggle the chat component's visibility
    const toggleChat = () => {
        setShowChat(!showChat);
    };
    return (
        <div>
            <div className="navbar">
                <ul>
                    <li><a id="about" href="#about" onClick={scrollToAbout}>ABOUT</a></li>
                    <li><a href="#projects">PROJECTS</a></li>
                    <li><a href="#resume">RESUME</a></li>
                    <li><a href="#contact" onClick={toggleChat}>CONTACT</a></li>
                </ul>
            </div>


            {showChat && <Contact />}


        </div>

    );
};

export default Navbar;