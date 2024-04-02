import Title from "../../ShareComponent/NavBar/Title"
import { DiJavascript } from "react-icons/di";
import { FaBootstrap, FaCss3, FaHtml5, FaNode, FaPython, FaReact } from "react-icons/fa";
import { SiDjango, SiExpress, SiMongodb, SiMysql, SiTailwindcss } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import './skill.css'

const Skill = () => {
    return (
        <div className="md:w-3/4 mx-auto py-8" id="skill">
            <Title title='Skills' summary='Technologies I Like To Work With'></Title>
            <div className="hidden">
                <div className="w-2/4 mx-auto h-[75vh] border-t border-l border-r hidden lg:block border-secondaryColor rounded-full mt-12 relative">
                    <img src="https://avatars.githubusercontent.com/u/99094220?s=400&u=c2a7cfe6dcdd2acdcc6be2ed33520f25c60ea23b&v=4" className="w-[200px] absolute top-32 rounded-full right-32" alt="" />
                    {/* skill image */}
                    <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/html.png" alt="html image" className="w-[40px] absolute left-12 bottom-12" />

                    <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/css.png" alt="html image" className="w-[40px] absolute -left-2 bottom-36" />

                    <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/tailwind.png" alt="html image" className="w-[45px] absolute -left-6 bottom-60" />

                    <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/html.png" alt="html image" className="w-[40px] absolute left-12 bottom-12" />

                    <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/bootstrap.png" alt="html image" className="w-[40px] absolute -left-2 top-32" />

                    <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/js.png" alt="html image" className="w-[40px] absolute left-10 top-14" />

                    <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/jequery.png" alt="html image" className="w-[45px] absolute left-28 top-0" />

                    <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/react.png" alt="html image" className="w-[40px] absolute right-56 -top-4" />

                    <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/python.png" alt="html image" className="w-[40px] absolute right-36 -top-2" />

                    <img src="https://batisteo.gallerycdn.vsassets.io/extensions/batisteo/vscode-django/1.14.0/1696077925649/Microsoft.VisualStudio.Services.Icons.Default" alt="html image" className="w-[40px] absolute right-16 top-8" />

                    <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/python.png" alt="html image" className="w-[40px] absolute right-36 -top-2" />

                    <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/python.png" alt="html image" className="w-[40px] absolute right-36 -top-2" />

                    <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/python.png" alt="html image" className="w-[40px] absolute right-36 -top-2" />

                    <img src="https://raw.githubusercontent.com/0rakib0/personal-portfolio-react/main/src/assets/python.png" alt="html image" className="w-[40px] absolute right-36 -top-2" />

                </div>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 md:mt-8 mt-6">
                <div className="bg-[#252525] py-10 text-center rounded-lg card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <DiJavascript className="mx-auto text-6xl text-secondaryColor scal"></DiJavascript>
                    <p className="mt-2">JavaScript</p>
                </div>
                <div className="bg-[#252525] py-10 text-center rounded-lg card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <FaPython className="mx-auto text-6xl text-secondaryColor scal"></FaPython>
                    <p className="mt-2">Python</p>
                </div>
                <div className="bg-[#252525] py-10 text-center rounded-lg card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <SiDjango className="mx-auto text-6xl text-secondaryColor scal"></SiDjango>
                    <p className="mt-2">Django</p>
                </div>
                <div className="bg-[#252525] py-10 text-center rounded-lg card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <TbApi className="mx-auto text-6xl text-secondaryColor scal"></TbApi>
                    <p className="mt-2">Django Rest API</p>
                </div>
                <div className="bg-[#252525] py-10 text-center rounded-lg card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <FaReact className="mx-auto text-6xl text-secondaryColor scal"></FaReact>
                    <p className="mt-2">React</p>
                </div>
                <div className="bg-[#252525] py-10 text-center rounded-lg card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <FaNode className="mx-auto text-6xl text-secondaryColor scal"></FaNode>
                    <p className="mt-2">Node JS</p>
                </div>
                <div className="bg-[#252525] py-10 text-center rounded-lg card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <SiExpress className="mx-auto text-6xl text-secondaryColor scal"></SiExpress>
                    <p className="mt-2">Express JS</p>
                </div>
                <div className="bg-[#252525] py-10 text-center rounded-lg card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <FaCss3 className="mx-auto text-6xl text-secondaryColor scal"></FaCss3>
                    <p className="mt-2">CSS3</p>
                </div>
                <div className="bg-[#252525] py-10 text-center rounded-lg card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <SiTailwindcss className="mx-auto text-6xl text-secondaryColor scal"></SiTailwindcss>
                    <p className="mt-2">Tailwindcss</p>
                </div>
                <div className="bg-[#252525] py-10 text-center rounded-lg card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <FaBootstrap className="mx-auto text-6xl text-secondaryColor scal"></FaBootstrap>
                    <p className="mt-2">Bootstrap</p>
                </div>
                <div className="bg-[#252525] py-10 text-center rounded-lg card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <SiMongodb className="mx-auto text-6xl text-secondaryColor scal"></SiMongodb>
                    <p className="mt-2">Mongodb</p>
                </div>
                <div className="bg-[#252525] py-10 text-center rounded-lg card-shadow lg:shadow-none md:shadow-md md:shadow-secondaryColor shadow-md shadow-secondaryColor">
                    <SiMysql className="mx-auto text-6xl text-secondaryColor scal"></SiMysql>
                    <p className="mt-2">Mysql</p>
                </div>
            </div>
        </div>
    )
}

export default Skill