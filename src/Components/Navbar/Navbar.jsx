import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut=() => {
        logOut()
        .then(res => console.log('log out successfull'))
        .catch(error => console.log(error))
    }

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
                {
                    user ?
                        <div>
                            <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full ">
                                            <img src={user.photoURL?user.photoURL : "no pic"} />
                                            {/* <p>{user.photoURL}</p> */}
                                        </div>
                                    </label>
                                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 dark:bg-slate-700 dark:text-white">
                                        <li>
                                            <a className="justify-between">
                                                {user.displayName ? user.displayName : "null"}
                                                <span className="badge">New</span>
                                            </a>
                                        </li>
                                        <li><a>{user.email? user.email: "null"}</a></li>
                                        <li><a href="/" onClick={handleSignOut}><button>Logout</button></a></li>
                                    </ul>
                                </div>
                        </div>
                        :
                        <div>
                            <Link to="/login">
                                <button className="btn">Log In</button>
                            </Link>
                            <Link to="/signup">
                                <button className="btn">Sing Up</button>
                            </Link>
                        </div>
                }


            </div>
        </div>
    );
};

export default Navbar;