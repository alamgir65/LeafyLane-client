import React, { use, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { NavLink, useLoaderData, useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import demo from '../../assets/bgg2.jpg'
import { CiLocationOn } from "react-icons/ci";

const PropertyDetails = () => {
    const property = useLoaderData();
    const { title, image, category, description, location, price_min, created_at, seller_name, email } = property;
    const notify = () => toast("Your information recorded!");
    const notify2 = () => toast("Item added to wishlist!");
    const submitHandler = (e) => {
        e.preventDefault();
        notify();
        e.target.reset();
    }

    const wishlistHandler = () => {
        // addItemToWishlist(id);
        notify2();
    }

    useEffect(() => {
        document.title = "ToyTime's - Details";
    }, [])

    return (
        <div className='mb-10  w-11/12 mx-auto p-5'>
            <main className='flex flex-col sm:flex-row items-center gap-5 py-10'>
                <div className='flex-1'>
                    <img src={demo} alt="" />
                </div>
                <div className='space-y-2 text-primary flex-1'>
                    {/* <div>
                        <div className="flex items-center gap-1 text-orange-400">
                            {Array.from({ length: rating }).map((_, i) => (
                                <FaStar key={i} />
                            ))}
                            <span className="ml-2 text-gray-600">({rating})</span>
                        </div>
                    </div> */}
                    <div className='flex gap-2 items-center'>
                        <CiLocationOn />
                        <p>{location}</p>
                    </div>
                    <h1 className='text-3xl text-primary font-bold'>{title}</h1>
                    <p className='text-lg font-bold text-primary'>Price: ${price_min}</p>
                    <p>Posted Dete : {created_at}</p>
                    <div className='my-3'>
                        <div className='flex justify-between'>
                            <p className='font-bold'>Seller Name :</p>
                            <p>{seller_name}</p>
                        </div>
                        <div className='flex justify-between'>
                            <p className='font-bold'>Seller Email :</p>
                            <p>{email}</p>
                        </div>
                    </div>
                    <button className='btn text-primary'>{category}</button>
                    <br />
                    <button onClick={wishlistHandler} className='btn btn-primary btn-outline my-5 px-6'>Add to Wishlist</button>
                </div>
            </main>

            <div className=''>
                <p className=''><span className='font-bold text-primary'>Description</span>: <span className='text-accent'>{description}</span>
                </p>
                <div>
                        <div className='flex justify-center'>
                            <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl mt-3">
                                <div className="card-body">
                                    <form onSubmit={submitHandler}>
                                        <fieldset className="fieldset">
                                            <input required name='name' type="name" className="input w-full" placeholder="Name" />
                                            <input required name='email' type="email" className="input w-full" placeholder="Email" />
                                            <ToastContainer />
                                            <button type='submit' className="btn btn-neutral mt-4">Try Now</button>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default PropertyDetails;