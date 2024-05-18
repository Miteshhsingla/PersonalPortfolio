import React, { useRef, useEffect, useState } from 'react';
import './index.css';

import img4 from './assets/a.png';
import img3 from './assets/scrolltotop.svg';
import Cursor from "./components/cursor";
import cup from "./assets/cup.svg";
import AboutMeBg from "./assets/AboutMeBg.svg";
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import test from './assets/progothon.png'
import Footer from './components/footer';
import ExperienceSection from './components/Experience';
import star from './assets/star.svg'

const App = () => {
  window.onscroll = function () {
    scrollRotate();
  };

  function scrollRotate() {
    let image = document.getElementById("rotate");

    image.style.transform = "rotate(" + window.pageYOffset / 12 + "deg)";
  }

  useEffect(() => {
    document.title = 'Mitesh Singla';
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

      <section id="about" className="about-section" ref={aboutRef}>
        <div className='planet'>
          <img src={img4} id='rotate' className='planetimg' alt="planet" />
        </div>
        <div className="aboutsection">

          <div className='bgImage'>
            <img src={AboutMeBg} alt="icon" />

          </div>

          <p className="AboutTitle">ABOUT ME</p>
          <p className='aboutMeDescription1'>Hey there, I'm<span style={{ color: '#BB9CFF' }}> Mitesh</span>,<span className='degree'> an engineer by degree</span>, <span className='dev'>developer</span>, <span className='designer'>designer</span> and<span className='tea'> a tea lover</span>.</p>
          <p className='aboutMeDescription2'>I'm someone who’s always been interested in design and <span className='text'>development</span>. I believe for most of the products, both of these go hand in hand.Because of this enthusiasm towards tech & UX I have come across wide variety of technologies and projects, which I try to update here on this website.</p>
        </div>


      </section>
      <div className='marquees'>
        <div class="marquee1">
          <div></div>
        </div>
        <div class="marquee2">
          <div class="textmarquee">UI/UX  <span className='break'><img src={star} /></span>  PRODUCT DESIGN  <span className='break'><img src={star} /></span>  APPLICATION DEVELOPMENT  <span className='break'><img src={star} /></span>  UI/UX  <span className='break'><img src={star} /></span> ANDROID <span className='break'><img src={star} /></span> VISUALS </div>
        </div>
      </div>

      {/* <Projects /> */}
      {/* <Footer /> */}
      <div className="backtotop">
        <img src={img3} alt="arrow" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} />
      </div>
      <div>
        <ExperienceSection />
      </div>

    </div>

  );
};

export default App;