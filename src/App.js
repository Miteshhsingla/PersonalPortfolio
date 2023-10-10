import React from 'react';
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
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#projects">PROJECTS</a></li>
        <li><a href="#resume">RESUME</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
    </div>
  );
};

const HeroSection = () => {
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

      </div>
      <div>
        <img src={bottomArrow} alt="arrow" className="bottom-arrow" />
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


  return (
    <div className="container">
      <Cursor />
      <Navbar />
      <HeroSection />
      <SocialMedia />
      <img src={bottomImg} alt="design" className="bottom-image" />

    </div>
  );
};

export default App;
