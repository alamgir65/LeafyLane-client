import React, { use, useEffect, useState } from 'react';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router';
import { IoEyeOffSharp, IoEyeSharp } from 'react-icons/io5';

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const location = useLocation();

    const navigate = useNavigate();

    // const loginHandler = (e) => {
    //     e.preventDefault();
    //     const email = e.target.email.value;
    //     const password = e.target.password.value;

    //     loginUser(email, password)
    //         .then(res => {
                
    //             setUser(res.user);
    //             e.target.reset();
    //             navigate(location.state?.from?.pathname || '/category/0');
                
    //         })
    //         .catch(err => {
                
    //         })
    // }
    // const googleLoginHandler = () => {
    //     createGoogleUser()
    //         .then(res => {
    //             setUser(res.user);
    //             navigate('/category/0');
    //         })
    //         .catch(err => {
                
    //         })
    // }
    useEffect(() => {
        document.title = "ToyTime's - Login";
    }, [])
    return (
        <div className='flex justify-center items-center min-h-screen mt-10'>
            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl py-5">
                <h2 className="text-2xl font-bold text-center">Login Your account</h2>
                <div className="card-body">
                    <form>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input name='email' type="email" className="input w-full" placeholder="Email" />
                            <label className="label">Password</label>
                            <div className='relative'>
                                <input name='password'
                                    type={`${showPass ? 'text' : 'password'}`}
                                    className="input w-full" placeholder="Password" />
                                <button onClick={() => setShowPass(!showPass)} className='absolute right-6 top-3 text-lg'>
                                    {
                                        showPass ? <IoEyeOffSharp /> : <IoEyeSharp />
                                    }
                                </button>
                            </div>
                            <div><NavLink to={'/auth/forgot-password'} className="link link-hover">Forgot password?</NavLink></div>
                            <button type='submit' className="btn btn-primary mt-4">Login</button>
                            <button className="btn bg-white text-black border-[#e5e5e5]">
                                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <p className='mt-3'>Don't have any account? please <NavLink to={'/auth/register'} className={'text-blue-500 underline'}>Register</NavLink> </p>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;