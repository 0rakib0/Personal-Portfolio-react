import About from "../About/About"
import Banner from "../Banner/Banner"
import Service from "../Service/Service"
import Skill from "../Skill/Skill"
import TopProject from "../TopProject/TopProject"

const Home = () =>{
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            <Service></Service>
            <TopProject></TopProject>
        </div>
    )
}

export default Home