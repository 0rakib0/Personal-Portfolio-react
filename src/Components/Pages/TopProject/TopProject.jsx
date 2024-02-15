import { Link } from "react-router-dom"
import Title from "../../ShareComponent/NavBar/Title"
import './topproject.css'
import { FaArrowRight } from "react-icons/fa"
const TopProject = () => {
    return (
        <div className="md:w-3/4 mx-auto py-8">
            <Title title='Top Project' summary='Highlighting My Top Project'></Title>
            <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                <div className="w-72 h-60 overflow-hidden bg-red-400 test parent-overly mx-auto">
                    <img src="https://html.design/wp-content/uploads/2023/06/merrel-600x800.png" className="w-full" alt="Pic Not Found"/>
                    <div className="overly">
                        <h4 className="text-2xl font-semibold mb-2">Ecomece Website</h4>
                        <a href="#" className="flex items-center justify-center gap-2 hover:text-white hover:font-bold">View Project <FaArrowRight className="arrow"></FaArrowRight></a>
                    </div>
                </div>
                <div className="w-72 h-60  overflow-hidden parent-overly mx-auto">
                    <img src="https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/64c2c8f4ed003042c8af4527_thumbnail.jpeg" className="w-full" alt="Pic Not Found" />
                    <div className="overly">
                        <h4 className="text-2xl font-semibold mb-2">Ecomece Website</h4>
                        <a href="#" className="flex items-center justify-center gap-2 hover:text-white hover:font-bold">View Project <FaArrowRight className="arrow"></FaArrowRight></a>
                    </div>
                </div>
                <div className="w-72 h-60 overflow-hidden parent-overly mx-auto">
                    <img src="https://www.fabliantechnologies.com/wp-content/uploads/2018/12/Blood-donor-website-development-1.jpg" className="w-full" alt="Pic Not Found" />
                    <div className="overly">
                        <h4 className="text-2xl font-semibold mb-2">Ecomece Website</h4>
                        <a href="#" className="flex items-center justify-center gap-2 hover:text-white hover:font-bold">View Project <FaArrowRight className="arrow"></FaArrowRight></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopProject