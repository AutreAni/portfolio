import { useParams } from "react-router-dom"
import PROJECTS from "./content"
import Menu from "./Menu";
import {useRef, useState } from "react";
import Pages from "./PagesList";

export default function ProjectContainer() {
    const observerRefs = useRef([]);
    const [visibleKey, setVisibleKey] = useState(0);
    const { projectName } = useParams();
  
    return (
        <div
            className="project container_outer">
            <div
                className="pages_wrapper">
                <Menu
                    visibleKey = {visibleKey}
                    setVisibleKey = {setVisibleKey}
                    observerRefs = {observerRefs}
                    projectName={projectName}
                     />
                <Pages
                    visibleKey = {visibleKey}
                    refsList = {observerRefs.current}
                    projectName = {projectName}
                    pages={PROJECTS[projectName].pages}
                />
            </div>

        </div>
    )
}