import ExtrasList from "./ExtrasList";
import HorizontalGrid from "../../common/Grids/HorizontalGrid";
import HEADINGS from "../../../data/headings";

export default function Extras() {
    return (
        <div
            className="extras">
            {HEADINGS.about.extras}
            <HorizontalGrid />
            <ExtrasList />
        </div>
    )
}