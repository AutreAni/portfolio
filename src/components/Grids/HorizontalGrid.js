import AnimateOnScrollComponent from "../AnimateOnScrollComponent";
import animationVariants from '../../animationVarients/animationVarients';

function HorizontalGrid() {
    return (
        <AnimateOnScrollComponent
            rootMargin = "0px"
            variants={animationVariants.growWidth({})}>
            <div
                className="grid_horizontal"
            />
        </AnimateOnScrollComponent>
    )
}

export default HorizontalGrid;