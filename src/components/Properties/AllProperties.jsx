import React, { useEffect, useState } from 'react';
import Property from './Property';
import useAxios from '../../hooks/useAxios';


const AllProperties = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosInstance = useAxios();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get('/properties');
                const data = res.data;
                setProperties(data);
            } catch (error) {
                console.error('Error fetching properties:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [axiosInstance]);

    if (loading) return <p className="text-center">Loading...</p>;

    return (
        <div>
            <h1 className='text-4xl font-semibold text-center text-primary my-10'>
                All Properties
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 mt-5 py-8 mx-auto px-5 rounded-lg'>
                {
                    properties.map(item => (<Property key={item._id} property={item} />
                ))}
            </div>
        </div>
    );
};

export default AllProperties;
