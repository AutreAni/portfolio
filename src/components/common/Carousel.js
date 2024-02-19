import { useEffect, useState, useRef } from "react";

export default function Carousel({
    slides = [],
    speed = 3000,
    transitionSpeed = 500,
    autoScroll = true, 
    className
}) {

    const [visibleSlide, setVisibleSlide] = useState(1)
    const [hasTransitionClass, setHasTransitionClass] = useState(true)
    const [stateSlides, setStateSlides] = useState(slides)
    const intervalId = useRef(null);
    const slideRef = useRef();
    const slideWidth = slideRef?.current?.getBoundingClientRect().width;
    const transformValue =  slideWidth? visibleSlide * Math.round(slideWidth) + "px": visibleSlide * "100%";

    useEffect(() => {
        const slidesWithClones = [...slides]
        slidesWithClones.unshift(slidesWithClones[slidesWithClones.length - 1])
        slidesWithClones.push(slidesWithClones[1])
        setStateSlides(slidesWithClones)

        // if (!!autoScroll) {
        //     start()
        // }
    }, [])
    useEffect(() => {
        if(autoScroll) {
            start()
        }
        else {
            pause()
        }
    }, [autoScroll])

    useEffect(() => {
        if (visibleSlide === stateSlides.length - 1) {
            setTimeout(() => {

                setHasTransitionClass(false)
                setVisibleSlide(1)
            }, transitionSpeed)
        }

        if (visibleSlide === 1) {

            setTimeout(() => {
                setHasTransitionClass(true)
            }, transitionSpeed)
        }

        if (visibleSlide === 0) {
            setTimeout(() => {
                setHasTransitionClass(false)
            }, transitionSpeed)
        }
    }, [visibleSlide])



    const start = () => {
        if (intervalId.current != null) {
            return
        }
        intervalId.current = setInterval(() => {
            setVisibleSlide(prevVisibleSlide => {
                if (prevVisibleSlide > stateSlides.length) {
                    return 0
                }
                return prevVisibleSlide + 1
            })
        }, speed)
    }

    function pause() {
        if(autoScroll || !intervalId.current) {
            return;
        }
        clearInterval(intervalId.current);
        intervalId.current = null;

    }


    const dotIsActive = (index) => {
        return (
            index === visibleSlide ||
            (index === 1 && visibleSlide === stateSlides.length - 1) ||
            (index === stateSlides.length - 2 && visibleSlide === 0)
        )
    }

    return (
        <div className="carousel">
        <div
            ref = {slideRef}
            className={`slides_container ${className}`}>
            <div
                id="slides"
                className={`slides ${hasTransitionClass ? "transition" : ""}`}
                style={{ left: "-"+ transformValue }}>
                {stateSlides.map((slide, index) => {
                    return (
                        <div key={index} className="slide" >
                            <div
                                 style={{ backgroundImage: `url(${slide})`}}
                                className="slide_inner">
                            </div>
                        </div>
                    )
                })}
            </div>
            </div>
            <div className="slide_indicator flex_box_start_center">
                {stateSlides.map((__, index) => {
                    if (index === 0 || index === stateSlides.length - 1) {
                        return null
                    }
                    return (
                        <span key={index}
                            onClick={() => setVisibleSlide(index)}
                            className={dotIsActive(index) ? "active" : ""} />
                    )

                })}
            </div>
        </div>
    )
}