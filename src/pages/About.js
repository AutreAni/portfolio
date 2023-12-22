
import StackCarousel from "../components/StackCarousel";
import TechStack from "../components/TechStackList";
import Extras from "../components/Extras";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ReactIcon } from "../icons/techStack/react.svg";
import animationVariants from '../animationVarients/animationVarients';
import AnimateOnScrollComponent from "../components/AnimateOnScrollComponent";
import HorizontalGrid from "../components/Grids/HorizontalGrid";
import VerticalGrid from "../components/Grids/VerticalGrid";
function About() {
    const navigate = useNavigate();


    return (
        <div className="about-wrapper">
            <section>
                <div className="container flex-box-space-between">
                    <AnimateOnScrollComponent
                        className="title_wrapper"
                        variants={animationVariants.slide({ direction: "down" })}>
                        <h2><span>About</span>Me
                        </h2>
                    </AnimateOnScrollComponent>
                    <VerticalGrid />
                    {/* <div
                        className="grid_vertical flex_box_start_end profile_img_wrapper"> */}
                    <AnimateOnScrollComponent
                        variants={animationVariants.scale({ transformOrigin: "top right" })}
                    >
                        <div
                            className="profile_image">
                            <StackCarousel />
                        </div>
                    </AnimateOnScrollComponent>

                    {/* </div> */}
                </div>
                <HorizontalGrid />

                <div className="container flex_box_space_between">
                    <AnimateOnScrollComponent
                        variants={animationVariants.slide({})}
                    >
                        <div className="react_icon_wrapper">
                            <ReactIcon
                                className="react_icon" />
                        </div>
                    </AnimateOnScrollComponent>
                    <VerticalGrid />
                    <div
                    >
                        <p>
                            As a <strong>React-specialized</strong> Frontend Developer, my expertise lies in developing <strong>responsive web pages </strong> with well-tested, precisely <strong>organized code</strong> and <strong>pixel-perfect</strong> intuative interfaces.
                        </p>
                        <Button
                            onClick={() => navigate("/about/resume")}
                            label="see resume" />

                    </div>
                </div>
                <HorizontalGrid />
                <TechStack />
                <div
                    className="extras">
                    <h4>
                        Some Extras
                    </h4>
                    <HorizontalGrid />

                    <div
                        className="flex_box_space_between">
                        <p
                            className="extras_text">
                            I'm Armenian national currently living in Thailand with my small family.
                            If not in front of the computer coding or learning how to code, you’ll probably find me immersed in the joys and challenges of parenting. Even with the little one around, I make time for CrossFit sessions because I firmly believe that nurturing my physical and mental health empowers me. With discipline, I take control, knowing it positively influences my life and the lives of those I cherish. And for some relaxation before bed, I indulge in my form of meditation - weaving with macrame cords while tuning into a podcast.
                        </p>
                        <Extras/>
                    </div>
                    <HorizontalGrid />
                </div>
            </section>
        </div>


    )
}

export default About;

{/* <div
                        className="overview-wrapper">
                        <h3><b>About</b></h3>
                        <p>As a self-taught developer I discovered the world of coding  amidst the challenges of COVID lockdowns, transforming difficult times into a period of remarkable productivity and personal growth.My experience primarily revolves around remote work, where I thrived as a key contributor in a small startup. Operating as a solo developer granted me substantial autonomy and a significant level of <strong>responsibility</strong>, allowing me to make impactful contributions to the company's development while consistently <strong>meeting deliverables</strong> .
                        As a <strong>React-specialized</strong> Frontend Developer, I create cutting-edge, <strong>pixel-perfect</strong> intuative interfaces. My expertise lies in developing <strong>responsive web pages </strong> with well-tested, precisely <strong>organized code</strong>.
                        My professional ambition revolves around <strong>continual improvement</strong>, firmly believing that <b>the path to perfection is paved through hardship</b> . I am dedicated to self-improvement, actively working on refining my skills and capabilities every day. I highly value environments that foster opportunities for advancement and provide the conducive atmosphere necessary for individual and collective growth.
                        </p>

                    </div>
                    <div
                        className="profile_image">
                        <StackCarousel />


                    </div>

                </section>
                <TechStack />
                <section>
                    <p>
                        I'm Armenian national currently living in Thailand with my small family.
                        If not in front of the computer coding or learning how to code, you’ll probably find me immersed in the joys and challenges of parenting. Even with the little one around, I make time for CrossFit sessions because I firmly believe that nurturing my physical and mental health empowers me. With discipline, I take control, knowing it positively influences my life and the lives of those I cherish. And for some relaxation before bed, I indulge in my form of meditation - weaving with macrame cords while tuning into a podcast.
                    </p> */}