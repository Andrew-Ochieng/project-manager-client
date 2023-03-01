import { useState } from "react";
import { Link } from "react-router-dom";
import loginImg from "../assets/login.png"

const Login = () => {
    const [signinFormData, setSigninFormData] = useState({username: "", password: ""})

    function updateFormData(e){
        setSigninFormData(
            signinFormData => ({
                ...signinFormData,
                [e.target.id]: e.target.value
            })
        )
    }

    const handleForm = (e) => {
        e.preventDefault();
        console.log(signinFormData)
        fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(signinFormData)
        })
        .then()
    }

    return ( 
        <>
            <div className="flex flex-col justify-center items-center min-h-screen md:mx-16 mx-6">
                <div className="sm:flex justify-center items-center">
                    <div className="md:w-1/2">
                        <img src={loginImg} alt='login-image'/>
                    </div>
                    <div>
                        <h1 className="font-bold uppercase md:text-2xl text-xl text-gray-800">Login</h1>
                        <form onSubmit={handleForm}>
                            <div>
                                <input 
                                    id="username"
                                    type="text" 
                                    placeholder="Enter username.." 
                                    class="form-input"
                                    value={signinFormData.username}
                                    onChange={updateFormData} 
                                />
                            </div>
                            <div>
                                <input 
                                    id="password"
                                    type="password" 
                                    placeholder="Enter password.." 
                                    class="form-input"
                                    value={signinFormData.password}
                                    onChange={updateFormData} 
                                />
                            </div>
                            <button className="btn btn-secondary w-full">
                                Submit
                            </button>
                        </form>
                    <p className="mt-4">
                        Don't have an account? 
                        <Link to='/signup' className="mx-2 text-info font-semibold">Signup</Link>
                    </p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Login;