
import StackCarousel from "../components/StackCarousel";
import TechStack from "../components/TechStackList";
function About() {
    return (
        <div className="about-wrapper">
            <div className="container">
                <section
                    className="container flex-box-space-between">

                    <div
                        className="overview-wrapper">
                        <h3><b>About</b></h3>
                        <p>I'm Ani, an Armenian national currently living in Thailand. I'm a self taught developer who discovered the world of coding during COVID lockdowns, which turned those difficult times into a very productive and shifting period in my life.<br/> 
                        If not in from of the computer coding or learning how to code, you’ll probably find me immersed in the joys and challenges of parenting. Even with the little one around, I make time for CrossFit sessions because I firmly believe that nurturing my physical and mental health empowers me. With discipline, I take control, knowing it positively influences my life and the lives of those I cherish. And for some relaxation before bed, I indulge in my form of meditation - weaving with macrame cords while tuning into a podcast.
                       </p>

                    </div>
                    <div
                        className="profile_image">
                        <StackCarousel />


                    </div>

                </section>
                <TechStack />
            </div>
        </div>
    )
}

export default About;