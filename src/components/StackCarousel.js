import { ReactComponent as SassIcon } from "../icons/techStack/sass.svg";
import { ReactComponent as HTMLIcon } from "../icons/techStack/html.svg";
import { ReactComponent as ReactIcon } from "../icons/techStack/react.svg";
import { ReactComponent as GitIcon } from "../icons/techStack/git.svg";
import { ReactComponent as ReduxIcon } from "../icons/techStack/redux.svg";
import { ReactComponent as JSIcon } from "../icons/techStack/js.svg";
import { ReactComponent as CSSIcon } from "../icons/techStack/css3.svg";

function StackCarousel() {
    const stackList = [
        { type: 'html', icon: <HTMLIcon /> },
        { type: 'react', icon: <ReactIcon /> },
        { type: 'sass', icon: <SassIcon /> },
        { type: 'redux', icon: <ReduxIcon /> },
        { type: 'js', icon: <JSIcon /> },
        { type: 'git', icon: <GitIcon /> },
        { type: 'css', icon: <CSSIcon /> },
    ];
   
    return (
        <div
            className="stack_carousel_wrapper">
            <ul
             className="stack_carousel">
                {stackList.map((item, index) => (
                    <li
                        className="stack_carousel_item"
                     key={item.type + index}>
                        {item.icon}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default StackCarousel

// export default StackCarousel;
// import { useState, useEffect } from "react";
// const stackList = [
//     { type: 'html', icon: <HTMLIcon /> },
//     { type: 'react', icon: <ReactIcon /> },
//     { type: 'sass', icon: <SassIcon /> },
//     { type: 'redux', icon: <ReduxIcon /> },
//     { type: 'js', icon: <JSIcon /> },
//     { type: 'git', icon: <GitIcon /> },
//     { type: 'css', icon: <CSSIcon /> },
// ];

// function StackCarousel() {
//     const [animationStyles, setAnimationStyles] = useState([]);

//     useEffect(() => {
//         const animateItems = () => {
//             const animationList = stackList.map((item, index) => {
//                 const angle = (index * 2 * Math.PI) / stackList.length;
//                 const radius = 100; // Define the radius of the orbit
//                 const centerX = 50; // Define the center X coordinate of the orbit
//                 const centerY = 50; // Define the center Y coordinate of the orbit

//                 // Calculate the positions based on current time (adjust speed by dividing time)
//                 const time = Date.now() / 2000; // Adjust the divisor for speed
//                 const offsetX = Math.cos(angle + time) * radius/2;
//                 const offsetY = Math.sin(angle + time) * radius/2;

//                 const left = `${centerX + offsetX}%`;
//                 const top = `${centerY + offsetY}%`;

//                 return {
//                     left,
//                     top,
//                 };
//             });

//             setAnimationStyles(animationList);
//         };

//         const animationInterval = setInterval(() => {
//             animateItems();
//         }, 100); // Update position every 100ms (adjust as needed for smoother movement)

//         return () => clearInterval(animationInterval); // Cleanup interval on unmount
//     }, []); // Run only on initial render

//     return (
//         <div className="stack_carousel_wrapper">
//             <ul className="stack_carousel">
//                 {stackList.map((item, index) => (
//                     <li
//                         style={{
//                             position: 'absolute',
//                             transform: 'translate(-50%, -50%)',
//                             ...animationStyles[index], // Apply animation styles
//                         }}
//                         className="stack_carousel_item"
//                         key={item.type + index}
//                     >
//                         {item.icon}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default StackCarousel;

