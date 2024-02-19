import CONTENT from '../../../data/content';
import HorizontalGrid from '../../common/Grids/HorizontalGrid';
import ExtrasItem from './ExtrasItem';
import useInnerWidth from "../../../helpers/useInnerWidth";


function ExtrasList() {
    const innerWidth = useInnerWidth()
    const extrasArr =  CONTENT.home.extrasArr;
    const horizontalGridItems = [];
    extrasArr.forEach((extras, index) => {
        if (index % 2) {
            horizontalGridItems.push(<HorizontalGrid key={`horizontal_${index}`} />);
        }
    });
    return (
        extrasArr.map((extrasArrEach, index) => <div
            key = {index}>
            <ul
                className={`container extras_list flex_box_space_between`}>
                {extrasArrEach.map((extra, selfIndex) => <ExtrasItem
                    extrasItem={extra}
                    key={selfIndex}
                    index = {selfIndex}
                    parentIndex = {index}
                />)}
            </ul>
            {
                innerWidth > 700 || index?
                <HorizontalGrid />
                :
                null
            }
        </div>
        )
    )
}

export default ExtrasList;