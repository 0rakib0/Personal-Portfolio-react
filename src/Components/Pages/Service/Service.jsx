import { DiJavascript } from "react-icons/di"
import Title from "../../ShareComponent/NavBar/Title"
import { MdOutlineDesignServices } from "react-icons/md";
import { FaFigma, FaLaptopCode, FaRegFileCode } from "react-icons/fa";
import { BiCodeBlock } from "react-icons/bi";
import { BsFiletypePsd } from "react-icons/bs";


const Service = () => {
    return (
        <div className="md:w-3/4 mx-auto py-8" id="service">
            <Title title='Service' summary='My Top Services'></Title>
            <div className="hidden"></div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:mt-8 mt-6">
                <div className="bg-[#252525] rounded-lg p-4 card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <MdOutlineDesignServices className="text-5xl text-secondaryColor scal my-2"></MdOutlineDesignServices>
                    <h4 className="text-2xl font-semibold mb-2">Web Design</h4>
                    <p className="">Craft visually stunning and user-friendly websites tailored to your brand's identity and optimized for seamless functionality.</p>
                </div>
                <div className="bg-[#252525] rounded-lg p-4 card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <FaLaptopCode className="text-5xl text-secondaryColor scal my-2"></FaLaptopCode>
                    <h4 className="text-2xl font-semibold mb-2">Python Django Backend Development</h4>
                    <p className="">Expertly develop robust and scalable backend systems using Python Django framework, ensuring efficiency, security, and seamless integration for your projects.</p>
                </div>
                <div className="bg-[#252525] rounded-lg p-4 card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <BiCodeBlock className="text-5xl text-secondaryColor scal my-2"></BiCodeBlock>
                    <h4 className="text-2xl font-semibold mb-2">MERN Stack Development</h4>
                    <p className="">Harness the power of MongoDB, Express.js, and Node.js to build dynamic and responsive web applications with speed, flexibility, and scalability.</p>
                </div>
                <div className="bg-[#252525] rounded-lg p-4 card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <FaRegFileCode className="text-5xl text-secondaryColor scal my-2"></FaRegFileCode>
                    <h4 className="text-2xl font-semibold mb-2">Fullstack Development Expertise</h4>
                    <p className="">Seamlessly blend frontend and backend technologies to create comprehensive web solutions, ensuring functionality, usability, and exceptional user experiences across all platforms.</p>
                </div>
                <div className="bg-[#252525] rounded-lg p-4 card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <FaFigma className="text-5xl text-secondaryColor scal my-2"></FaFigma>
                    <h4 className="text-2xl font-semibold mb-2">Figma to HTML Conversion</h4>
                    <p className="">Transform your Figma designs into pixel-perfect, responsive HTML code, ensuring fidelity to design elements and optimal user experience implementation.</p>
                </div>
                <div className="bg-[#252525] rounded-lg p-4 card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <BsFiletypePsd className="text-6xl text-secondaryColor scal my-2"></BsFiletypePsd>
                    <h4 className="text-2xl font-semibold mb-2">PSD to HTML Conversion</h4>
                    <p className="">Convert your PSD designs into clean, semantic HTML code with precision and attention to detail, ensuring compatibility, responsiveness, and pixel-perfect rendering across devices.</p>
                </div>
            </div>

        </div>
    )
}

export default Service