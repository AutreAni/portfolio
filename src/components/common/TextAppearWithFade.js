import AnimateOnScrollComponent from "./AnimateOnScrollComponent"
import animationVariants from "../../animationVarients/animationVarients"

export default function TextAppearWithFade({ children, className }) {
    return (
        <AnimateOnScrollComponent
            className = {className}
            variants={animationVariants.fadeIn({delay:1})}
        >

            {children}
        </AnimateOnScrollComponent>
    )
}