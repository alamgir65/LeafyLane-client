import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Property from './Property'

const MyProperties = () => {

    const [myProperties, setMyProperties] = useState([]);
    const { user } = useAuth();
    const { axiosSecure } = useAxiosSecure();
    console.log(user);

    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/properties?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setMyProperties(data)
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
                    myProperties.map(item => (<Property key={item._id} property={item} flag={true} />
                    ))}
            </div>
        </div>
    );
};

export default MyProperties;