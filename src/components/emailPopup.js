import React, { useState } from 'react';
import '../components/emailPopup.css';

const EmailPopup = ({ show, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSend = () => {
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent('New Message from ' + name)}&body=${encodeURIComponent(message)}`;
        window.location.href = mailtoLink;
        onClose(); // Close the popup after sending
    };

    if (!show) return null;

    return (
        <div className="popup-overlay">
            <div className="popup">
                <button className="close-button" onClick={onClose}>×</button>
                <h2 className='titleemail'>Let's Connect</h2>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                />
                <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="textarea"
                />
                <button onClick={handleSend} className="send-button">Send</button>
            </div>
        </div>
    );
};

export default EmailPopup;
