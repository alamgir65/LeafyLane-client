import { NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { use, useState } from 'react';

const Navbar = () => {
    const [username, setUsername] = useState(true);
    const {user,logoutUser} = use(AuthContext);
    const links = <>
        <li><NavLink className={'nav-li'} to={'/'}>Home</NavLink> </li>
        <li><NavLink className={'nav-li'} to={'/'}>All Tree's</NavLink> </li>
        {
            user && <>
                <li><NavLink className={'nav-li'} to={'/'}>Add Tree</NavLink> </li>
                <li><NavLink className={'nav-li'} to={'/auth/profile'}>My Tree's</NavLink> </li>
            </>
        }
    </>

    const logoutHandler = () => {
        logoutUser()
            .then(() => {

            })
            .catch(() => {

            })
    }

    return (
        <div className="navbar shadow-sm px-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <h1 className='text-xl sm:text-2xl font-bold opacity-90'>TOY's<span className='text-primary'>Time</span></h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-3 relative">
                {
                    user ? <>
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div
                                onMouseEnter={() => setUsername(false)}
                                onMouseLeave={() => setUsername(true)}
                                className="w-10 rounded-full relative"
                            >
                                <img
                                    alt="img"
                                    src={user?.photoURL} />
                            </div>
                            <p className={`absolute right-12 top-7 p-2 ${username ? 'hidden' : 'visible'} rounded-md bg-primary text-white`}>
                                {user?.displayName}
                            </p>
                        </div>
                        <a onClick={logoutHandler} className="btn btn-outline btn-primary">LogOut</a>
                    </>

                        : <div className='space-x-3'>
                            <NavLink to={'/auth/register'} className="btn btn-outline btn-primary">Register</NavLink>
                            <NavLink to={'/auth/login'} className="btn btn-outline btn-primary">Login</NavLink>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;