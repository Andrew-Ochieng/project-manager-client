import { useState } from "react";
import { Link } from "react-router-dom";

const AddProject = () => {
    const [projectName, setProjectName] = useState("")
    const [topic, setTopic] = useState("")
    const [details, setDetails] = useState("")


    const handleForm = (e) => {
        e.preventDefault();
        e.target.reset();   

        fetch('/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({projectName, topic, details})
        })
            .then()

        alert("hello")
    }

    return ( 
        <>
            <div className="flex flex-col justify-center items-center min-h-screen md:my-16 my-8 mx-6">
                <h1 className="font-bold uppercase md:text-2xl text-xl text-gray-800 md:mb-16 mb-8">Add New Porject</h1>
                <form onSubmit={handleForm}>
                    <div>
                        <label className='form-label'> 
                            Project Name
                        </label>
                        <input 
                            type="text"  
                            class="form-input"
                            placeholder="Project name"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label className='form-label'> 
                            Subject/ Topic
                        </label>
                        <input 
                            type="password" 
                            class="form-input"
                            placeholder="Topic"
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)} 
                        />
                    </div>
                    <div>
                        <label className='form-label'> 
                            Project Details
                        </label>
                        <textarea 
                            class="textarea textarea-info w-full my-4" 
                            rows='4'
                            placeholder="Details"
                            value={details}
                            onChange={(e) => setDetails(e.target.value)}
                        ></textarea>
                    </div>
                    <button className="btn btn-secondary w-full">
                        Submit
                    </button>
                </form>
            </div>
        </>
     );
}
 
export default AddProject;