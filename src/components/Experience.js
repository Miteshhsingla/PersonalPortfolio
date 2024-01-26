import React from 'react';
import '../index.css';
import '@fortawesome/fontawesome-free/css/all.css';


const ExperienceSection = () => {
    const experiences = [
        {
            date: 'August 2023 - October 2023',
            designation: 'Product Developer Intern',
            company: 'ARIMA CONSULTING SERVICES',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisi ut suscipit tincidunt, tellus purus euismod tellus.',
            companyLink: 'https://example.com', // Add the URL for the company link
        },
        {
            date: 'June 2023 - Present',
            designation: 'Software Developer Intern',
            company: 'DEMLO INC.',
            details: 'Sed imperdiet, arcu nec convallis cursus, purus turpis eleifend odio, non tincidunt elit turpis vel tortor.',
            companyLink: 'https://example2.com', // Add the URL for the company link
        },
        // Add more experiences as needed
    ];

    return (
        <div className="experience-section">
            <h2 style={{ textAlign: 'center', fontSize: '30px', marginBottom: '20px', fontFamily: 'Ubuntu,sans-serif', color: '#a7baff' }}>EXPERIENCE</h2>
            {experiences.map((experience, index) => (
                <div key={index} className="experience-item">
                    <div className="experience-details">
                        <p style={{ marginLeft: "10%", color: '#a5a5a5', fontFamily: 'Ubuntu,sans-serif', maxWidth: '142px' }}>{experience.date}</p>
                        <p style={{ marginLeft: "10%", color: '#a5a5a5', fontFamily: 'Ubuntu,sans-serif' }}>{experience.designation}</p>
                        <div className='company-det' style={{ marginLeft: "10%", fontFamily: 'Ubuntu,sans-serif' }}>
                            <p>
                                <a href={experience.companyLink} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', textDecoration: 'none' }}>
                                    {experience.company} <i className="fas fa-external-link-alt" style={{ marginLeft: '5px' }}></i>
                                </a>
                            </p>
                            <p className="company-details" style={{ color: '#a5a5a5' }}>{experience.details}</p>
                        </div>
                    </div>
                    <hr style={{ borderColor: '#000000', borderWidth: '0.7px', width: '80%' }} />
                </div>
            ))}
        </div>
    );
};

export default ExperienceSection;
