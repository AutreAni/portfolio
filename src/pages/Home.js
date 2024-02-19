import HEADINGS from "../data/headings";
import AnimateOnScrollComponent from '../components/common/AnimateOnScrollComponent';
import animationVariants from '../animationVarients/animationVarients'
function Home() {
    return (
        <main
            className="home container flex_box_start_center  flex_box_col">
            <div className="title-wrapper">
                <h1>
                    {HEADINGS.home.map((span, index) => <AnimateOnScrollComponent
                            variants={animationVariants.slide({direction:"up", delay: index * .5})}
                            key = {index}>
                        {span}
                    </AnimateOnScrollComponent>)}
                </h1>
            </div>

        </main>
    )
}

export default Home;