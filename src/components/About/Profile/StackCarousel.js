import { ReactComponent as SassIcon } from "../../../icons/techStack/sass.svg";
import { ReactComponent as HTMLIcon } from "../../../icons/techStack/html.svg";
import { ReactComponent as ReactIcon } from "../../../icons/techStack/react.svg";
import { ReactComponent as GitIcon } from "../../../icons/techStack/git.svg";
import { ReactComponent as ReduxIcon } from "../../../icons/techStack/redux.svg";
import { ReactComponent as JSIcon } from "../../../icons/techStack/js.svg";
import { ReactComponent as CSSIcon } from "../../../icons/techStack/css3.svg";

function StackCarousel() {
    const stackList = [
        { type: 'html', icon: <HTMLIcon /> },
        { type: 'react', icon: <ReactIcon /> },
        { type: 'sass', icon: <SassIcon /> },
        { type: 'redux', icon: <ReduxIcon /> },
        { type: 'js', icon: <JSIcon /> },
        { type: 'git', icon: <GitIcon /> },
        { type: 'css', icon: <CSSIcon /> },
    ];
   
    return (
        <div
            className="stack_carousel_wrapper">
            <ul
             className="stack_carousel">
                {stackList.map((item, index) => (
                    <li
                        className="stack_carousel_item"
                     key={item.type + index}>
                        {item.icon}
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default StackCarousel