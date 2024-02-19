import AnimateOnScrollComponent from "../AnimateOnScrollComponent";
import animationVariants from '../../../animationVarients/animationVarients';

function HorizontalGrid({delay = 0} = {}) {
    return (
        <AnimateOnScrollComponent
                            className = "grid_horizontal_wrapper"

            variants={animationVariants.growWidth({delay})}>
            <div
                className="grid_horizontal"
            />
        </AnimateOnScrollComponent>
    )
}

export default HorizontalGrid;