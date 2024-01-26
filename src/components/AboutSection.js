import React, { useRef } from 'react';
import '../index.css';

import AboutMeBg from "../assets/AboutMeBg.svg";
import Skills from './skills';
import img4 from '../assets/a.png'


const AboutSection = () => {
    const aboutRef = useRef(null);
    return (<section id="about-section" className="about-section" ref={aboutRef}>
        <div className='planet'>
            <img src={img4} id='rotate' className='planetimg' alt="planet" />
        </div>
        <div className="aboutsection">

            <div className='bgImage'>
                <h1 class="about-me">About Me</h1>
            </div>
            <p className="AboutTitle">ABOUT ME</p>
            <p className='aboutMeDescription1'>Hey there, I'm<span style={{ color: '#BB9CFF' }}> Lakshay</span>,<span className='degree'> an engineer by degree</span>, <span className='dev'>developer by proffesion</span> and<span className='tea'> coffee enthusiast</span>.</p>
            <Skills />


            {/* </div> */}

            {/* <p className='aboutMeDescription2'>
    As a passionate Full Stack Developer, my journey has been driven by the dual engines of <span className='text'>creativity</span> and <span className='text'>technical prowess</span>. I've always believed that the best digital solutions emerge from the perfect marriage of an intuitive user experience and robust engineering. This belief has propelled me through a diverse spectrum of projects, enriching my skillset across various technologies. On this site, I showcase not just my work, but the stories and experiences behind each project, illustrating my commitment to delivering exceptional digital experiences.
</p> */}

        </div>
        <div className='marquees'>
            <div class="marquee2">
                <div>FRONTEND DEVELOPMENT  <span className='break'>~</span> BACKEND DEVELOPMENT  <span className='break'>~</span>  APPLICATION DEVELOPMENT  <span className='break'>~</span>    <span className='break'>~</span> NATIVE  <span className='break'>~</span>  DATA STRUCTURE </div>
            </div>
        </div>
    </section>)



}
export default AboutSection;