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
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse libero necessitatibus quasi quo ea commodi magnam praesentium expedita soluta maxime officiis veritatis obcaecati illo, eius beatae corporis alias eos voluptatum!</p>
                        </div>
                    </div>
                    <div className="collapse border-2 border-secondaryColor shadow-md hover:shadow-secondaryColor">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            Can you provide examples of websites or web applications you've developed?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit provident quaerat tenetur ipsam aliquam, perferendis magni incidunt asperiores consectetur a corrupti porro alias voluptatibus, mollitia autem quisquam nam, laudantium dolores!</p>
                        </div>
                    </div>
                    <div className="collapse border-2 border-secondaryColor shadow-md hover:shadow-secondaryColor">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                            How do you approach responsive design and ensuring websites work well on different devices?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui perferendis voluptatibus, quisquam, saepe porro quae doloremque aut quidem illum voluptas, omnis sed voluptatum rem maxime reprehenderit deserunt recusandae quos doloribus.</p>
                        </div>
                    </div>
                    <div className="collapse border-2 border-secondaryColor shadow-md hover:shadow-secondaryColor">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                        What is your process for testing and debugging websites?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga amet qui fugiat accusamus dolore cumque nobis ex eligendi sint magni veritatis odio modi vero autem harum repellat, voluptas ea aperiam.</p>
                        </div>
                    </div>
                    <div className="collapse border-2 border-secondaryColor shadow-md hover:shadow-secondaryColor">
                        <input type="checkbox" />
                        <div className="collapse-title text-xl font-medium">
                        How do you stay updated on new web technologies and best practices?
                        </div>
                        <div className="collapse-content">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit iste suscipit alias quis necessitatibus enim tenetur illo possimus, doloribus provident veniam in asperiores perspiciatis nobis minus quasi ut? Consequatur, similique.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QS