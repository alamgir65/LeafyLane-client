
import React, { use, useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOffSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { AuthContext } from '../../context/AuthContext';
import useAxios from '../../hooks/useAxios';

const Register = () => {

    const { createUser, setUser, createGoogleUser } = React.useContext(AuthContext);

    const axiosInstance = useAxios();

    const [error, setError] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [success, setSuccess] = useState(false);
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    const notify = () => toast("User created successfully.");
    const notify2 = (msg) => toast(msg);

    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(name, photo, email, password);

        // if (!passwordRegex.test(password) || password.length < 6) {
        //     setError('Password must be minimum 6 character with uppercase & lowercase');
        //     return;
        // }

        setError('');
        setSuccess(false);
        createUser(email, password)
            .then(res => {

                setUser(res.user);
                setSuccess(true);

                const profile = {
                    displayName: name,
                    photoURL: photo
                };
                updateProfile(res.user, profile)
                    .then(() => {
                        e.target.reset();
                        navigate('/');
                    })
                    .catch(err => {

                    });
            })
            .catch(err => {
                setError(err.message);
            })


    }
    const googleLoginHandler = () => {
        createGoogleUser()
            .then(res => {
                setUser(res.user);
                navigate('/');
            })
            .catch(err => {

            })
    }
    useEffect(() => {
        document.title = "ToyTime's - Register";
    }, [])
    return (

        <div>
            <div className='flex justify-center items-center min-h-screen mt-10'>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl py-5">
                    <h2 className="text-2xl font-bold text-center">Register Your account</h2>
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Name</label>
                                <input name='name' type="text" className="input w-full" placeholder="Name" />
                                <label className="label">Photo Url</label>
                                <input name='photo' type="text" className="input w-full" placeholder="PhotoURL" />
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
                                <button type='submit' className="btn btn-primary text-white mt-4">Register</button>
                                {/* Google */}
                                <button onClick={googleLoginHandler} className="btn bg-white text-black border-[#e5e5e5]">
                                    <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                    Login with Google
                                </button>
                                <ToastContainer />
                                {
                                    error && notify2(error)
                                }
                                {
                                    success && notify()
                                }
                                <p className='mt-3'>Already have an account? please <NavLink to={'/auth/login'} className={'text-primary underline'}>Login</NavLink> </p>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;