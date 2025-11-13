import React, { useEffect, useState } from 'react';
import Property from './Property';
import useAxios from '../../hooks/useAxios';
import Loading from '../Loading';


const AllProperties = () => {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const axiosInstance = useAxios();
    const [searchValue, setSearchValue] = useState('');
    const [sortBy, setSortBy] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axiosInstance.get('/properties');
                const data = res.data;
                setProperties(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching properties:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [axiosInstance]);

    useEffect(()=>{
        axiosInstance.get(`/properties?title=${searchValue}`)
            .then(res => {
                setProperties(res.data);
                setLoading(false);
            })
    },[searchValue,axiosInstance]);

    useEffect(()=>{
        axiosInstance.get(`/properties?sort=${sortBy}`)
            .then(res => {
                setProperties(res.data);
                setLoading(false);
            })
    },[sortBy,axiosInstance])

    if (loading) return <Loading></Loading>

    return (
        <div>
            <h1 className='text-4xl font-semibold text-center text-primary my-10'>
                All Properties
            </h1>
            <section>
                <div className='flex justify-between px-3 sm:px-10'>
                    <div className="dropdown dropdown-start">
                        <div tabIndex={0} role="button" className="btn m-1">Sort By ⬇️</div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={()=>setSortBy('price')}>By Price</a></li>
                            <li><a onClick={()=>setSortBy('date')}>By Posted Date</a></li>
                        </ul>
                    </div>
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input type="search" onChange={(e) => {
                            setSearchValue(e.target.value)
                            console.log(searchValue);
                        }} required placeholder="Search by Title" />
                    </label>
                </div>
            </section>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 mt-5 py-8 mx-auto px-5 rounded-lg'>
                {
                    properties.map(item => (<Property key={item._id} property={item} />
                ))}
            </div>
        </div>
    );
};

export default AllProperties;
