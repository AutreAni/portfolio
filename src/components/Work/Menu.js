import PROJECTS from "./content";
import { useEffect, useRef } from "react";

export default function Menu({
  projectName,
  observerRefs,
  visibleKey,
  setVisibleKey,
}) {
  const menuItems = PROJECTS[projectName].pages.map(page => (page.name));
  const observers = useRef([]);
  const onClick = (_, key) => {
    if (observers.current) {
      observers.current.forEach(observer => (observer.paused = true));
    }
    setVisibleKey(key);
    setTimeout(() => {
      if (observers.current) {
        observers.current.forEach(observer => (observer.paused = false));
      }
    }, 3000);
  };

  const observerCallback = async (e, key) => {
    if (e.length && e[0].isIntersecting && !observers.current.find(el =>el.paused)) {
      setVisibleKey(key);
    }
  };


  useEffect(() => {
    if (observers.current?.paused) return;
    const observerNodes = observerRefs.current;
    if (observerNodes?.length && observers.current) {
      Array.from(Array(menuItems.length).keys()).forEach((_u, key) => {

        const options = {
          root: null,
          rootMargin: "0px",
          threshold: 0.5
        }
        observers.current[key] = new IntersectionObserver((e) =>
          observerCallback(e, key), options
        );
        if (observerRefs.current[key]) {
          observers.current[key].observe(observerRefs.current[key]);
        }
      });
    }
    return () =>
    observerNodes?.forEach(observer => observer?.disconnect && observer.disconnect());
  }, [observerRefs, observers, menuItems.length]);

  return (
    <ul
      className="page_menu">
      {
        menuItems.map((item, key) => (
          <li key={"item_" + key}
            onClick={() => onClick(item, key)}
            className={`underline_on_hover ${key === visibleKey ? "active" : ""}`}
          >
            {item}
          </li>
        ))
      }
    </ul>
  )
}