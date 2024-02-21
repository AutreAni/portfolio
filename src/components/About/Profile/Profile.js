import AnimateOnScrollComponent from "../../common/AnimateOnScrollComponent"
import animationVariants from "../../../animationVarients/animationVarients"
import VerticalGrid from "../../common/Grids/VerticalGrid"
import StackCarousel from "./StackCarousel"
import HEADINGS from "../../../data/headings"

export default function Profile() {
    return (
        <div className="container flex_box_space_between profile">
            <AnimateOnScrollComponent
                className="title_wrapper half_width"
                variants={animationVariants.slide({ direction: "down" })}>
                { HEADINGS.about.profile }
            </AnimateOnScrollComponent>
            <VerticalGrid />

            <AnimateOnScrollComponent
                className="half_width profile_image_wrapper"
                variants={animationVariants.scale({ delay:.5, transformOrigin: "top right" })}
            >
                <div
                    className="profile_image">
                    <StackCarousel />
                </div>
            </AnimateOnScrollComponent>

        </div>
    )
}