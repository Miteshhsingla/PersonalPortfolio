// import React, { useRef,useState } from 'react';
// import './index.css';

// import img3 from './assets/scrolltotop.svg';
// import Cursor from "./components/cursor";
// import cup from "./assets/cup.svg";
// import AboutMeBg from "./assets/AboutMeBg.svg";

// import HeroSection from './components/HeroSection';
// import Navbar from './components/Navbar';

// const App = () => {

//   const handleScrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   // const projectsRef = useRef(null);
//   // const resumeRef = useRef(null);
//   // const contactRef = useRef(null);
//   const aboutRef = useRef(null);


//   const scrollToSection = (ref) => {
//     ref.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div>
//       <div className="container">
//         <Cursor />
//         <Navbar scrollToAbout={() => scrollToSection(aboutRef)} />
//         <HeroSection scrollToAbout={() => scrollToSection(aboutRef)} />

//       </div>


//       <section id="about-section" className="about-section" ref={aboutRef}>
//         <div className="aboutsection">
//           <div className='bgImage'>
//             <img src={AboutMeBg} alt="icon" />
//           </div>
//           <p className="AboutTitle">ABOUT ME</p>
//           <p className='aboutMeDescription'>I'm<span style={{ color: 'rgba(195, 190, 171, 1)' }}> Mitesh Singla</span>, someone who’s always been interested in design and development. I believe for most of the products, both of these go hand in hand.Because of this enthusiasm towards tech & UX I have come across wide variety of technologies and projects, which I try to update here on this website.</p>
//         </div>
//       </section>
//       <div>
//         <img src={cup} alt="SVG" className="svg-image" />
//       </div>


//       <div className="backtotop">
//         <img src={img3} alt="arrow" onClick={handleScrollToTop} />
//       </div>
//     </div>

//   );
// };

// export default App;


import React, { useRef, useEffect, useState } from 'react';
import './index.css';

import img3 from './assets/scrolltotop.svg';
import Cursor from "./components/cursor";
import cup from "./assets/cup.svg";
import AboutMeBg from "./assets/AboutMeBg.svg";

import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';

const App = () => {

  useEffect(() => {
    document.title = 'Mitesh Singla'; // Change this to your desired title
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


      <section id="about-section" className="about-section" ref={aboutRef}>
        <div className="aboutsection">
          <div className='bgImage'>
            <img src={AboutMeBg} alt="icon" />
          </div>
          <p className="AboutTitle">ABOUT ME</p>
          <p className='aboutMeDescription1'>Hey there, I'm<span style={{ color: 'rgba(195, 190, 171, 1)' }}> Mitesh</span>,<span className='degree'> an engineer by degree</span>, <span className='dev'>developer</span>, designer and<span className='tea'> tea enthusiast</span>.</p>
          <p className='aboutMeDescription2'>I'm someone who’s always been interested in design and <span className='text'>development</span>. I believe for most of the products, both of these go hand in hand.Because of this enthusiasm towards tech & UX I have come across wide variety of technologies and projects, which I try to update here on this website.</p>


        </div>

      </section>
      <div>
        <img src={cup} alt="SVG" className="svg-image" />
      </div>

      <div className="backtotop">
        <img src={img3} alt="arrow" onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} />
      </div>
    </div>

  );
};

export default App;