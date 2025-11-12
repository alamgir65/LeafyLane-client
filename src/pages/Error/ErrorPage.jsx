import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        document.title = "ToyTime's - 404";
    }, [])
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <h1 className='text-5xl font-bold'>404 - Page Not Found</h1>
            <p className='text-accent my-4'>ToyTime's can help with many things, but finding this page isn’t one of them.</p>
            <button className='btn btn-primary' onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default ErrorPage;