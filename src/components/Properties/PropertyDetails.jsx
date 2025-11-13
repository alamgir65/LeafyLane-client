import React, { use, useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { NavLink, useLoaderData, useParams } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import demo from '../../assets/bgg2.jpg'
import { CiLocationOn } from "react-icons/ci";
import Rating from 'react-rating';
import { Star } from 'lucide-react';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const PropertyDetails = () => {
    const property = useLoaderData();
    const { title, image, category, description, location, price_min, created_at, seller_name, email } = property;
    const { user } = useAuth();
    const [rating, setRating] = useState(0);
    const notify = () => toast("Your information recorded!");
    const notify2 = () => toast("Item added to wishlist!");

    
        // console.log('User photo ', user);

    const submitHandler = (e) => {
        e.preventDefault();
        const review = e.target.name.value;
        const now = new Date();

        const created_at = now.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const reviewData = {
            rating,
            review,
            created_at,
            reviewer_name: user?.displayName,
            reviewer_image: user?.photoURL,
            email: user?.email,
            property_name: title,
            property_image: property?.image
        };

        // console.log(reviewData);

        fetch('https://home-next-api-server.vercel.app/ratings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Reviewd!",
                        text: "Your review has been added.",
                        icon: "success"
                    });
                }
                e.target.reset();
            })


    }

    const wishlistHandler = () => {
        // addItemToWishlist(id);
        notify2();
    }

    useEffect(() => {
        document.title = "HomeNest - Details";
    }, [])

    return (
        <div className='mb-10  w-11/12 mx-auto p-5'>
            <main className='flex flex-col sm:flex-row items-center gap-5 py-10'>
                <div className='flex-1'>
                    <img src={image? image : demo} alt="" />
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
                    <h1 className='mt-10 mb-4 text-xl font-bold text-primary'>Rating & Review's</h1>
                    <div className='w-full'>
                        <form onSubmit={submitHandler}>
                            <fieldset className="fieldset">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    initialRating={rating}
                                    onChange={(rate) => setRating(rate)}
                                    emptySymbol={<Star size={25} className="text-gray-300" />}
                                    fullSymbol={<Star size={25} className="fill-yellow-400 text-yellow-400" />}
                                />
                                <input required name='name' type="name" className="input w-full" placeholder="Write your review here" />
                                <button type='submit' className="btn btn-primary mt-2 w-30">Review</button>
                                <ToastContainer />
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyDetails;