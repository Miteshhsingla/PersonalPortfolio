import React, { useState } from 'react';
import '../index.css';
import Contact from '../components/contact';
import img from '../assets/bitmoji.svg';

const Navbar = () => {
    const [showChat, setShowChat] = useState(false);

    // Function to toggle the chat component's visibility
    const toggleChat = () => {
        setShowChat(!showChat);
    };

    // Function to handle the scroll to the respective sections
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='topnav'>
            <div className="icon-image">
                <img src={img} alt="icon" />
            </div>
            <div className="navbar">
                <ul>
                    <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
                    <li><a href="#contact" onClick={toggleChat}>Contact</a></li>
                </ul>
            </div>

            {showChat && <Contact />}
        </div>
    );
};

export default Navbar;
