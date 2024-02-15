import Title from "../../ShareComponent/NavBar/Title"

const QS = () => {
    return (
        <div className="md:w-3/4 mx-auto py-8">
            <Title title='Question and Answer' summary='Some Common Q&A'></Title>
            <div className="mt-6 flex items-center justify-between lg:flex-row flex-col">
                <div className="lg:w-9/12 mb-4">
                    <img src="https://dragonflytraining.files.wordpress.com/2013/10/man-with-question-01.png" alt="" />
                </div>
                <div className="w-full space-y-4 mt-6">
                    <div className="collapse border-2 border-secondaryColor shadow-md hover:shadow-secondaryColor">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            What programming languages and technologies do you specialize in?
                        </div>
                        <div className="collapse-content">
                            <p>I specialize in MERN stack, Python Django, and React for full-stack web development, ensuring scalable, efficient, and user-centric applications through robust frontend and backend solutions, along with seamless integration of databases and APIs.</p>
                        </div>
                    </div>
                    <div className="collapse border-2 border-secondaryColor shadow-md hover:shadow-secondaryColor">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            Can you provide examples of websites or web applications you've developed?
                        </div>
                        <div className="collapse-content">
                            <p>Examples include e-commerce platforms, social networks, and business portals, showcasing my diverse skills in full-stack development and user-centric design.</p>
                        </div>
                    </div>
                    <div className="collapse border-2 border-secondaryColor shadow-md hover:shadow-secondaryColor">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            How do you approach responsive design and ensuring websites work well on different devices?
                        </div>
                        <div className="collapse-content">
                            <p>I prioritize responsive design using media queries and flexible layouts, ensuring compatibility and optimal user experience across various devices and screen sizes.</p>
                        </div>
                    </div>
                    <div className="collapse border-2 border-secondaryColor shadow-md hover:shadow-secondaryColor">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                        What is your process for testing and debugging websites?
                        </div>
                        <div className="collapse-content">
                            <p>My process involves thorough testing across browsers and devices, utilizing debugging tools, and conducting systematic code reviews to ensure high-quality, bug-free websites.</p>
                        </div>
                    </div>
                    <div className="collapse border-2 border-secondaryColor shadow-md hover:shadow-secondaryColor">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                        How do you stay updated on new web technologies and best practices?
                        </div>
                        <div className="collapse-content">
                            <p>I stay updated through online courses, industry blogs, attending conferences, and engaging with developer communities, ensuring continuous learning and adoption of best practices.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QS