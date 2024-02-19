import HorizontalGrid from "../components/common/Grids/HorizontalGrid";
import Profile from "../components/About/Profile/Profile";
import Overview from "../components/About/Overview/Overview";
import Extras from "../components/About/Extras/Extras";
export default function About() {
    return (
        <div className="about-wrapper">
            <section>
                <Profile />
                <HorizontalGrid />
                <Overview />
                <HorizontalGrid />   
                <Extras/>           
            </section>
        </div>


    )
}

