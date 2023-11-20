import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    const navlinks = <>
        <li> <NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/availabeFood">Available Food</NavLink> </li>
        <li> <NavLink to="/addFood">Add Food</NavLink> </li>
        <li> <NavLink to="/manageFoods">Manage My Foods</NavLink> </li>
        <li> <NavLink to="/foodRequest">My Food Request</NavLink> </li>
    </>
    return (
        <div className="navbar bg-base-100 border-2 border-green-400">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navlinks
                        }
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
                <img className="w-1/2 " src="https://i.ibb.co/zZQtjfV/images.png" alt="logo" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="btn">Log In</Link>
            </div>
        </div>
    );
};

export default Navbar;