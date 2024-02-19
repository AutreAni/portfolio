import VerticalGrid from "../../common/Grids/VerticalGrid";
import AnimateOnScrollComponent from "../../common/AnimateOnScrollComponent";
import animationVariants from "../../../animationVarients/animationVarients";
import useInnerWidth from "../../../helpers/useInnerWidth";
import HorizontalGrid from '../../common/Grids/HorizontalGrid'
function ExtrasItem({ extrasItem, index, parentIndex }) {
    const innerWidth = useInnerWidth()
    return (
        <>

            {
                index % 2 && innerWidth > 700 ?
                    <VerticalGrid />
                    : (innerWidth <= 700 && (index || parentIndex)?
                    <HorizontalGrid/>
                    :null)
            }
            <li
                className="extras_list_item flex_box_space_between half_width"
                key={index}>
                <div
                    className='text_wrapper'>
                    <AnimateOnScrollComponent
                        variants={animationVariants.slide({ direction: "down" })}>
                        <p
                            className="subtitle">{extrasItem.title}</p>
                    </AnimateOnScrollComponent>
                    <AnimateOnScrollComponent
                        variants={animationVariants.fadeIn({ delay: 1 })}>
                        <p>{extrasItem.text}</p>
                    </AnimateOnScrollComponent>

                </div>
               
                    <AnimateOnScrollComponent variants={animationVariants.fadeIn({ delay: 1 })}>
                    <div className="image_wrapper" style={{ minWidth: 0 }}>
                            <img src={extrasItem.src} alt={extrasItem.title} />
                            </div>
                    </AnimateOnScrollComponent>

            </li>
        </>
    )
}

export default ExtrasItem;