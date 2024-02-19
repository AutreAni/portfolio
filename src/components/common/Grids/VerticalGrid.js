import AnimateOnScrollComponent from "../AnimateOnScrollComponent";
import animationVariants from '../../../animationVarients/animationVarients';
import useInnerWidth from "../../../helpers/useInnerWidth";

function VerticalGrid() {
    const innerWidth = useInnerWidth()
    return (
        <>
            {
                innerWidth > 700 ?
                    <AnimateOnScrollComponent
                    className = "grid_vertical_wrapper"
                        variants={animationVariants.growHeight({})}>
                        <div
                            className="grid_vertical"
                        />
                    </AnimateOnScrollComponent>
                    : null
            }
        </>
    )
}

export default VerticalGrid;