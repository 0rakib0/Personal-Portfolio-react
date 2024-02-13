import Title from "../../ShareComponent/NavBar/Title"
import { FaArrowRight } from "react-icons/fa"
import './Recentproject.css'

const RecentProject = () =>{
    return (
        <div className="md:w-3/4 mx-auto py-8">
            <Title title='Recent Project Spotlight' summary='Featuring our latest project'></Title>
            <div className="mt-6 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                <div className="w-72 h-60 overflow-hidden bg-red-400 test parent-overlyR mx-auto">
                    <img src="https://html.design/wp-content/uploads/2023/06/merrel-600x800.png" className="w-full" alt="Pic Not Found"/>
                    <div className="overlyR">
                        <h4 className="text-2xl font-semibold mb-2">Ecomece Website</h4>
                        <a href="#" className="bg-secondaryColor shadow flex items-center justify-center gap-2 hover:text-white hover:font-bold">View Project <FaArrowRight className="arrow"></FaArrowRight></a>
                    </div>
                </div>
                <div className="w-72 h-60  overflow-hidden parent-overlyR mx-auto">
                    <img src="https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/64c2c8f4ed003042c8af4527_thumbnail.jpeg" className="w-full" alt="Pic Not Found" />
                    <div className="overlyR">
                        <h4 className="text-2xl font-semibold mb-2">Ecomece Website</h4>
                        <a href="#" className="bg-secondaryColor shadow flex items-center justify-center gap-2 hover:text-white hover:font-bold">View Project <FaArrowRight className="arrow"></FaArrowRight></a>
                    </div>
                </div>
                <div className="w-72 h-60 overflow-hidden parent-overlyR mx-auto">
                    <img src="https://html.design/wp-content/uploads/2023/02/moto.png" className="w-full" alt="Pic Not Found" />
                    <div className="overlyR">
                        <h4 className="text-2xl font-semibold mb-2">Ecomece Website</h4>
                        <a href="#" className="bg-secondaryColor shadow flex items-center justify-center gap-2 hover:text-white hover:font-bold">View Project <FaArrowRight className="arrow"></FaArrowRight></a>
                    </div>
                </div>
                <div className="w-72 h-60 overflow-hidden parent-overlyR mx-auto">
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7c50d683911401.5d4afa419b2af.png" className="w-full" alt="Pic Not Found" />
                    <div className="overlyR">
                        <h4 className="text-2xl font-semibold mb-2">Ecomece Website</h4>
                        <a href="#" className="bg-secondaryColor shadow flex items-center justify-center gap-2 hover:text-white hover:font-bold">View Project <FaArrowRight className="arrow"></FaArrowRight></a>
                    </div>
                </div>
                <div className="w-72 h-60 overflow-hidden parent-overlyR mx-auto">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT6WBc9TKOmX7obLkMDdWeDZsEDfAM7Fk7fw&usqp=CAU" className="w-full" alt="Pic Not Found" />
                    <div className="overlyR">
                        <h4 className="text-2xl font-semibold mb-2">Ecomece Website</h4>
                        <a href="#" className="bg-secondaryColor shadow flex items-center justify-center gap-2 hover:text-white hover:font-bold">View Project <FaArrowRight className="arrow"></FaArrowRight></a>
                    </div>
                </div>
                <div className="w-72 h-60 overflow-hidden parent-overlyR mx-auto">
                    <img src="https://websitedemos.net/wp-content/uploads/2022/09/furniture-shop-04-600x1880.jpg" className="w-full" alt="Pic Not Found" />
                    <div className="overlyR">
                        <h4 className="text-2xl font-semibold mb-2">Ecomece Website</h4>
                        <a href="#" className="bg-secondaryColor shadow flex items-center justify-center gap-2 hover:text-white hover:font-bold">View Project <FaArrowRight className="arrow"></FaArrowRight></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentProject