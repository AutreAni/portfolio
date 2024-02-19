import Slider from "../common/Slider";
import VerticalGrid from "../common/Grids/VerticalGrid";
import { useEffect, useState, useRef } from "react";

export default function ProjectSlides({slides}) {
    const slideRef = useRef();
    const [height, setHeight] = useState(null)

    useEffect(() => {
        const height = Math.ceil(slideRef?.current?.getBoundingClientRect().height) + "px";
        setHeight(height)
    }, [slideRef])
    return (
        <div
            style={{ height }}
            className="container_outer flex_box_space_between">
            <Slider
                ref={slideRef}
                slides={slides} />
            <div
                className="container work_slides_description flex_box_center_end">
                <VerticalGrid />
                <p>text text text</p>
            </div>
        </div>
    )
}