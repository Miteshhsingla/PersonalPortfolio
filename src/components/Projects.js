import React, { useEffect } from 'react';
import '../index.css';
import Arimacover from '../assets/ArimaCover.svg'
import one from '../assets/1.svg'
import two from '../assets/2.svg'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Projects = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (
        <section className='projectContainer' id='projects-section'>
             <div className='marquees'>
        <div class="marquee1">
          <div>PROJECTS  \\  PROJECTS  \\  PROJECTS  \\  PROJECTS  \\  PROJECTS  \\  PROJECTS</div>
        </div>
      </div>
            <div className='project-sections'>
                {/* <img src={Arimacover} alt='arimarides' className='poster2' data-aos="fade-out-up"
                    data-aos-duration="1000" />
                <img src={Arimacover} alt='arimarides' className='poster2' data-aos="fade-out-up"
                    data-aos-duration="2000" />
                <img src={Arimacover} alt='arimarides' className='poster2' data-aos="fade-out-up"
                    data-aos-duration="2000" />
                <img src={Arimacover} alt='arimarides' className='poster2' data-aos="fade-out-up"
                    data-aos-duration="2000" />
                <img src={Arimacover} alt='arimarides' className='poster2' data-aos="fade-out-up"
                    data-aos-duration="2000" />
                <img src={Arimacover} alt='arimarides' className='poster2' data-aos="fade-out-up"
                    data-aos-duration="2000" /> */}
                <div className='project-section'>
                    <text>Arima Rides</text>
                </div>
                <div className='project-section'>
                    <text>Arima Rides</text>
                </div>
            </div>

        </section>


    )
}

export default Projects;