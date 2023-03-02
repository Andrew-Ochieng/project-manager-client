import React, {useContext} from "react";
import { appContext } from "../AppContextProvider";

function ProjectDetails(){
    const {projectOnEdit, setProjectOnEdit} = useContext(appContext)

    console.log("wat")
    console.log(projectOnEdit)

    function getDate(dateData){
        const dateInfo = new Date(dateData)
        return dateInfo.toLocaleDateString()
    }
    return (
        <div id="project-details" className="flex gap-5 min-w-screen p-20">
            <div id="general-info" className="flex flex-col p-4 border-2 mx-2">
                <h1 className="font-bold">Project Info</h1>
                <div className="flex gap-4">
                    <h1 className="w-16">Name:</h1>
                    <h1>{projectOnEdit.name}</h1>
                </div>
                <div className="flex gap-4">
                    <h1 className="w-16">Topic:</h1>
                    <h3>{projectOnEdit.topic}</h3>
                </div>
                <div className="flex gap-4">
                    <h1 className="w-16">Details:</h1>
                    <p className="w-48">{projectOnEdit.details}</p>
                </div>
            </div>
            <div id="statuses" className="flex flex-col align-start p-4 border-2 mx-2">
                <h1 className="font-bold">Statuses</h1>
                <div className="flex flex-col gap-2">
                    <table>
                        <tr className="border-2">
                            <th className="border-2 w-16 px-4">Date</th>
                            <th className="border-2 w-16 px-4">Summary</th>
                            <th className="border-2 w-48 px-4">Details</th>
                        </tr>
                        {
                            projectOnEdit.statuses?.map(projectStatus => {
                                return (
                                    <tr key={projectStatus.id}>
                                        <td className="w-16 px-4 border-b-2">{getDate(projectStatus.created_at)}</td>
                                        <td className="w-16 px-4 border-b-2">{projectStatus.summary}</td>
                                        <td className="w-48 px-4 border-b-2">{projectStatus.details}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                    <form className="flex flex-col">
                        <div className="flex flex-col my-5">
                            <div className="">
                                <label htmlFor="summary">Summary</label>
                                <input name="summary" className="form-input" type="text"/>
                            </div>
                            <div className="">
                                <label htmlFor="details">Details</label>
                                <textarea name="details" className="textarea textarea-info w-full my-4" type="text"/>
                            </div>
                        </div>
                        <input className="btn btn-primary" type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
            <div id="project-members" className="flex flex-col p-4 border-2 mx-2">
                <h1 className="font-bold">Project Members</h1>
                <div className="flex flex-col gap-1">
                    {
                        projectOnEdit.users?.map(projectMember => {
                            console.log(projectMember)
                            return (
                                <div key={projectMember.id}>
                                    <h3>{projectMember.username}</h3>
                                </div>
                            )
                        })
                    }
                </div>                
            </div>
        </div>
    )
}

export default ProjectDetails;