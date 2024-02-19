import { useEffect, useState, useCallback } from "react";

export default function useScrollDirection() {
    const [y, setY] = useState(window.scrollY);
    const [direction, setDirection] = useState()

    const handleNavigation = useCallback(
        e => {
            const window = e.currentTarget;
            if (y > window.scrollY) {
                setDirection("up")
            } else if (y < window.scrollY) {
                setDirection("down")

            }
            setY(window.scrollY);
        }, [y]
    );

    useEffect(() => {
        setY(window.scrollY);
        window.addEventListener("scroll", handleNavigation);

        return () => {
            window.removeEventListener("scroll", handleNavigation);
        };
    }, [handleNavigation]);
    return direction;
}