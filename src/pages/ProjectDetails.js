import React, {useContext} from "react";
import { appContext } from "../AppContextProvider";

function ProjectDetails(){
    const {projectOnEdit, setProjectOnEdit} = useContext(appContext)

    console.log("wat")
    console.log(projectOnEdit)
    return (
        <div>

        </div>
    )
}

export default ProjectDetails;