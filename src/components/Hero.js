import hero from "../assets/hero.jpg"

const Hero = () => {
    return ( 
        <>
            <div className=''
                style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHByb2plY3QlMjBtYW5hZ2VtZW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)`, 
                        backgroundSize: `cover`,
                        paddingTop: `200px`, 
                        paddingBottom: `200px` 
                    }}
                >
                <div className="flex flex-col justify-center items-center lg:my-24 md:my-16 my-6 md:mx-32 mx-8">
                    <h1 className="title ">
                        CHOOSE TO USE ONE OF THE BEST PROJECT MANAGERS FOR STUDENTS
                    </h1>
                    <h2 className="font-semibold md:text-lg text-gray-100 uppercase">
                        Home -
                        <span className="text-sky-500 mx-2">Learn More</span>
                    </h2>
                </div>
            </div>
        </>
     );
}
 
export default Hero;