import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Property from './Property'
import Swal from 'sweetalert2';

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


    const deleteHandler = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/properties/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your property has been deleted.",
                                icon: "success"
                            });
                            const remainingProperties = myProperties.filter(p => p._id !== _id);
                            setMyProperties(remainingProperties);
                        }
                    })
            }
        });
    }

    return (
        <div>
            <h1 className='text-4xl font-semibold text-center text-primary my-10'>
                My Properties
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6 mt-5 py-8 mx-auto px-5 rounded-lg'>
                {
                    myProperties.map(item => (<Property key={item._id} deleteHandler={deleteHandler} property={item} flag={true} />
                    ))}
            </div>
        </div>
    );
};

export default MyProperties;