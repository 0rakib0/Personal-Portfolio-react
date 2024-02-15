import Title from "../../ShareComponent/NavBar/Title"
import './about.css'
const About = () =>{
    return (
        <div className="md:w-3/4 mx-auto py-8">
            <Title title='About Me' summary='Know More About Me'></Title>
            
            <div className="flex lg:flex-row flex-col-reverse justify-center picmoving md:mt-8 mt-6">
                <div className="md:w-6/12 flex justify-center md:justify-start">
                    <img src="https://avatars.githubusercontent.com/u/99094220?s=400&u=c2a7cfe6dcdd2acdcc6be2ed33520f25c60ea23b&v=4" className="w-3/4 rounded-lg" alt="" />
                </div>
                <div className="lg:w-6/12 lg:my-4 md:mt-72 mt-48">
                    <h4 className="text-4xl text-secondaryColor md:mb-4 mb-2">I am Rakibul Hasan</h4>
                    <p className="text-lg"><span className="text-secondaryColor">Age</span>: 24 year</p>
                    <p className="text-lg"><span className="text-secondaryColor">Email</span> : hassanrakibul926@gmail.com</p>
                    <p className="mb-4 text-lg"><span className="text-secondaryColor">Mobile</span>: 01571140796</p>
                    <p className="mb-4">'m an adept Full Stack Developer skilled in MERN stack and Django, blending technical expertise with creativity. With a solid foundation in software engineering, I thrive on solving complex problems and delivering high-quality solutions.</p>
                    <p>I offer comprehensive web development services, specializing in crafting dynamic and user-centric applications. From elegant front-end interfaces to robust back-end functionalities, I leverage my expertise to create tailored solutions that exceed client expectations and drive business growth.</p>
                </div>
            </div>
        </div>
    )
}

export default About