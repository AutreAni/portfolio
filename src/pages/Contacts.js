import Form from "../components/common/Form";
import HEADINGS from "../data/headings.js";
import CONTENT from "../data/content.js";
import AnimateOnScrollComponent from '../components/common/AnimateOnScrollComponent.js';
import animationVarients from '../animationVarients/animationVarients.js'
export default function Contacts() {
    return (
        <div
            className="contacts full_vh flex_box_space_between">
            <div
                className="contacts_info flex_box_space_between flex_box_col">
                <AnimateOnScrollComponent
                    variants={animationVarients.slide({direction:"up"})}>
                { HEADINGS.contacts.info }
                </AnimateOnScrollComponent>
               
                <AnimateOnScrollComponent
                    variants={animationVarients.slide({direction:"up", delay:.6})}>
                    {CONTENT.contacts.info}
                </AnimateOnScrollComponent>
            </div>
            <Form />
        </div>
    )
}