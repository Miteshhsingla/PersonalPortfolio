// import React from 'react';
import './pre.css';

// const Preloader = () => {
//     return (
//         <div className="content">
//             {[...Array(2)].map((_, index) => (
//                 <div className="bars" key={index}>
//                     {[...Array(7)].map((_, i) => (
//                         <div className="bar" key={i}></div>
//                     ))}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default Preloader;
const PreloadScreen = () => {
    return (
        <div className="preload-screen">
            <p>Loading...</p>
            {/* Add any loading animation or content for the preload screen */}
        </div>
    );
};

export default PreloadScreen;
