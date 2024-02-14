import { Outlet } from "react-router-dom"
import Navbar from "../Components/ShareComponent/NavBar/NavBar"
import Footer from "../Components/ShareComponent/NavBar/Footer"


const Root = () =>{
    return(
        <div className="w-11/12 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}
export default Root