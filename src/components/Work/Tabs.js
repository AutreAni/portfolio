import HEADINGS from '../../data/headings'
import VerticalGrid from '../common/Grids/VerticalGrid'
import { useNavigate } from 'react-router-dom'
import AnimateOnScrollComponent from '../common/AnimateOnScrollComponent';
import animationVariants from '../../animationVarients/animationVarients';
export default function Tabs({
    activeTabIndex,
}) {
    const tabsArr = HEADINGS.work.tabsArr
    const navigate = useNavigate();
    return (
    <div
     className="tabs_wrapper flex_box_center_end">
                 <VerticalGrid/>

        <ul
            className='flex_box_center_center flex_box_col'>
  
            {
                tabsArr.map((tab, index) => (
                   <AnimateOnScrollComponent
                   variants={animationVariants.slide({direction:"left", delay:(index + 1) * 0.5})}
                    key={index}>
                    <li 
                        onClick={() => navigate(`/work/${tab.toLowerCase()}`)}
                        className={`${activeTabIndex === index ? "active" : ""}`}>
                        <h2>{tab}</h2>
                    </li>
                    </AnimateOnScrollComponent>
                ))
            }
        </ul >
        </div>
    )
}