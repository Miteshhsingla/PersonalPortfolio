import React from 'react';
import '../index.css';
import icon from '../assets/bitmoji.png'; // Import the icons from a library like react-icons

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <div className="website-icon">
                    <img src={icon} alt='bitmoji' size={24} />
                </div>
                <div className="thank-you">
                    <span>ThankYou!</span>
                </div>
            </div>
            <div className="footer-right">
                <span style={{ color: '#cdcdcd' }}>Let's Connect - </span>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    Instagram
                </a>
                <text style={{ marginRight: 10 }}>/ </text>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <text style={{ marginRight: 10 }}>/ </text>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    Twitter
                </a>
            </div>
        </footer>
    );
};

export default Footer;
