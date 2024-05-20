import React, { useState } from 'react';
import './ImageTextSection.css';
import stars2 from '../assets/stars.svg';
import img from "../assets/footerimg.svg";
import EmailPopup from './emailPopup';

const Footer = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const handleButtonClick = (option) => {
        if (option === 'Compose Email') {
            setIsPopupOpen(true);
        }
    };

    return (
        <div className='footeruni'>

            <div className="footersection">
                <div className="text-content">
                    <div className='title'>
                        <h1>Let's Connect</h1>
                        <img className='starimg' src={stars2} alt="Stars" />
                    </div>
                    <p className="subtitle2">Hit me up if you've got something new about tech, design or probably food too 👀</p>
                    <button className="action-button" onClick={() => handleButtonClick('Compose Email')}>Get in Touch</button>
                    <EmailPopup show={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
                </div>
                <div className="image-content">
                    <img src={img} alt="Description" />
                </div>
            </div>
            <div className="bottom-text">
                <p>Made with ❣️ in India</p>
            </div>
        </div>

    );
};

export default Footer;
