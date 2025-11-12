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
                const res = await axiosInstance.get('/properties');
                // console.log('data inside useEffect ', res);
                const data = res.data;
                const latestData = data
                    .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                    .slice(0, 6);
                setLatestProperties(latestData);
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
                Latest Plant's : {latestProperties.length}
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
