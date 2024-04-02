import Title from "../../ShareComponent/NavBar/Title"
import Lottie from "lottie-react";
import contactAni from './contact.json'

const Contact = () => {


    const handleSubmit = (event) =>{
        event.preventDefault()
    }
    
    return (
        <div className="md:w-3/4 mx-auto py-8" id="contact">
            <Title title='Contact' summary='Feel Free To Contact Us'></Title>
            <div className="flex lg:flex-row flex-col lg:items-center gap-4">
                <div className="lg:w-6/12">
                    <Lottie animationData={contactAni} loop={true} />
                </div>
                <div className="lg:w-6/12">
                    <form onSubmit={handleSubmit}>
                        <h4 className="text-2xl mt-4 font-semibold">Feel Free To Send</h4>
                        <label className="form-control w-full">
                            <div className="label">
                            </div>
                            <input type="text" placeholder="Full Name" className="input w-full bg-transparent border-2 border-white focus:border-secondaryColor focus:shadow-md focus:shadow-secondaryColor duration-100" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                            </div>
                            <input type="text" placeholder="Email" className="input w-full bg-transparent border-2 border-white focus:border-secondaryColor focus:shadow-md focus:shadow-secondaryColor duration-100"/>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                            </div>
                            <textarea name="" id="" cols="20" rows="5" className="w-full bg-transparent border-2 border-white focus:border-secondaryColor focus:shadow-lg focus:shadow-secondaryColor duration-100 rounded-md p-2" placeholder="Message"></textarea>
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                            </div>
                            <input type="submit" placeholder="Email" className="input w-full hover:bg-transparent border-1 border-white hover:border-secondaryColor hover:shadow-md hover:shadow-secondaryColor duration-300 bg-secondaryColor"/>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Contact