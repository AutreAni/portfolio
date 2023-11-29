import { ReactComponent as ConceptIcon } from '../icons/techStack/design_thinking.svg';
import { ReactComponent as MarkupAndStyle } from '../icons/techStack/responsive.svg';
import { ReactComponent as FunctionalityIcon } from '../icons/techStack/functionality.svg';
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';
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
            <h4>Let's get techniqual</h4> 
                        As a <strong>React-specialized</strong> Frontend Developer, I am passionate about creating cutting-edge, <strong>pixel-perfect</strong> interfaces. My expertise lies in developing <strong>responsive web pages </strong> with well-tested, precisely <strong>organized code</strong>, aiming for a seamless blend of functionality and code quality in robust web applications.

            </div>
            <div
                className="techstack_image_wrapper">
                <ul
                    className="flex-box-space-between">

                    {
                        stack.map((item, index) => (
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
                        ))
                    }
                </ul>

            </div>
            <Button
                onClick={() => navigate("/about/resume")}
                label="see resume" />

        </section>

    )
}

export default TechStack