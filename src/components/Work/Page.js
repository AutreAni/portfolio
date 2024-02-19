import { Fragment, useEffect, useState } from "react"
import HorizontalGrid from "../common/Grids/HorizontalGrid";
import Overview from "./Overview";
import animationVariants from "../../animationVarients/animationVarients";
import AnimateOnScrollComponent from "../common/AnimateOnScrollComponent";
import Carousel from "../common/Carousel";

export default function Page({
    refsList,
    page,
    myKey,
    visibleKey,
    projectName
}) {
    const [sliderInView, setSliderInview] = useState(false)
    const direction = "up";
    useEffect(() => {
        if (visibleKey === myKey) {
            refsList[myKey].scrollIntoView({ behavior: 'smooth' })
        }
    }, [refsList, myKey, visibleKey])


    return (
        <Fragment
            key={"item_" + myKey}>
            <div
                ref={(el) => refsList[myKey] = el}
                className={"page " + page.name}>
                {
                    page.name === "overview" ?
                        <Overview
                            direction={direction}
                            {...page} />
                        : null
                }
                {page.images?.length ?
                    page.images.map((image, index) => (
                        <AnimateOnScrollComponent
                            key={index}
                            externalControls={{
                                isVisible: visibleKey === myKey
                            }}
                            className={`${page.name}_img_wrapper_${index}`}
                            variants={animationVariants.slide({ direction, delay: index / 2 })}>
                            <img
                                alt={page.name}
                                src={image}
                            />
                        </AnimateOnScrollComponent>
                    ))

                    : null
                }

                {
                    page.slides ?
                        <AnimateOnScrollComponent
                            isInView={setSliderInview}
                            variants={animationVariants.fadeIn()}>
                            <Carousel
                                className={projectName + "_slides_container"}
                                slides={page.slides}
                                autoScroll = {sliderInView}
                            />
                        </AnimateOnScrollComponent>

                        : null
                }
            </div>
            <HorizontalGrid />
        </Fragment>
    )

}