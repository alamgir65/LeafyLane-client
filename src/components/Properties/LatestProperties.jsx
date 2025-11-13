import React, { useEffect, useState } from 'react';
import Property from './Property';
import useAxios from '../../hooks/useAxios';


const LatestProperties = () => {
    const [latestProperties, setLatestProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosInstance = useAxios();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get('/latest-properties');
                const data = res.data;
                setLatestProperties(data);
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
            <h1 className='text-4xl font-semibold text-center text-primary mb-5'>
                Latest Properties
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 mt-5 py-8 mx-auto px-5 rounded-lg'>
                {
                    latestProperties.map(item => (<Property key={item._id} property={item} />
                ))}
            </div>
        </div>
    );
};

export default LatestProperties;
