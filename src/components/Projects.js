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
        <section className='projectContainer'>
            <div>
                {/* <img src={Arimacover} data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine" alt='arimarides' className='arimaridesposter' /> */}
                <img src={Arimacover} alt='arimarides' className='poster2' data-aos="fade-out-up"
                    data-aos-duration="2000" />
                <img src={Arimacover} alt='arimarides' className='poster2' data-aos="fade-out-up"
                    data-aos-duration="2000" />
            </div>
            <div className='arimarides'>
                {/* <div >
                    <text className='arimatext'>ARIMA RIDES</text>
                    <img src={one} alt='arimarides' className='one' />
                </div> */}



            </div>


            {/* <div className='project2'>
                <div className='project22'>
                    <text className='Text2'>ARIMA RIDES</text>
                    <img src={two} alt='arimarides' className='two' />
                </div>
                <img src={Arimacover} alt='arimarides' className='poster2' />
            </div> */}

        </section>


    )
}

export default Projects;