import Beach from '../images/beach.png';
import Baby from '../images/baby.png';
import Airpods from '../images/wireless-headphones.png';
import Weightlifter from '../images/weightlifter.png';
import { ReactComponent as GithubIcon } from "../icons/social/github.svg"
import { ReactComponent as LinkedinIcon } from "../icons/social/linkedIn.svg"
import { Link } from "react-router-dom"
import { ReactComponent as SuccessIcon } from '../icons/other/success.svg';

const CONTENT = {
  home: {
    extrasArr: [[
      {
        title: "Family",
        src: Baby,
        text: "If not in front of the computer coding or learning how to code, you’ll probably find me immersed in the joys and challenges of parenting."
      },

      {
        title: "My Corner",
        src: Beach,
        text: "I am an Armenian national living in Thailand and absolutely enamored by this place. I adore the lush nature, the warmth of its people and the abundance of coconuts."
      }],
    [{
      title: "Sports",
      src: Weightlifter,
      text: "In sports, especially CrossFit, I thrive by pushing boundaries and finding balance. The discipline of physical activity fosters resilience, positively impacting my mindset."
    },
    {
      title: "Hobbies",
      src: Airpods,
      text: "For some relaxation before bed, I indulge in my form of meditation - weaving with macrame cords while tuning into a podcast."
    },
    ]
    ]
  },
  about: {
    overview: (<p>
      As a <strong>React-specialized</strong> Frontend Developer, my expertise lies in developing <strong>responsive web pages </strong> with well-tested, precisely <strong>organized code</strong> and <strong>pixel-perfect</strong> intuative interfaces. <br />
      Working at a small company granted me significant autonomy and responsibility. I was deeply engaged not just in <strong> product development</strong> but also in <strong>conceiving, designing</strong> and <strong>implementing features.</strong>Having a hand in the entire process was incredibly fulfilling. </p>)
  },
  contacts: {
    form: {
      inputFields: [
        {
          name: "fName",
          placeholder: "First Name",
          type: "input"
        },
        {
          name: "lName",
          placeholder: "Last Name",
          type: "input"

        },
        {
          name: "email",
          placeholder: "Email",
          type: "input"
        },
        {
          name: "message",
          placeholder: "Your message",
          type: "textarea"

        },
      ],
      success: (
        <>
          <SuccessIcon />
          <h4>Thank you</h4>
          <p>Your message was sent successfully.</p>
        </>
      ),

    },
    info: (<div>
      <p>Get in touch:</p>
      <p>autreani@gmail.com</p>
      <p>+66 656 176 238</p>
      <ul>
        <li><Link target="_blank" to="https://github.com/AutreAni">{<GithubIcon />}</Link></li>
        <li><Link target="_blank" to="https://www.linkedin.com/in/ani-karapetyan-614497206">{<LinkedinIcon />}</Link></li>
      </ul>
    </div>)
  }

}

export default CONTENT