import Beach from '../images/beach.png';
import Baby from '../images/baby.png';
import Coconut from '../images/coconut-water.png';
import Airpods from '../images/wireless-headphones.png';
import Weightlifter from '../images/weightlifter.png';
import Yoga from '../images/yoga.png';
import Meditate from '../images/meditate.png'
import AnimateOnScrollComponent from './AnimateOnScrollComponent';
import animationVariants from '../animationVarients/animationVarients';
import { useState } from 'react';
const imagesArr = [

    {
        name: "beach",
        src: Beach
    },
    {
        name: "meditate",
        src: Meditate
    },
    {
        name: "coconut",
        src: Coconut
    },
    {
        name: "yoga",
        src: Yoga
    },
    {
        name: "airpods",
        src: Airpods
    },
    {
        name: "weightlifter",
        src: Weightlifter
    },
    {
        name: "baby",
        src: Baby
    },
]

function Extras() {
    const [startAnimate, setStartAnimate] = useState(null)
    return (
        <AnimateOnScrollComponent
        onAnimationComplete = {() =>setStartAnimate(true) }
        variants={animationVariants.fadeIn()}
        className = "extras_list_wrapper flex_box_start_center">
            <ul
                className={`extras_list flex_box_space_between ${startAnimate? "extras_list_appear":""}`}>
                {
                    imagesArr.map((image, index) => <li
                        className='flex_box_center_center'
                        key={index}>
                        <img
                            src={image.src}
                            alt={image.alt} />
                    </li>)
                }
            </ul>
        </AnimateOnScrollComponent>
    )
}

export default Extras;