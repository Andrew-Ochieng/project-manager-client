import { useState } from "react";
import { apiHost } from "../Variables";

const Projects = () => {
    const [projects, setProjects] = useState([])

    fetch(`${apiHost}/projects`)
        .then((res) => {
            if(res.ok){
                res.json().then(data => setProjects(data))
            }else {
                res.json().then(error => console.warn(error))
            }
        })    

    return ( 
        <div>
            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.name}</h2>
                    <h3>{project.topic}</h3>
                    <p>{project.details}</p>
                </div>
            ))}
        </div>
    );
}
 
export default Projects;