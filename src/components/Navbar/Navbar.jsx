import { NavLink } from 'react-router';
import { useEffect, useRef, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import './Navbar.css'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, logoutUser } = useAuth();
    const menuRef = useRef(null);
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const links = (
        <>
            <li><NavLink className="nav-li" to="/">Home</NavLink></li>
            <li><NavLink className="nav-li" to="/all-properties">All Properties</NavLink></li>
            <li><NavLink className="nav-li" to="/add-property">Add Property</NavLink></li>
            <li><NavLink className="nav-li" to="/my-properties">My Properties</NavLink></li>
            <li><NavLink className="nav-li" to="/my-ratings">My Ratings</NavLink></li>
        </>
    );

    const logoutHandler = (e) => {
        e.stopPropagation();
        logoutUser()
            .then(() => setIsMenuOpen(false))
            .catch((err) => console.error(err));
    };

    useEffect(() => {
        const html = document.querySelector("html");
        html.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const themeController = (checked) => {
        setTheme(checked ? "dark" : "light");
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <div className="navbar shadow-sm px-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <h1 className="text-xl sm:text-2xl font-bold opacity-90">
                    <span className="text-primary">Home</span>Next
                </h1>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {links}
                </ul>
            </div>

            <div className="navbar-end space-x-3 relative" ref={menuRef}>
                <label className="toggle text-base-content">
                    <input type="checkbox" onChange={(e) => themeController(e.target.checked)} value="synthwave" className="theme-controller" />

                    <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                    <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                </label>
                {user ? (
                    <div className="relative">

                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setIsMenuOpen((prev) => !prev);
                            }}
                            className="btn btn-ghost btn-circle avatar"
                        >
                            <div className="w-10 rounded-full overflow-hidden">
                                <img alt="User" src={user?.photoURL || '/default-avatar.png'} />
                            </div>
                        </button>

                        {/* Dropdown */}
                        {isMenuOpen && (
                            <div className="absolute z-10 right-0 top-12 bg-green-100 text-primary rounded-md p-5 space-y-3 shadow-md w-56">
                                <p className="font-semibold">{user?.displayName}</p>
                                <p className="text-sm text-gray-700">{user?.email}</p>
                                <button
                                    onClick={logoutHandler}
                                    className="btn btn-outline btn-primary w-full mt-3"
                                >
                                    Log Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="space-x-3">
                        <NavLink to="/auth/register" className="btn btn-outline btn-primary">
                            Register
                        </NavLink>
                        <NavLink to="/auth/login" className="btn btn-outline btn-primary">
                            Login
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
