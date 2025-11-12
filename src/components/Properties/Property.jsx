import React from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import { IoMdPricetags } from "react-icons/io";
import demo from '../../assets/bgg2.jpg';
import { CiLocationOn } from "react-icons/ci";


const Property = ({ property}) => {
    console.log('Property', property);
    const { title, image, category, description, location ,price_min} = property;
    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <img
                        src={demo}
                        className='h-60 w-full'
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-2 items-center'>
                        <CiLocationOn/>
                        <p>{location}</p>
                    </div>
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-between items-center mt-4">
                        <div className="badge badge-outline">{category}</div>
                        <h1 className='text-xl font-bold'>${price_min}</h1>
                    </div>
                    <Link to={`/property-details/${property._id}`} className='btn btn-primary mt-3'>View Details</Link>
                </div>
            </div>
        </>
    );
};

export default Property;