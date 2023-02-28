import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    const navLinks = [
        {name: "About", route: "/about"},
        {name: "Services", route: "/services"},
        {name: "Contact", route: "/contact"}
    ]

    return ( 
        <>
            <nav className='lg:px-48 md:px-32 px-8 md:py-6 py-4 top-0 left-0 sticky z-[100] bg-sky-400 opacity-100 shadow-xl'>
                <div className='md:flex items-center justify-between'>
                    <div className="flex justify-between items-center">
                        <Link to='/' className='md:text-2xl text-lg uppercase font-semibold '>
                            {/* <img className="md:w-32 w-28 " src={logo} alt="Logo.." /> */}
                            Project Manager
                        </Link>
                        
                        <button onClick={() => setOpen((prev) => !prev)} className="md:hidden text-xl text-gray-800">
                            <FaBars/>
                        </button>
                    </div>
                    
                    <div className='md:flex hidden text-gray-700'>
                        <ul className="md:flex items-center md:text-lg font-medium">
                            {navLinks.map((navLink) => (
                                <li className='md:mx-4 md:my-0 my-4 hover:text-white'>
                                    <Link to={navLink.route}>{navLink.name}</Link>
                                </li>
                            ))}
                            <li className=' md:my-0 my-4'>
                                <Link to='/login' className="mx-4 bg-white px-3 py-1 hover:bg-sky-800 hover:text-white duration-500 rounded-md" href='https://learn.vabrisetech.co.ke/'>
                                    Login
                                </Link>
                                <Link to='/signup' className="mx-4 bg-sky-800 px-3 py-1 hover:bg-white text-white hover:text-sky-800 duration-500 rounded-md" href='https://learn.vabrisetech.co.ke/'>
                                    Signup
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={`${open ? "left-0 " : "left-[-100%]"} sm:hidden absolute top-0 right-0 bottom-0  space-y-8 py-6 px-8 w-full h-screen duration-300 ease-in-out bg-sky-400`}>
                    <div className="flex justify-end">
                        <button onClick={() => setOpen((prev) => !prev)} className="mb-8 sm:hidden text-2xl text-gray-100 text-right">
                                <FaTimes/> 
                        </button> 
                    </div>
                    <ul className="flex flex-col items-center text-center text-base font-medium">
                        {navLinks.map((navLink) => (
                            <li onClick={() => setOpen((prev) => !prev)} className='md:mx-4 md:my-0 my-4 hover:text-white pb-6 w-1/3 border-b-2'>
                                <Link to={navLink.route}>{navLink.name}</Link>
                            </li>
                        ))}
                        <li className='flex flex-col md:my-0 my-4' onClick={() => setOpen((prev) => !prev)}>
                            <Link to='/login' className="mx-4 my-4 bg-white px-3 py-1 hover:bg-sky-800 hover:text-white duration-500 rounded-md" href='https://learn.vabrisetech.co.ke/'>
                                Login
                            </Link>
                            <Link to='/signup' className="mx-4 my-4 bg-sky-800 px-3 py-1 hover:bg-white text-white hover:text-sky-800 duration-500 rounded-md" href='https://learn.vabrisetech.co.ke/'>
                                Signup
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
     );
}
 
export default Navbar;