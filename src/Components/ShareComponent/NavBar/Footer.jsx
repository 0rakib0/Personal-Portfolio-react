import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
const Footer = () =>{
    return (
        <div className="mt-6 mx-auto">
            <div className="bg-[#252525] text-center py-4 rounded-t-md">
                <h4 className="text-2xl uppercase mb-3 font-bold text-secondaryColor">Full Stack Developer</h4>
                <p className="lg:w-2/5 md:3/4 px-2 mx-auto">Experienced Full Stack Developer proficient in MERN stack and Django. Offering tailored solutions from sleek websites to custom applications, driven by a passion for innovation and client satisfaction.</p>
                <div className="flex gap-4 justify-center mt-6">
                    <div className="border-2 border-white p-2 rounded-full hover:border-secondaryColor hover:shadow-md hover:shadow-secondaryColor duration-200">
                        <a href="#"><FaFacebookF className="text-3xl hover:text-secondaryColor"></FaFacebookF></a>
                    </div>
                    <div className="border-2 border-white p-2 rounded-full hover:border-secondaryColor hover:shadow-md hover:shadow-secondaryColor duration-200">
                        <a href="#"><FaLinkedinIn className="text-3xl hover:text-secondaryColor"></FaLinkedinIn></a>
                    </div>
                    <div className="border-2 border-white p-2 rounded-full hover:border-secondaryColor hover:shadow-md hover:shadow-secondaryColor duration-200">
                        <a href="#"><FaGithub className="text-3xl hover:text-secondaryColor"></FaGithub></a>
                    </div>
                    <div className="border-2 border-white p-2 rounded-full hover:border-secondaryColor hover:shadow-md hover:shadow-secondaryColor duration-200">
                        <a href="#"><FaInstagram className="text-3xl hover:text-secondaryColor"></FaInstagram></a>
                    </div>
                </div>
            </div>
            <div className="py-4 border-2 border-[#252525] text-center">
                <p>Copyright &copy;2024 Fullstack Developer Rakibul hasan</p>
            </div>
        </div>
    )
}

export default Footer