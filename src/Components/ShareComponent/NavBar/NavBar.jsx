import { Link, NavLink } from "react-router-dom"
import { FaArrowRight } from "react-icons/fa";
import './Navbar.css'

const Navbar = () => {


    const navLink = <>
        <li className="md:text-xl navItem lg:text-white text-black"><Link to='/'>Home</Link></li>
        <li className="md:text-xl navItem lg:text-white text-black"><a href="#about">About</a></li>
        <li className="md:text-xl navItem lg:text-white text-black"><a href="#skill">Skill</a></li>
        <li className="md:text-xl navItem lg:text-white text-black"><a href="#service">Service</a></li>
        <li className="md:text-xl navItem lg:text-white text-black"><a href="#project">Porfolio</a></li>
        <li className="md:text-xl navItem lg:text-white text-black"><a href="#contact">Contact</a></li>
    </>

    return (
        <div className="navbar bg-trasfarent">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <a className="btn btn-ghost md:text-4xl text-xl logohover">RA<span className="text-secondaryColor">KIB</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="rounded-md bg-transparent border-2 border-secondaryColor py-2 px-4 md:px-6 hireButton flex items-center gap-2">Hire Me <FaArrowRight></FaArrowRight></button>
            </div>
        </div>
    )
}


export default Navbar