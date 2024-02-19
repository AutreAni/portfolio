import AnimateOnScrollComponent from "../../common/AnimateOnScrollComponent"
import animationVariants from "../../../animationVarients/animationVarients"
import HEADINGS from "../../../data/headings"
import Tabs from "../Tabs"

export default function Hero({ activeTabIndex, onActiveIndexChange }) {
    return (
        <div
            className="hero">
            <div
                className="container flex_box_space_between
                ">
                <AnimateOnScrollComponent
                    className="title_wrapper"
                    variants={animationVariants.slide({ direction: "down" })}>
                    {HEADINGS.work.hero}

                </AnimateOnScrollComponent>

                </div>
            <Tabs
                activeTabIndex={activeTabIndex}
                onActiveIndexChange={onActiveIndexChange}
            />
        </div>
    )

}