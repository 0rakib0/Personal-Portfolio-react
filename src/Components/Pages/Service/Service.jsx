import { DiJavascript } from "react-icons/di"
import Title from "../../ShareComponent/NavBar/Title"
import { MdOutlineDesignServices } from "react-icons/md";

const Service = () => {
    return (
        <div className="md:w-3/4 mx-auto py-8">
            <Title title='Service' summary='My Top Services'></Title>
            <div className="hidden"></div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:mt-8 mt-6">
                <div className="bg-[#252525] rounded-lg p-4 card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <MdOutlineDesignServices className="text-6xl text-secondaryColor scal my-2"></MdOutlineDesignServices>
                    <h4 className="text-2xl font-semibold mb-2">Web Design</h4>
                    <p className="">Craft visually stunning and user-friendly websites tailored to your brand's identity and optimized for seamless functionality.</p>
                    <div>
                
                    </div>
                </div>
                <div className="bg-[#252525] rounded-lg p-4 card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <MdOutlineDesignServices className="text-6xl text-secondaryColor scal my-2"></MdOutlineDesignServices>
                    <h4 className="text-2xl font-semibold mb-2">Python Django Backend Development</h4>
                    <p className="">Expertly develop robust and scalable backend systems using Python Django framework, ensuring efficiency, security, and seamless integration for your projects.</p>
                </div>
                <div className="bg-[#252525] rounded-lg p-4 card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <MdOutlineDesignServices className="text-6xl text-secondaryColor scal my-2"></MdOutlineDesignServices>
                    <h4 className="text-2xl font-semibold mb-2">Web Design</h4>
                    <p className="">Craft visually stunning and user-friendly websites tailored to your brand's identity and optimized for seamless functionality.</p>
                </div>
                <div className="bg-[#252525] rounded-lg p-4 card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <MdOutlineDesignServices className="text-6xl text-secondaryColor scal my-2"></MdOutlineDesignServices>
                    <h4 className="text-2xl font-semibold mb-2">Web Design</h4>
                    <p className="">Craft visually stunning and user-friendly websites tailored to your brand's identity and optimized for seamless functionality.</p>
                </div>
                <div className="bg-[#252525] rounded-lg p-4 card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <MdOutlineDesignServices className="text-6xl text-secondaryColor scal my-2"></MdOutlineDesignServices>
                    <h4 className="text-2xl font-semibold mb-2">Web Design</h4>
                    <p className="">Craft visually stunning and user-friendly websites tailored to your brand's identity and optimized for seamless functionality.</p>
                </div>
                <div className="bg-[#252525] rounded-lg p-4 card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <MdOutlineDesignServices className="text-6xl text-secondaryColor scal my-2"></MdOutlineDesignServices>
                    <h4 className="text-2xl font-semibold mb-2">Web Design</h4>
                    <p className="">Craft visually stunning and user-friendly websites tailored to your brand's identity and optimized for seamless functionality.</p>
                </div>
            </div>

        </div>
    )
}

export default Service