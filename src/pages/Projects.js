import { useState } from "react";


const Projects = () => {
    const [projects, setProjects] = useState("")

    fetch("/")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            setProjects(data)
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