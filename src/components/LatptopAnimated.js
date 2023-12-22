import React, { useState, useEffect } from 'react';
import AnimateOnScrollComponent from './AnimateOnScrollComponent';
import animationVariants from '../animationVarients/animationVarients';

const LaptopAnimation = () => {
    const [lidClose, setLidClose] = useState(false);
    const [laptopScaleDown, setLaptopScaleDown] = useState(false)
    const [laptopDisappear, setLaptopDisappear] = useState(false)

    function handleTransitionEnd(e) {
        if (e.target) {
            if (e.target.classList.contains("laptop-lid")) {
                setLaptopScaleDown(true)
            } else if (e.target.classList.contains("laptop_wrapper_disappear")) {
                setLaptopDisappear(true)

            }
        }
    }
    const closedPath = "M 70,240 l 341.6 0 l 52.17 0 l -434.7 0 l 52 0 z M 426,250 l -368.4 0 l -56.4 0 c 0 -8.46 8 -8.46 18.05 -8.46 l 443.6 0 c 19.7 0 18 8 18 8.5 l -56 0 z";
    const openPath = 'M 70,240 l 341.643 0 l 0 -215.73 l -341.643 0 l 0 215.73 z M 426,250 l -368.433 0 l 0 -231.663 c 0 -9.87 8.037 -18.048 18.048 -18.048 l 333.606 0 c 9.87 0 18.048 8.037 18.048 18.048 l 0 231.663 z';
 

    return (
        <>
            {
                laptopDisappear ? null :
                    <AnimateOnScrollComponent
                        onAnimationComplete={() => setLidClose(true)}
                        onTransitionEnd={handleTransitionEnd}
                        className={`laptop_wrapper flex_box_center_center ${laptopScaleDown ?
                            "laptop_wrapper_disappear" : ""}`}
                        variants={animationVariants.fadeIn()}>
                        <div className="laptop flex_box_center_center">
                            <svg viewBox="0 0 480 268" width="100%" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink">

                                <g className="laptop-bottom">
                                    <path transform="translate(0, 250)" d="M450,18 L31,18 C21,18 34e-13,14 0,12 L 480,12 C480,14 460,18 450,18 Z" />
                                    <rect x="0" y="250" width="480" height="12" />
                                </g>
                                <path
                                    onTransitionEnd={handleTransitionEnd}
                                    className="laptop-lid"
                                    d={lidClose ? closedPath : openPath}
                                />
                                <text
                                style={lidClose ? { opacity: "0" } : { opacity: "1" }}

                                 x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Courier New, monospace" font-size="20" fill="#333333">
                                    {"<h1>"}
                                    <tspan fill="#007ACC">Hello World</tspan>
                                    {"</h1>"}
                                </text>
                            </svg>
                        </div>
                    </AnimateOnScrollComponent>
            }
        </>
    )

};

export default LaptopAnimation;
