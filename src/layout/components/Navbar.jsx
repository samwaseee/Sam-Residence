import { NavLink } from "react-router-dom";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const Navbar = () => {

    const links = <>
        <li><NavLink to="/" className="rounded-sm" style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#452820" : "",
                backgroundColor: isActive ? "white" : "",
                borderTop: isActive ? "solid #452820" : "solid white",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>Home</NavLink></li>
        <li><NavLink to="/properties" className="rounded-sm" style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#452820" : "",
                backgroundColor: isActive ? "white" : "",
                borderTop: isActive ? "solid #452820" : "solid white",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>Properties</NavLink></li>
        <li><NavLink to="/blog" className="rounded-sm" style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#452820" : "",
                backgroundColor: isActive ? "white" : "",
                borderTop: isActive ? "solid #452820" : "solid white",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>Blog</NavLink></li>
        <li><NavLink to="/Contact" className="rounded-sm" style={({ isActive, isTransitioning }) => {
            return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#452820" : "",
                backgroundColor: isActive ? "white" : "",
                borderTop: isActive ? "solid #452820" : "solid white",
                viewTransitionName: isTransitioning ? "slide" : "",
            };
        }}>Contact</NavLink></li>
    </>


    return (
        <nav>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <HiOutlineBuildingOffice2 size={54}/>
                    <a className="sans font-bold text-xl ml-3"><span className="text-[#452820]">SAM's</span> <br />RESIDENCE</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end grid md:flex">
                    <a className="btn btn-outline text-white bg-[#452820]">Log In</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;