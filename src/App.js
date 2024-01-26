import React, { useRef, useEffect, useState } from 'react';
import './index.css';

import img3 from './assets/scrolltotop.svg';
import Cursor from "./components/cursor";
import cup from "./assets/cup.svg";
import AboutMeBg from "./assets/AboutMeBg.svg";
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import test from './assets/progothon.png'
import Footer from './components/Footercomp';
import Skills from './components/skills';
import AboutSection from './components/AboutSection';

const App = () => {
  window.onscroll = function () {
    scrollRotate();
  };

  function scrollRotate() {
    let image = document.getElementById("rotate");

    image.style.transform = "rotate(" + window.pageYOffset / 12 + "deg)";
  }

  useEffect(() => {
    document.title = 'Lakshay Arora';
  }, []);
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour 
         in place of 'smooth' */
    });
  };

  window.addEventListener('scroll', toggleVisible);

  // const handleScrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: 'smooth' });
  // };

  // const projectsRef = useRef(null);
  // const resumeRef = useRef(null);
  // const contactRef = useRef(null);
  const aboutRef = useRef(null);


  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div>
      <div className="container">
        <Cursor />
        <Navbar scrollToAbout={() => scrollToSection(aboutRef)} />
        <HeroSection scrollToAbout={() => scrollToSection(aboutRef)} />
      </div>
      <AboutSection/>
      <Projects/>
      <Footer/>
      <div className="backtotop">
        <img src={img3} alt="arrow" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} />
      </div>
    </div>
  );
};

export default App;