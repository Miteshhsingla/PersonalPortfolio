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
                    <li><a href="#about-section">ABOUT</a></li>
                    <li><a href="#projects-section">PROJECTS</a></li>
                    <li><a href="#projects-section">EXPERIENCE</a></li>
                    <li><a href="#contact" onClick={toggleChat}>CONTACT</a></li>
                </ul>
            </div>


            {showChat && <Contact />}


        </div>

    );
};

export default Navbar;