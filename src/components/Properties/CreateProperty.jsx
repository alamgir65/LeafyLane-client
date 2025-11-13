import React, { use, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import useAuth from '../../hooks/useAuth';
import useAxios from '../../hooks/useAxios';
import Swal from 'sweetalert2';

const categoryPromise = fetch('/categories.json').then(res => res.json());

const CreateProperty = () => {

    const { user } = useAuth();
    const categories = use(categoryPromise);
    const axiosInstance = useAxios();

    const notify = () => toast("User created successfully.");
    const notify2 = (msg) => toast(msg);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);


    const handleCreateProperty = e => {
        e.preventDefault();

        const title = e.target.title.value;
        const seller_name = e.target.name.value;
        const email = e.target.email.value;
        const price = e.target.price.value;
        const category = e.target.category.value;
        const description = e.target.description.value;
        const location = e.target.location.value;
        const image = e.target.image.value;
        const now = new Date();
        const created_at = now.toISOString().split('.')[0] + 'Z';

        const newProperty = {
            title, seller_name, email, price, category, description, location, image, created_at
        };
        console.log(newProperty);

        fetch('http://localhost:3000/properties', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newProperty)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Created!",
                        text: "Your Property has been created.",
                        icon: "success"
                    });
                }
                console.log(data);
            })

    }
    return (
        <div>
            <div className='flex justify-center items-center min-h-screen my-10'>
                <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl py-5">
                    <h2 className="text-2xl font-bold text-center">Create Property</h2>
                    <div className="card-body">
                        <form onSubmit={handleCreateProperty}>
                            <fieldset className="fieldset">
                                <label className="label">Title</label>
                                <input name='title' type="text" className="input w-full" placeholder="Property Name" />

                                <select name='category' className="select w-full">
                                    <option disabled={true}>Select Category</option>
                                    {
                                        categories.map(category => <option key={category.id} value={category.name}>{category.name}</option>)
                                    }
                                </select>

                                <label className="label">Photo Url</label>
                                <input name='image' type="text" className="input w-full" placeholder="Property PhotoURL" />

                                <label className="label">Location</label>
                                <input name='location' type="text" className="input w-full" placeholder="Property location" />

                                <label className="label">Owner Name</label>
                                <input name='name' value={user?.displayName} type="text" className="input w-full" placeholder="Email" />

                                <label className="label">Email</label>
                                <input name='email' value={user?.email} type="email" className="input w-full" placeholder="Email" />

                                <label className="label">Price</label>
                                <input name='price' type="number" className="input w-full" placeholder="Price" />

                                <label className="label">Description</label>
                                <textarea name='description' className="input w-full" placeholder="Description"></textarea>

                                <button type='submit' className="btn btn-primary text-white mt-4">Create Property</button>
                                <ToastContainer />
                                {
                                    error && notify2(error)
                                }
                                {
                                    success && notify()
                                }
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProperty;