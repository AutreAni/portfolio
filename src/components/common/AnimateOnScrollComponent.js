import { useEffect } from "react"
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function AnimateOnScrollComponent({variants, initial = "hidden", margin = "0%", externalControls,isInView,...props}) {
    const [ref, inView] = useInView({ margin });
    const controls = useAnimation();

    useEffect(() => {
        if(externalControls){
            const { isVisible } = externalControls;
            if(isVisible){
                controls.start("visible")
            }
        }else if (inView && !externalControls) {
            controls.start("visible");
        }
    }, [controls, inView, externalControls]);
    
    useEffect(()=> {
        if(isInView){
            isInView(inView)
        }
    },[inView, isInView])

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