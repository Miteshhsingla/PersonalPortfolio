import React, { useRef } from 'react';
import './index.css';

import img from './bitmoji.svg';
import img2 from './HeroImg.svg';
import bottomImg from './bottomDesign.svg';
import bottomArrow from './bottomArrow.svg';
import github from './socialMediaIcons/ri_github-fill.svg';
import instagram from './socialMediaIcons/ri_instagram-line.svg';
import linkedin from './socialMediaIcons/ri_linkedin-fill.svg';
import twitter from './socialMediaIcons/ri_twitter-fill.svg';
import Cursor from "./cursor"



const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li><a href="#about" >ABOUT</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#resume">RESUME</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  );
};

const HeroSection = ({ scrollToAbout }) => {
  return (
    <div className="hero-section">
      <div className="content">
        <img src={img} alt="icon" className="icon-image" />
        <p className="name">MITESH SINGLA</p>
        <h1 className='heading' >Crafting <span style={{ color: 'rgba(195, 190, 171, 1)' }}>Imagination</span> into Digital Experiences.</h1>
      </div>
      <div>
        <img src={img2} alt="MainImg" className="hero_img" />
      </div>
      <div>
        <img src={bottomImg} alt="design" className="bottom-image" />
      </div>
      <div>
        <img src={bottomArrow} alt="arrow" className="bottom-arrow" onClick={scrollToAbout} />
      </div>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div className="social-media">
      <ul>
        <li><img src={github} alt="icon" className="social-image" /></li>
        <li><img src={instagram} alt="icon" className="social-image" /></li>
        <li><img src={linkedin} alt="icon" className="social-image" /></li>
        <li><img src={twitter} alt="icon" className="social-image" /></li>
      </ul>
    </div>
  );
};



const App = () => {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="container">
        <Cursor />
        <Navbar />
        <HeroSection scrollToAbout={() => scrollToSection(aboutRef)} />
        <SocialMedia />
      </div>

      <section id="about-section" className="section" ref={aboutRef}>
        <div className="aboutsection">
          <p className="name">ABOUT ME</p>
          <p className='aboutMeDescription'>I am Mitesh Singla, someone who’s always been interested in design and development. I believe for most of the products, both of these go hand in hand.Because of this enthusiasm towards tech & UX I have come across wide variety of technologies and projects, which I try to update here on this website.</p>
        </div>
      </section>
    </div>

  );
};


export default App;
