import React, { useEffect } from 'react';

const Loading = () => {
    useEffect(() => {
        document.title = "Loading...";
    }, [])
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    );
};

export default Loading;