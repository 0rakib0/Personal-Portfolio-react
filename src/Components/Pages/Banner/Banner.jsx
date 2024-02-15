import Lottie from "lottie-react";
import developeranimation from './developer-animation.json'
import { FaFileDownload } from "react-icons/fa";
import './banner.css'

import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className="flex lg:flex-row flex-col-reverse lg:w-3/4 mx-auto items-center justify-between">
            <div className="md:w-6/12">
                <h4 className="text-4xl font-bold">Hello! I am Rakibul Hassan</h4>
                <h4 className="text-2xl my-4">I am a <span className="text-secondaryColor">
                    <TypeAnimation
                        sequence={['Full stack Developer', 500, 'Backend Developer', 500, 'MERN stack Developer', 500, 'Frontend Developer', 500]}
                        wrapper="span"
                        style={{ fontSize: '1.5rem', display: 'inline-block' }}
                        speed={30}
                        repeat={Infinity}
                    />
                </span></h4>
                <p className="mb-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit dicta quidem voluptates eaque. Nesciunt totam velit dolore nam deserunt amet.</p>
                <div className="flex justify-center items-center">
                    <button className="rounded-md bg-transparent border-2 border-secondaryColor py-2 px-4 md:px-6 resumeBTN flex items-center gap-2">Resume<FaFileDownload></FaFileDownload></button>
                </div>
            </div>
            <div className="">
                <Lottie animationData={developeranimation} loop={true} />
            </div>

        </div>
    )
}


export default Banner