import React from 'react';
import person1 from '../../assets/person1.jpg'
import person2 from '../../assets/person3.jpg'
import person3 from '../../assets/person2.jpg'

const CustomerSaying = () => {
    return (
        <div className='bg-green-50 p-8 my-10'>
            <h1 className='text-2xl sm:text-4xl text-center font-semibold text-primary mb-10'>What Customers Are Saying</h1>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 p-8'>
                <div className='bg-white rounded-lg p-6'>
                    <p>
                        "I am very impressed with the professionalism and knowledge Belén has shown me. I am a first time home buyer, but I know that she will help me through every step of the process until I figure out what's right for me."
                    </p>
                    <div className='flex gap-3 items-center mt-6'>
                        <img src={person1} className='rounded-[50%] w-20' alt="" />
                        <div>
                            <h5 className='font-bold'>Rita Roy</h5>
                            <p className='opacity-90'>Home Buyer</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg p-6'>
                    <p>
                        "I found Belén Mendoza through a friend. We had been looking at houses for months with no luck when she heard about Belén, who we hired to help us find our dream home. She knows the real estate market well and has helped me in so many ways."
                    </p>
                    <div className='flex gap-3 items-center mt-6'>
                        <img src={person3} className='rounded-[50%] w-20' alt="" />
                        <div>
                            <h5 className='font-bold'>John Siy</h5>
                            <p className='opacity-90'>Home owner</p>
                        </div>
                    </div>
                </div>
                <div className='bg-white rounded-lg p-6'>
                    <p>
                       "I am a real estate agent who has known Belén Mendoza for many years. In addition to her extensive knowledge of the market, she also provides expert advice and outstanding services. Her professionalism and honesty is unmatched."
                    </p>
                    <div className='flex gap-3 items-center mt-6'>
                        <img src={person2} className='rounded-[50%] w-20' alt="" />
                        <div>
                            <h5 className='font-bold'>Kalye Moore</h5>
                            <p className='opacity-90'>Real Estate Agent</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerSaying;