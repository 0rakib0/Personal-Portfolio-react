import { Outlet } from "react-router-dom"
import Navbar from "../Components/ShareComponent/NavBar/NavBar"


const Root = () =>{
    return(
        <div className="bg-red-200">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}
export default Root