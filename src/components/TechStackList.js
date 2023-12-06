import { ReactComponent as ConceptIcon } from '../icons/techStack/design_thinking.svg';
import { ReactComponent as MarkupAndStyle } from '../icons/techStack/responsive.svg';
import { ReactComponent as FunctionalityIcon } from '../icons/techStack/functionality.svg';
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
import HorizontalGrid from './Grids/HorizontalGrid';
import VerticalGrid from './Grids/VerticalGrid';
const stack = [
    {
        name: "Concept",
        // tags: ["concept"],
        link: "concept",
        description: "Contribute to shaping innovative project ideas through collaborative brainstorming, user-centric validation, and alignment with project goals",
        icon: <ConceptIcon />
    },
    {
        name: "Markup & style",
        tags: "HTML | JSX, CSS | SCSS",
        link: "markup/style",
        description: "Converte designs into intuative, responsive interfaces with meticulously crafted and well structured code.",
        icon: <MarkupAndStyle />
    },
    {
        name: "Bring to life",
        tags: "JS | React | TypeScript | Redux",
        link: "functionality",
        description: "Bring code to life with engaging animations and seamless interactions",
        icon: <FunctionalityIcon />
    },
]

function TechStack() {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
    let timerID = useRef(null)
    // useEffect(() => {
    //     timerID.current = setTimeout(() => {
    //         const newIndex = (activeIndex === stack.length - 1) ? 0 : activeIndex + 1;
    //         setActiveIndex(newIndex);
    //     }, 3000);

    //     return () => {
    //         clearTimeout(timerID.current);
    //     };
    // }, [activeIndex,  setActiveIndex]);

    return (
        <section
            className="techstack">
            <div className="title-wrapper">
            <h4>What I do</h4>                
            </div>
            <HorizontalGrid/>
            <div
                className="techstack_image_wrapper container">
                <ul
                    className="flex-box-space-between">

                    {
                        stack.map((item, index) => (
                            <>
                            {/* {index === 0 && <VerticalGrid/>} */}
                            <li
                                className={index === activeIndex ? "list_active" : ""}
                                key={index}>
                                {item.icon}
                                <p
                                    className='name'>{item.name}</p>
                                <div>
                                    {item.tags ?
                                        <p
                                            className='tag'>{item.tags}</p>
                                        : null}
                                    <p
                                        className='description'>{item.description}</p>
                                </div>
                            </li>
                            {index < stack.length - 1 && <VerticalGrid/> }                    
                            </>
                        ))
                    }
                </ul>
            </div>
            <HorizontalGrid/>
        </section>
    )
}

export default TechStack