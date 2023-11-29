import Home from "../pages/Home";
import About from "../pages/About";
import React, { Fragment, useEffect, useRef } from "react";

function MainSection({activeNavIndex}) {
    const contentComponents = [<Home />, <About />];
    const containerRef = useRef(null);
 
    useEffect(() => {
        console.log(activeNavIndex, "active")
        function onScroll() {
            if(!containerRef.current) return;
            const componentHeight = window.innerHeight - 100; // Adjust as needed
            console.log(componentHeight, "height");
            containerRef.current.style.transform = `translateY(-${(activeNavIndex * componentHeight)}px`;
        }
        onScroll()
    }, [activeNavIndex])

    return (
        <section
            ref = {containerRef}
            style={{
                height: `calc((100vh - 100px) * ${contentComponents.length})`
            }}>
            {
                contentComponents.map((contentComponent, index) => (
                    <Fragment
                        key={index}>
                        {contentComponent}
                    </Fragment>
                ))
            }
        </section>
    );
};

export default MainSection;