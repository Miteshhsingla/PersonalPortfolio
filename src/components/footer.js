import React from 'react';
import './ImageTextSection.css';
import stars2 from '../assets/stars.svg';
import img from "../assets/footerimg.svg";

const Footer = () => {
    return (
        <div className='footeruni'>

            <div className="footersection">
                <div className="text-content">
                    <div className='title'>
                        <h1>Let's Connect</h1>
                        <img src={stars2} alt="Stars" />
                    </div>
                    <p className="subtitle">Get in Touch with me to discuss more about tech, design and food too 👀</p>
                    <button className="action-button">Hit me up</button>
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
