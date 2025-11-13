import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Property from '../components/Properties/Property';
import Rating from './Rating';

const MyRatings = () => {

    const [ratings, setRatings] = useState([]);
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    useEffect(() => {
        if (user?.displayName) {
            axiosSecure.get(`/ratings?name=${user.displayName}`)
                .then(data => {
                    // console.log(data.data);
                    setRatings(data.data);
                })

            // fetch(`https://home-next-api-server.vercel.app/bids?email=${user.email}`)
            //     .then(res => res.json())
            //     .then(data => {
            //         console.log(data);
            //         setBids(data)
            //     })
        }
    }, [user,axiosSecure])

    return (
        <div>
            <h1 className='text-4xl font-semibold text-center text-primary my-10'>
                My Ratings
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 mt-5 py-8 mx-auto px-5 rounded-lg'>
                {
                    ratings.map(item => (<Rating key={item._id} item={item} />
                ))}
            </div>
        </div>
    );
};

export default MyRatings;