import React, { useRef, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

function Nav({handleCloseAnimationEnd, startCloseAnimation, isCloseAnimationStarted}) {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const menuItems = ["home", "about", "work", "contacts"];
    const splitArr = pathname.split("/").filter(Boolean); 
    const currentPath = splitArr.length > 0 ? splitArr[splitArr.length - 1] : "home";
    const activeNavIndex = menuItems.indexOf(currentPath);
    const [toNavigate, setToNavigate] = useState(null)
    const nodeRef = useRef();
    
    function onAnimationEnd(e) {
        if(e.target === nodeRef?.current && isCloseAnimationStarted) {
            handleCloseAnimationEnd()
        }
        if(toNavigate !== null){
            navigate(menuItems[toNavigate]);
            setToNavigate(null)
        }
    }
    return (
        <nav
             ref = {nodeRef}
                className={isCloseAnimationStarted ? "nav_disappear" : ""}
                onAnimationEnd={onAnimationEnd}>
            <ul> 
                {menuItems.map((item, index) =>
                        <li 
                        onClick={() => {
                            startCloseAnimation();
                            setToNavigate(index)
                            
                        }}
                        className={index === activeNavIndex? "nav-active": ""}
                        key={index}>
                            {item}
                        </li>
                )}
            </ul>
        </nav>
    );
}

export default Nav;





