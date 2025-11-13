import React, { use } from 'react';
import { FaEye, FaStar } from 'react-icons/fa';
import { Link, NavLink, useNavigate } from 'react-router';
import { IoMdPricetags } from "react-icons/io";
import demo from '../../assets/bgg2.jpg';
import { CiLocationOn } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const categoryPromise = fetch('/categories.json').then(res => res.json());


const Property = ({ property,deleteHandler, flag = false }) => {
    const { title, image, category, description, location, price_min, price, _id } = property;
    const { user } = useAuth();
    const categories = use(categoryPromise);

    const navigate = useNavigate();

    const editHandler = () => {
        document.getElementById('my_modal_3').showModal();
    }
    const updateHandler = (e) => {

        e.preventDefault();

        const title = e.target.title.value;
        const price = e.target.price.value;
        const category = e.target.category.value;
        const description = e.target.description.value;
        const location = e.target.location.value;
        const image = e.target.image.value;

        const updatedProduct = {
            title, price, category, description, location, image
        };

        // console.log(updatedProduct);

        fetch(`https://home-next-api-server.vercel.app/properties/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Your Property has been updated.",
                        icon: "success"
                    });
                }
                navigate(`/property-details/${_id}`);
                // console.log(data);
            })
            .catch(error => {
                console.error('Error:', error);
            })
    }

    return (
        <>
            <div className="card bg-base-100 h-full w-96 shadow-sm">
                <figure>
                    <img
                        src={image? image : demo}
                        className='h-60 w-full'
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className='flex gap-2 items-center'>
                        <CiLocationOn />
                        <p>{location}</p>
                    </div>
                    <h2 className="card-title">
                        {title}
                    </h2>
                    <p>{description.split(' ').slice(0, 15).join(' ')}{description.split(' ').length > 20 ? '...' : ''}</p>
                    <div className="card-actions justify-between items-center mt-4">
                        <div className="badge badge-outline">{category}</div>
                        <h1 className='text-xl font-bold'>${price_min}</h1>
                    </div>
                    {
                        flag && <>
                            <p className='text-center opacity-70 mt-4'>actions</p>
                            <hr className='opacity-40' />
                            <div className='flex justify-between mt-3'>
                                <button onClick={editHandler} className='btn btn-warning btn-outline'><CiEdit /> Edit</button>
                                <button onClick={()=>deleteHandler(_id)} className='btn btn-error btn-outline'><MdDelete /> Delete</button>
                            </div>
                        </>

                    }

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div>
                                <form onSubmit={updateHandler}>
                                    <fieldset className="fieldset">
                                        <label className="label">Title</label>
                                        <input name='title' defaultValue={title} type="text" className="input w-full" placeholder="Property Name" />

                                        <select name='category' defaultValue={category} className="select w-full">
                                            <option disabled={true}>Select Category</option>
                                            {
                                                categories.map(category => <option key={category.id} value={category.name}>{category.name}</option>)
                                            }
                                        </select>

                                        <label className="label">Photo Url</label>
                                        <input name='image' defaultValue={image} type="text" className="input w-full" placeholder="Property PhotoURL" />

                                        <label className="label">Location</label>
                                        <input name='location' defaultValue={location} type="text" className="input w-full" placeholder="Property location" />

                                        <label className="label">Owner Name</label>
                                        <input name='name' value={user?.displayName} type="text" className="input w-full" placeholder="Email" />

                                        <label className="label">Email</label>
                                        <input name='email' value={user?.email} type="email" className="input w-full" placeholder="Email" />

                                        <label className="label">Price</label>
                                        <input name='price' defaultValue={price_min ? price_min : price} type="number" className="input w-full" placeholder="Price" />

                                        <label className="label">Description</label>
                                        <textarea name='description' defaultValue={description} className="input w-full" placeholder="Description"></textarea>

                                        <button type='submit' className="btn btn-primary text-white mt-4">Update Property</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <Link to={`/property-details/${property._id}`} className='btn btn-primary mt-3'>View Details</Link>
                </div>
            </div>
        </>
    );
};

export default Property;