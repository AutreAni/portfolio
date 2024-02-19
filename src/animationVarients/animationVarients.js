const animationVariants = {
    scale: function ({ initial = 0, final = 1, transformOrigin = "center", duration = 1, delay = 0 } = {}) {
        return ({
            visible: { opacity: 1, scale: final, transition: { duration, delay }, transformOrigin },
            hidden: { opacity: 0, scale: initial,  
        }
        })
    },
    growWidth: function ({ initial = "0px", final = "100%", duration = 1, delay = 0 } = {}) {
        return ({
            visible: { opacity: 1, width: final, transition: { duration, delay } },
            hidden: { opacity: 0, width: initial }
        })
    },
    growHeight: function ({ initial = "0px", duration = 1, delay } = {}) {
        return ({
            visible: { opacity: 1, height: "auto", transition: { duration, delay } },
            hidden: { opacity: 0, height: initial }
        })
    },
    fadeIn: function({delay = 0} = {}){
        return({
            visible: { opacity: 1, transition: {delay} },
            hidden: { opacity: 0 }
        })
    },
    slide: function({ initial = "50%", duration = 1, direction = "right", delay = 0 } = {}) {
        let transformOrigin = "right";
        let slideValue  = `-${initial}`;
        switch (direction) {
            case "left":
                transformOrigin = "left";
                slideValue = initial;
                break;
            case "down":
                transformOrigin = "bottom";
                slideValue = `-${initial}`;
                break;
            case "up":
                transformOrigin = "top";
                slideValue = initial;
                break;
            default:
                break;
        }
        return {
            visible: {
                opacity: 1,
                y: direction === "up" || direction === "down" ? 0 : undefined,
                x: direction === "left" || direction === "right" ? 0 : undefined,
                transition: { duration, delay },
                transformOrigin: transformOrigin,
            },
            hidden: {
                opacity: 0,
                x: direction === "left" || direction === "right" ? slideValue : undefined,
                y: direction === "up" || direction === "down" ? slideValue : undefined,
            },
        };
    }
};

export default animationVariants