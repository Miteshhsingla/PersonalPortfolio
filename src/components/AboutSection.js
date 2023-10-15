import React, { useRef } from 'react';
import '../index.css';

import AboutMeBg from "../assets/AboutMeBg.svg";



const AboutSection = () => {
    const aboutRef = useRef(null);
    return (<section id="about-section" className="about-section" ref={aboutRef}>
        <div className="aboutsection">
            <div className='bgImage'>
                <img src={AboutMeBg} alt="icon" />
            </div>
            <p className="AboutTitle">ABOUT ME</p>
            <p className='aboutMeDescription'>I'm<span style={{ color: 'rgba(195, 190, 171, 1)' }}> Mitesh Singla</span>, someone who’s always been interested in design and development. I believe for most of the products, both of these go hand in hand.Because of this enthusiasm towards tech & UX I have come across wide variety of technologies and projects, which I try to update here on this website.</p>
        </div>
    </section>)



}
export default AboutSection;