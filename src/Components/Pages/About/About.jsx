import Title from "../../ShareComponent/NavBar/Title"
import './about.css'
const About = () =>{
    return (
        <div className="md:w-3/4 mx-auto py-8">
            <Title title='About Me' summary='Know More About Me'></Title>
            
            <div className="flex lg:flex-row flex-col-reverse justify-center picmoving md:mt-8 mt-6">
                <div className="md:w-6/12 flex justify-center md:justify-start">
                    <img src="https://avatars.githubusercontent.com/u/99094220?s=400&u=c2a7cfe6dcdd2acdcc6be2ed33520f25c60ea23b&v=4" className="w-3/4 rounded-lg" alt="" />
                </div>
                <div className="lg:w-6/12 lg:my-4 md:mt-72 mt-48">
                    <h4 className="text-4xl text-secondaryColor md:mb-4 mb-2">Hey Programerse! I am Rakibul Hasan</h4>
                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae deleniti quasi labore minima dolorum inventore porro illo rem doloremque optio enim laborum consequatur recusandae neque cum eligendi, voluptatum veritatis vitae placeat quod fuga quisquam dignissimos alias earum. Magni, eveniet repellendus!</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum officia est amet quidem voluptate similique molestias beatae eligendi sapiente suscipit!</p>
                </div>
            </div>
        </div>
    )
}

export default About