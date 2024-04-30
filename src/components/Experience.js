// import React from 'react';
// import '../exp.css';
// import timeline from '../assets/timeline.svg'
// import playButton from '../assets/play.svg'

// function App() {

//      // State to manage play/pause functionality
//   const [isPlaying, setIsPlaying] = useState(false);

//   // Logic for changing the active state
//   const handleActiveChange = () => {
//     const nonactive = document.querySelector(".nonactive");
//     const active = document.querySelector(".active");
//     nonactive.classList.toggle("nonactive");
//     nonactive.classList.toggle("active");
//     active.classList.toggle('active');
//     active.classList.toggle('nonactive');
//   };

//   // Toggle play/pause functionality
//   const handlePlayPause = () => {
//     const audio = new Audio('music.mp3');
//     setIsPlaying(prevState => !prevState);
//     if (!isPlaying) {
//       audio.play();
//     } else {
//       audio.pause();
//     }
//   };

//   // Update progress bar
//   useEffect(() => {
//     const bar = document.querySelector("#file");
//     const audio = new Audio('music.mp3');
//     const updateProgressBar = () => {
//       const progress = Math.floor((audio.currentTime / audio.duration) * 100);
//       bar.value = progress;
//     };

//     const interval = setInterval(updateProgressBar, 1000);

//     return () => clearInterval(interval);
//   }, []);

//     return (
//         <html lang="en">
//             <head>
//                 <meta charset="UTF-8" />
//                 <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//                 <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//                 <title>Document</title>
//                 <link rel="preconnect" href="https://fonts.googleapis.com" />
//                 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//                 <link
//                     href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
//                     rel="stylesheet"
//                 />
//                 <link rel="preconnect" href="https://fonts.googleapis.com" />
//                 <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
//                 <link
//                     href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
//                     rel="stylesheet"
//                 />
//                 <script src="https://kit.fontawesome.com/0fc8787d5f.js" crossorigin="anonymous"></script>
//                 <link rel="stylesheet" href="index.css" />
//             </head>
//             <body>
//                 <div className="sectione">
//                     <div className="containere">
//                         <div className="item item1">
//                             <div className="item1container">
//                                 <h2 className="Projects">Projects</h2>
//                             </div>
//                             <div className="selection">
//                                 <div className="active stream">
//                                     <p className="android streamcontent">Android</p>
//                                 </div>
//                                 <div className="stream nonactive">
//                                     <p className="UI streamcontent">UI/UX</p>
//                                 </div>
//                             </div>

//                             <div className="project project1">
//                                 <div className="projectcontent">
//                                     <p className="projectname">Gramio</p>
//                                     <p className="timing">Jan 2023</p>
//                                     <p className="ghub">
//                                         <i className="fa-solid fa-link"></i>Github Link
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="project project2">
//                                 <div className="projectcontent">
//                                     <p className="projectname">Safety 101</p>
//                                     <p className="timing">December 2022</p>
//                                     <p className="ghub">
//                                         <i className="fa-solid fa-link"></i>Github Link
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="project project3">
//                                 <div className="projectcontent">
//                                     <p className="projectname">Bookbits</p>
//                                     <p className="timing">March 2023</p>
//                                     <p className="ghub">
//                                         <i className="fa-solid fa-link"></i>Github Link
//                                     </p>
//                                 </div>
//                             </div>
//                             <div className="project project4">
//                                 <div className="projectcontent">
//                                     <p className="projectname">User Authentication JWT Api</p>
//                                     <p className="timing">April 2023</p>
//                                     <p className="ghub">
//                                         <i className="fa-solid fa-link"></i>Github Link
//                                     </p>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="item item2">
//                             <div className="border">
//                                 <div className="square"></div>
//                             </div>
//                         </div>
//                         <div className="item item3">
//                             <p className="workexperience">Work Experience</p>
//                             <div className="project project3 we">
//                                 <div className="projectcontent ">
//                                     <p className="projectname">University High School, Arizona</p>
//                                     <p className="timing">10th Grade - Current</p>
//                                     <p className="ghub">2017 - Present</p>
//                                 </div>
//                             </div>
//                             <div className="project project3 we">
//                                 <div className="projectcontent ">
//                                     <p className="projectname">University High School, Arizona</p>
//                                     <p className="timing">10th Grade - Current</p>
//                                     <p className="ghub">2017 - Present</p>
//                                 </div>
//                             </div>
//                             <div className="project project3 we">
//                                 <div className="projectcontent ">
//                                     <p className="projectname">University High School, Arizona</p>
//                                     <p className="timing">10th Grade - Current</p>
//                                     <p className="ghub">2017 - Present</p>
//                                 </div>
//                             </div>
//                             <img src={timeline} alt="timeline image" className="image" />
//                         </div>
//                         <div className="item item4 ">
//                             <p className="education workexperience">Education</p>
//                             <div className="combine">
//                                 <p className="timing">2021-25</p>
//                                 <p className="projectname degreee">Bachelor's of Technology(IT)</p>
//                                 <p className="college">Indian Institute of Information Technology Una</p>
//                                 <p className="cgpa">CGPA: 8.05</p>
//                             </div>
//                         </div>
//                         <div className="item item5">
//                             <div className="outer">
//                                 <div className="inner">
//                                     <p className="education workexperience track">Current Fav. track</p>
//                                     <div className="music_player">
//                                         <p className="song_name">Shape of you</p>
//                                         <progress id="file" value="32" max="100">
//                                             32%
//                                         </progress>
//                                         <br />
//                                         <img src={playButton} className="fa-solid fa-play musicbutton"></img>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* adding js contents */}
//                 <script src="index.js"></script>
//             </body>
//         </html>
//     );
// }

// export default App;


import React, { useEffect, useState } from 'react';
import '../exp.css';
import timeline from '../assets/timeline.svg'
import playButton from '../assets/play.svg'


function App() {
    // State to manage play/pause functionality
    const [isPlaying, setIsPlaying] = useState(false);

    // Logic for changing the active state
    const handleActiveChange = () => {
        const nonactive = document.querySelector(".nonactive");
        const active = document.querySelector(".active");
        nonactive.classList.toggle("nonactive");
        nonactive.classList.toggle("active");
        active.classList.toggle('active');
        active.classList.toggle('nonactive');
    };

    // Toggle play/pause functionality
    const handlePlayPause = () => {
        const audio = new Audio("/Users/miteshsingla/Documents/portfolio/public/audio.mp3");
        setIsPlaying(prevState => !prevState);
        if (!isPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    };

    // Update progress bar
    useEffect(() => {
        const bar = document.querySelector("#file");
        const audio = new Audio('music.mp3');

        const updateProgressBar = () => {
            const progress = Math.floor((audio.currentTime / audio.duration) * 100);
            if (!isNaN(progress) && isFinite(progress)) {
                bar.value = progress;
            } else {
                // Handle non-finite progress values
                console.error("Progress value is not finite.");
            }
        };

        const interval = setInterval(updateProgressBar, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
                <script src="https://kit.fontawesome.com/0fc8787d5f.js" crossorigin="anonymous"></script>
                <link rel="stylesheet" href="index.css" />
            </head>
            <body>
                <div className="sectione">
                    <div className="containere">
                        <div className="item item1">
                            <div className="item1container">
                                <h2 className="Projects">Projects</h2>
                            </div>
                            <div className="selection">
                                <div className="active stream" onClick={handleActiveChange}>
                                    <p className="android streamcontent">Android</p>
                                </div>
                                <div className="stream nonactive" onClick={handleActiveChange}>
                                    <p className="UI streamcontent">UI/UX</p>
                                </div>
                            </div>

                            <div className="project project1">
                                <div className="projectcontent">
                                    <p className="projectname">Gramio</p>
                                    <p className="timing">Jan 2023</p>
                                    <p className="ghub">
                                        <i className="fa-solid fa-link"></i>Github Link
                                    </p>
                                </div>
                            </div>
                            <div className="project project2">
                                <div className="projectcontent">
                                    <p className="projectname">Safety 101</p>
                                    <p className="timing">December 2022</p>
                                    <p className="ghub">
                                        <i className="fa-solid fa-link"></i>Github Link
                                    </p>
                                </div>
                            </div>
                            <div className="project project3">
                                <div className="projectcontent">
                                    <p className="projectname">Bookbits</p>
                                    <p className="timing">March 2023</p>
                                    <p className="ghub">
                                        <i className="fa-solid fa-link"></i>Github Link
                                    </p>
                                </div>
                            </div>
                            <div className="project project4">
                                <div className="projectcontent">
                                    <p className="projectname">User Authentication JWT Api</p>
                                    <p className="timing">April 2023</p>
                                    <p className="ghub">
                                        <i className="fa-solid fa-link"></i>Github Link
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item item2">
                            <div className="border">
                                <div className="square"></div>
                            </div>
                        </div>
                        <div className="item item3">
                            <p className="workexperience">Work Experience</p>
                            <div className="project project3 we">
                                <div className="projectcontent ">
                                    <p className="projectname">University High School, Arizona</p>
                                    <p className="timing">10th Grade - Current</p>
                                    <p className="ghub">2017 - Present</p>
                                </div>
                            </div>
                            <div className="project project3 we">
                                <div className="projectcontent ">
                                    <p className="projectname">University High School, Arizona</p>
                                    <p className="timing">10th Grade - Current</p>
                                    <p className="ghub">2017 - Present</p>
                                </div>
                            </div>
                            <div className="project project3 we">
                                <div className="projectcontent ">
                                    <p className="projectname">University High School, Arizona</p>
                                    <p className="timing">10th Grade - Current</p>
                                    <p className="ghub">2017 - Present</p>
                                </div>
                            </div>
                            <img src={timeline} alt="timeline image" className="image" />
                        </div>
                        <div className="item item4 ">
                            <p className="education workexperience">Education</p>
                            <div className="combine">
                                <p className="timing">2021-25</p>
                                <p className="projectname degree">Bachelor's of Technology(IT)</p>
                                <p className="college">Indian Institute of Information Technology Una</p>
                                <p className="cgpa">CGPA: 8.05</p>
                            </div>
                        </div>
                        <div className="item item5">
                            <div className="outer">
                                <div className="inner">
                                    <p className="education workexperience track">Current Fav. track</p>
                                    <div className="music_player">
                                        <p className="song_name">Shape of you</p>
                                        <progress id="file" value="32" max="100">
                                            32%
                                        </progress>
                                        <br />
                                        <img src={playButton} className='fa-solid fa-play musicbutton' onClick={handlePlayPause}></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Script tags */}
                <script src="index.js"></script>
            </body>
        </html>
    );
}

export default App;
