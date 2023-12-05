import AnimateOnScrollComponent from "../AnimateOnScrollComponent";
import animationVariants from '../../animationVarients/animationVarients';

function VerticalGrid() {
    return (
        <AnimateOnScrollComponent
            rootMargin = "0px"
            variants={animationVariants.growHeight({})}>
            <div
                className="grid_vertical"
            />
        </AnimateOnScrollComponent>
    )
}

export default VerticalGrid;