import AnimateOnScrollComponent from "../common/AnimateOnScrollComponent";
import animationVariants from "../../animationVarients/animationVarients";
export default function Overview({
    title,
    about,
    year,
    role,
    techstack,
    direction
}) {
    return (
        <div
            className="overview_wrapper">
            <AnimateOnScrollComponent
                variants={animationVariants.slide({direction:"down"})}>
            <h3
                className="overview_title">
                {title}
            </h3>
            </AnimateOnScrollComponent>
            <div

                className="overview_text_wrapper">
                <AnimateOnScrollComponent
                    className= "overview_text flex_box_start_between"
                variants={animationVariants.slide({direction, delay:0.6})}>
                    <p>About Project</p>
                    <p>{about}</p>
                </AnimateOnScrollComponent>
                <AnimateOnScrollComponent
                    className= "overview_text flex_box_start_between"
                variants={animationVariants.slide({direction, delay:0.9})}>
                   <p>Year</p>
                    <p>{year}</p>
                </AnimateOnScrollComponent>
                <AnimateOnScrollComponent
                    className= "overview_text flex_box_start_between"
                variants={animationVariants.slide({direction, delay:1.2})}>
                      <p>Role</p>
                    <p>{role}</p>
                </AnimateOnScrollComponent>
                <AnimateOnScrollComponent
                margin = {"-50%"}
                    className= "overview_text flex_box_start_between"
                variants={
                    animationVariants.slide({direction:"up", delay:1.5})}>
                    <p>Tech stack</p>
                    <p
                        dangerouslySetInnerHTML={{__html: techstack}}/>
                </AnimateOnScrollComponent>
                
                
            </div>
        </div>
    )
}