import React, { useState, useEffect } from 'react';
import img from '../assets/bitmoji.svg';

const Contact = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [displayHi, setDisplayHi] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const options = ['Say Hi', 'Download Resume', 'Contact Me'];

    useEffect(() => {

        if (isOpen && !displayHi) {
            // Simulate a system message arriving ("Hey, What's up?") with a delay
            setTimeout(() => {
                setChatMessages([
                    ...chatMessages,
                    { text: 'Hey, What\'s up?', isSystem: true },
                ]);
                setDisplayHi(true);
            }, 1000);
        }
    }, [isOpen, chatMessages, displayHi]);

    // const toggleChat = () => {
    //     ;
    // };

    const handleOptionClick = (option) => {
        if (option === 'Say Hi') {
            // Display a message from the user's end
            setChatMessages([
                ...chatMessages,
                { text: 'Hi', isUser: true },
            ]);
        } else if (option === 'Contact Me') {
            // Display "Let's connect" message and provide your email
            setChatMessages([
                ...chatMessages,
                { text: "Let's connect", isSystem: true },
                { text: 'Email: abc@gmail.com', isSystem: true },
            ]);
        } else {
            // For other options, just display the selected option as a user message
            setChatMessages([...chatMessages, { text: option, isUser: true }]);
        }

        setSelectedOption(option);
    };

    return (
        <div className="chat-interface">

            {isOpen && (
                <div className="chat-box">
                    <div className="chat-header">
                        <div className="user-info">
                            <img
                                src={img}
                                alt="Your Name"
                                className="user-photo"
                            />
                            <h2>Mitesh Singla</h2>
                            <p>Ask me a question</p>
                        </div>
                        <span className="close-button" >
                            X
                        </span>
                    </div>
                    <div className="chat-messages">
                        {chatMessages.map((message, index) => (
                            <div
                                key={index}
                                className={`message ${message.isSystem ? 'system' : ''} ${message.isUser ? 'user' : ''
                                    }`}
                            >
                                {message.text}
                            </div>
                        ))}
                    </div>
                    <div className="chat-suggestions">
                        <ul>
                            {options.map((option, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleOptionClick(option)}
                                    className={`option ${option === selectedOption ? 'selected' : ''}`}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
