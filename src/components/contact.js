import React, { useState, useEffect, useRef } from 'react';
import img from '../assets/bitmoji.svg';
import cross from '../assets/cross.svg';
import cross_hover from '../assets/cross_hover.svg'

const Contact = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [displayHi, setDisplayHi] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [chatMessages, setChatMessages] = useState([]);
    const chatMessagesRef = useRef(null); // Ref for chat messages container

    const options = ['Just saying Hi', 'Contact Me', 'Download Resume'];

    useEffect(() => {
        if (isOpen && !displayHi) {
            // Simulate a system message arriving with a delay
            setTimeout(() => {
                setChatMessages([
                    ...chatMessages,
                    {
                        text: "Hey👋🏽, What's up?",
                        isSystem: true,
                    }, {
                        text: "I'm Mitesh, and I spend the majority of my time engaged in the design and development of various projects.",
                        isSystem: true,
                    }
                ]);
                setDisplayHi(true);
            }, 0);
        }
    }, [isOpen, chatMessages, displayHi]);

    const handleOptionClick = (option) => {
        if (option === 'Just saying Hi') {
            // Display a message from the user's end
            setChatMessages([
                ...chatMessages,
                { text: 'Hi!', isUser: true },
                { text: 'Hello!', isSystem: true },
                { text: 'I hope you enjoyed exploring my portfolio.', isSystem: true },
                { text: 'Can i help you with anything else?', isSystem: true }

            ]);
        } else if (option === 'Contact Me') {
            setChatMessages([
                ...chatMessages,
                { text: "Let's connect", isUser: true },
                { text: 'Sure', isSystem: true },
                { text: 'Here is my email  miteshhsingla@gmail.com', isSystem: true },
            ]);
        }
        else if (option === 'Download Resume') {
            const url = 'https://drive.google.com/file/d/1f5I0-v1aEGyeUcbWq3rT_VokUS3Ff_2h/view?usp=sharing'; // Replace with your desired URL
    window.open(url, '_blank'); // This 
        }
        else if (option === 'Close') {
            // Close the chat interface
            setIsOpen(false);
        } else {
            // For other options, just display the selected option as a user message
            setChatMessages([...chatMessages, { text: option, isUser: true }]);
        }

        setSelectedOption(option);
    };

    useEffect(() => {
        if (chatMessagesRef.current) {
            chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight;
        }
    }, [chatMessages]);

    const [isCrossHovered, setIsCrossHovered] = useState(false);


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
                            <text>Mitesh Singla</text>
                        </div>
                        <span
                            className="close-button"
                            onClick={() => handleOptionClick('Close')}
                            onMouseEnter={() => setIsCrossHovered(true)}
                            onMouseLeave={() => setIsCrossHovered(false)}
                        >
                            <img
                                // src={isCrossHovered ? cross_hover : cross}
                                src={cross_hover}
                                alt="Back"
                                className="back"
                            />
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
