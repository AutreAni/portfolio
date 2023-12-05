import { useEffect } from "react"
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimateOnScrollComponent({variants, initial = "hidden", rootMargin = "-25%", ...props}) {
    const [ref, inView] = useInView({ rootMargin: rootMargin });
    const controls = useAnimation();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            initial={initial}
            animate={controls}
            variants={variants}
            {...props}
        >
            {props.children}
        </motion.div>
    )

}
export default AnimateOnScrollComponent;