
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
                        <p>As a self-taught developer I discovered the world of coding  amidst the challenges of COVID lockdowns, transforming difficult times into a period of remarkable productivity and personal growth.My experience primarily revolves around remote work, where I thrived as a key contributor in a small startup. Operating as a solo developer granted me substantial autonomy and a significant level of <strong>responsibility</strong>, allowing me to make impactful contributions to the company's development while consistently <strong>meeting deliverables</strong> .
                        As a <strong>React-specialized</strong> Frontend Developer, I create cutting-edge, <strong>pixel-perfect</strong> intuative interfaces. My expertise lies in developing <strong>responsive web pages </strong> with well-tested, precisely <strong>organized code</strong>.
                        My professional ambition revolves around <strong>continual improvement</strong>, firmly believing that <b>the path to perfection is paved through hardship</b> . I am dedicated to self-improvement, actively working on refining my skills and capabilities every day. I highly value environments that foster opportunities for advancement and provide the conducive atmosphere necessary for individual and collective growth.
                        </p>

                    </div>
                    <div
                        className="profile_image">
                        <StackCarousel />


                    </div>

                </section>
                <TechStack />
                <section>
                    <p>
                        I'm Armenian national currently living in Thailand with my small family.
                        If not in front of the computer coding or learning how to code, you’ll probably find me immersed in the joys and challenges of parenting. Even with the little one around, I make time for CrossFit sessions because I firmly believe that nurturing my physical and mental health empowers me. With discipline, I take control, knowing it positively influences my life and the lives of those I cherish. And for some relaxation before bed, I indulge in my form of meditation - weaving with macrame cords while tuning into a podcast.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default About;