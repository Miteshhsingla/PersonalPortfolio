import React, { useRef } from 'react';
import './index.css';

import img from './assets/bitmoji.svg';
import img2 from './assets/HeroImg.svg';
import bottomImg from './assets/bottomDesign.svg';
import bottomArrow from './assets/bottomArrow.svg';
import github from './assets/socialMediaIcons/ri_github-fill.svg';
import instagram from './assets/socialMediaIcons/ri_instagram-line.svg';
import linkedin from './assets/socialMediaIcons/ri_linkedin-fill.svg';
import twitter from './assets/socialMediaIcons/ri_twitter-fill.svg';
import Cursor from "./components/cursor";
import AboutMeBg from "./assets/AboutMeBg.svg";
import cup from "./assets/cup.svg";


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
      <div className="icon-image">
        <img src={img} alt="icon" />
      </div>

      <div className="content">
        <p className="name">MITESH SINGLA</p>
        <p className='heading' >CRAFTING <span style={{ color: 'rgba(195, 190, 171, 1)' }}>IMAGINATION</span> INTO DIGITAL EXPERIENCES.</p>
      </div>
      <div className="hero_img">
        <img src={img2} alt="MainImg" />
      </div>
      <div className='div-design'>
        <img src={bottomImg} alt="design" />
      </div>
      <div>
        <img src={bottomArrow} alt="arrow" className="bottom-arrow" onClick={scrollToAbout} />
      </div>
      <SocialMedia />

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
  // const projectsRef = useRef(null);
  // const resumeRef = useRef(null);
  // const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <div className="container">
        <Cursor />
        <Navbar />
        <HeroSection scrollToAbout={() => scrollToSection(aboutRef)} />

      </div>


      <section id="about-section" className="Aboutsection" ref={aboutRef}>
        <div className="aboutsection">
          <div className='bgImage'>
            <img src={AboutMeBg} alt="icon" className="bg-image" />
          </div>
          <p className="AboutTitle">ABOUT ME</p>
          <p className='aboutMeDescription'>I'm<span style={{ color: 'rgba(195, 190, 171, 1)' }}> Mitesh Singla</span>, someone who’s always been interested in design and development. I believe for most of the products, both of these go hand in hand.Because of this enthusiasm towards tech & UX I have come across wide variety of technologies and projects, which I try to update here on this website.</p>
        </div>
      </section>
      <div>
        <img src={cup} alt="SVG" className="svg-image" />
      </div>
    </div>

  );
};


export default App;
