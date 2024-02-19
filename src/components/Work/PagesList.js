import {forwardRef} from "react"
import Page from "./Page";

const PagesList = forwardRef((props, ref) => {
    const {
        refsList,
        pages, 
        visibleKey,
        projectName
     } = props;
       return (
        <div
            ref = {ref}
            className="pages container">
            {pages.map((page, key) => (
                <Page
                    key = {"item_"+key}
                    myKey = {key}
                    projectName = {projectName}
                    refsList = {refsList}
                    visibleKey={visibleKey}
                    page = {page}
                />
            ))}

        </div>
    )
})

export default PagesList;