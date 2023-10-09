import React from 'react';
import './index.css';
import img from './bitmoji.svg'
import img2 from './heroImage.svg'
import bottomImg from './bottomDesign.svg'

import github from './socialMediaIcons/ri_github-fill.svg'
import instagram from './socialMediaIcons/ri_instagram-line.svg'
import linkedin from './socialMediaIcons/ri_linkedin-fill.svg'
import twitter from './socialMediaIcons/ri_twitter-fill.svg'

const App = () => {
  return (
    <div className="container">
      <div className="navbar">
        <ul>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#resume">RESUME</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
      <div className="hero-section">
        <div className="content">
          <img src={img} alt="icon" className="icon-image" />
          <p className="name">MITESH SINGLA</p>
          <h1>Crafting Imagination into Digital Experiences.</h1>
        </div>
        <div>
          <img src={img2} alt="MainImg" className="hero_img" />
        </div>

      </div>
      <div className="social-media">
        <ul>
          <li><img src={github} alt="icon" className="social-image" /></li>
          <li><img src={instagram} alt="icon" className="social-image" /></li>
          <li><img src={linkedin} alt="icon" className="social-image" /></li>
          <li><img src={twitter} alt="icon" className="social-image" /></li>

        </ul>
      </div>
      <img src={bottomImg} alt="icon" className="bottom-image" />
    </div>
  );
}

export default App;
