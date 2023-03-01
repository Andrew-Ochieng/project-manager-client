import { useEffect, useState } from "react";
import { apiHost } from "../Variables";

const Projects = () => {
    const [projects, setProjects] = useState([])

    useEffect(()=>{
        fetch(`${apiHost}/projects`)
            .then((res) => {
                if(res.ok){
                    res.json().then(data => setProjects(data))
                }else {
                    res.json().then(error => console.warn(error))
                }
            })    
    }, [])


    return ( 
        <div className="grid place-items-center min-h-screen px-20">
            <div className="flex flex-col">
                <div className="flex justify-between my-5">
                    <h1 className="font-bold">YOUR PROJECTS</h1>
                    <button className="border-solid border border-blue py-2 px-5 rounded-md">Add New</button>
                </div>
                <table>
                    {
                        <tr className="min-w-max-content border-x-solid border border-sky">
                            <th>Name</th>
                            <th>Topic</th>
                            <th>Details</th>
                            <th></th>
                            <th></th>
                        </tr>
                    }
                    {
                        projects.map(project => (
                            <tr className="border-x-solid border border-sky">
                                <td className="px-3" >{project.name}</td>
                                <td className="px-3">{project.topic}</td>
                                <td className="px-3 max-w-sm">{project.details}</td>
                                <td className="px-5"><button>Edit</button></td>
                                <td className="px-5"><button>Delete</button></td>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    );
}
 
export default Projects;