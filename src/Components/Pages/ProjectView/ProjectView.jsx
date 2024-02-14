import { FaArrowDown } from "react-icons/fa"

const ProjectView = () => {
    return (
        <div className="flex lg:flex-row  flex-col-reverse gap-6 mt-8">
            <div className="lg:w-5/12 ml-12  mx-auto ml-12 border-2 border-secondaryColor rounded-md h-[22rem] md:h-[25rem] lg:h-[30rem] overflow-y-scroll hover:shadow-md hover:shadow-secondaryColor duration-300">
                <img src="https://assets-global.website-files.com/5e593fb060cf877cf875dd1f/64c2c8f4ed003042c8af4527_thumbnail.jpeg" alt="" />
            </div>
            <div className="lg:w-6/12 ">
                <h4 className="text-2xl text-secondaryColor font-semibold mb-4">Project Name : 09Cafe</h4>
                <p className="text-xl">ProjectType : Resurant/Cafe</p>
                <h4 className="text-xl font-bold mt-2 text-secondaryColor">About Project</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, quasi facilis. Quo sint commodi non tempora quae ratione optio vitae non tempora quae ratione optio vitae?</p>
                <h4 className="text-xl font-bold mt-2 text-secondaryColor">Uses Tecknology</h4>
                <button className="border border-secondaryColor m-2 px-4 py-1 rounded-md">HTML5</button>
                <button className="border border-secondaryColor m-2 px-4 py-1 rounded-md">CSS3</button>
                <button className="border border-secondaryColor m-2 px-4 py-1 rounded-md">JavaScript</button>
                <button className="border border-secondaryColor m-2 px-4 py-1 rounded-md">React</button>
                <button className="border border-secondaryColor m-2 px-4 py-1 rounded-md">Tailwid</button>
                <button className="border border-secondaryColor m-2 px-4 py-1 rounded-md">Daisyui</button>
                <button className="border border-secondaryColor m-2 px-4 py-1 rounded-md">Node js</button>
                <button className="border border-secondaryColor m-2 px-4 py-1 rounded-md">Express js</button>
                <button className="border border-secondaryColor m-2 px-4 py-1 rounded-md">mongoDB</button>
                <div className="pb-3"></div>
                <hr />
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button onClick={() => document.getElementById('my_modal_3').showModal()} className="bg-secondaryColor flex items-center gap-2 p-3 rounded-md my-4 hover:border hover:border-secondaryColor hover:bg-transparent duration-300 hover:shadow-md hover:shadow-secondaryColor">Project Features <FaArrowDown></FaArrowDown> </button>
                <dialog id="my_modal_3" className="modal text-black">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero in doloremque quam consequuntur eius, quia labore unde, quas ipsum asperiores quisquam ullam nobis, ratione doloribus cum officia provident quo placeat!</p>
                    </div>
                </dialog>
                <hr />
                <div className="space-x-6">
                    <button className="bg-secondaryColor p-2 rounded-md my-4 hover:border hover:border-secondaryColor hover:bg-transparent duration-300 hover:shadow-md hover:shadow-secondaryColor">Live Link</button>
                    <button className="bg-secondaryColor p-2 rounded-md my-4 hover:border hover:border-secondaryColor hover:bg-transparent duration-300 hover:shadow-md hover:shadow-secondaryColor">Frontend Source Code</button>
                    <button className="bg-secondaryColor p-2 rounded-md my-4 hover:border hover:border-secondaryColor hover:bg-transparent duration-300 hover:shadow-md hover:shadow-secondaryColor">Backend Source Code</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectView