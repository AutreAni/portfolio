const animationVariants = {
    scale: function ({ initial = .4, final = 1, transformOrigin = "center", duration = 1 }) {
        return ({
            visible: { opacity: 1, scale: final, transition: { duration }, transformOrigin },
            hidden: { opacity: 0, scale: initial }
        })
    },
    growWidth: function ({ initial = "0px", final = "100%", duration = 1 }) {
        return ({
            visible: { opacity: 1, width: final, transition: { duration } },
            hidden: { opacity: 0, width: initial }
        })
    },
    growHeight: function ({ initial = "0px", duration = 1 }) {
        return ({
            visible: { opacity: 1, height: "auto", transition: { duration } },
            hidden: { opacity: 0, height: initial }
        })
    },
    slide: function({ initial = "-100%", duration = 1, direction = "right" }) {
        let transformOrigin = "right";
        let slideValue = `-${initial}`;
    
        switch (direction) {
            case "left":
                transformOrigin = "left";
                slideValue = initial;
                break;
            case "down":
                transformOrigin = "top";
                slideValue = `-${initial}`;
                break;
            case "up":
                transformOrigin = "bottom";
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
                transition: { duration },
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