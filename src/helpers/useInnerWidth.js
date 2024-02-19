import { useState, useEffect } from 'react';

export default function useInnerWidth() {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    useEffect(() => {
        const setWidth = () => {
            setInnerWidth(window.innerWidth);
        };
        window.addEventListener("resize", setWidth);
        return () => {
            window.removeEventListener("resize", setWidth);
        };
    }, []);
    return innerWidth;
};