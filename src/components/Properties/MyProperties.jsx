import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const MyProperties = () => {

    const [myProperties, setMyProperties] = useState([]);
    const { user } = useAuth();
    const { axiosSecure } = useAxiosSecure();

    useEffect(() => {
        if (user?.email) {
            axiosSecure?.get(`/properties?email=${user.email}`)
                .then(data => {
                    console.log(data.data);
                    setMyProperties(data.data);
                })
        }
    }, [user, axiosSecure])

    return (
        <div>
            <h1 className='text-4xl font-semibold text-center text-primary my-10'>
                My Properties
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 mt-5 py-8 mx-auto px-5 rounded-lg'>
                {
                    myProperties.map(item => (<Property key={item._id} property={item} />
                    ))}
            </div>
        </div>
    );
};

export default MyProperties;