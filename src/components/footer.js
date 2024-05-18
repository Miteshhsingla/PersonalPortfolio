import React from 'react';
import './ImageTextSection.css';

const Footer = () => {
    return (
        <div className="footersection">
            <div className="text-content">
                <h1 className="title">Your Title Here</h1>
                <p className="subtitle">Your subtitle here.</p>
                <button className="action-button">Click Me</button>
            </div>
            <div className="image-content">
                <img src="your-image-url.jpg" alt="Description" className="image" />
            </div>
        </div>
    );
};

export default Footer;
