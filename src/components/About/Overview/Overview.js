import AnimateOnScrollComponent from "../../common/AnimateOnScrollComponent"
import VerticalGrid from "../../common/Grids/VerticalGrid"
import animationVariants from "../../../animationVarients/animationVarients"
import TextAppearWithFade from "../../common/TextAppearWithFade"
import { ReactComponent as ReactIcon } from '../../../icons/techStack/react.svg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CONTENT from "../../../data/content";
import useInnerWidth from "../../../helpers/useInnerWidth";
import HorizontalGrid from "../../common/Grids/HorizontalGrid";
import { PATHS } from "../../../constants";

export default function Overview() {
    const [animationComplete, setAnimationComplete] = useState(false);
    const innerWidth = useInnerWidth();
    const navigate = useNavigate();

    const REACTICON = <AnimateOnScrollComponent
        onAnimationComplete={() => setAnimationComplete(true)}
        className="half_width flex_box_center_center"
        variants={animationVariants.slide()}
    >
        <div className="react_icon_wrapper">
            <ReactIcon
                className="react_icon" />
        </div>
    </AnimateOnScrollComponent>
    const OVERVIEWTEXT = <TextAppearWithFade
        className="half_width">
        <div
            className={`overview_wrapper ${animationComplete ? "overview_wrapper_animated" : ""}`}>
            {CONTENT.about.overview}
            <button
                className="overview_button"
                onClick={() => navigate(PATHS.RESUME)}
            >see resume
            </button>
        </div>
    </TextAppearWithFade>
    return (
        <>
            {innerWidth > 700 ?
                <div className="container flex_box_space_between overview">
                    {REACTICON}
                    <VerticalGrid />
                    {OVERVIEWTEXT}
                </div>
                :
                <>
                    <div className="container flex_box_space_between overview">
                        {REACTICON}
                    </div>
                    <HorizontalGrid />
                    <div className="container flex_box_space_between overview">
                        {OVERVIEWTEXT}
                    </div>
                </>
            }
        </>
    )
}