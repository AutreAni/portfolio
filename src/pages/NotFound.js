import { useNavigate } from "react-router-dom";
import {PATHS} from '../constants'
export default function NotFound(){
    const navigate = useNavigate()
    return(
        <div
            className="full_vh flex_box_center_center flex_box_col">
                <h2>404</h2>
                <p>It seems you're lost</p>
                <button
                    onClick = {() => navigate(PATHS.HOME)}
                    className="underlined">go home</button>
               
            </div>
    )
}