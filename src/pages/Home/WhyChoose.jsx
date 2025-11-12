import React from 'react';
import choose from '../../assets/choose.jpg'
import choto1 from '../../assets/choto1.webp'
import choto2 from '../../assets/choto2.webp'
import choto3 from '../../assets/choto3.webp'

const WhyChoose = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-4 gap-8 p-10 items-center bg-base-200 my-10'>
            <div>
                <img src={choose} alt="" />
            </div>
            <div className='col-span-3'>
                <h1 className='text-primary text-4xl font-bold mb-8'>Why Choose Us?</h1>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    <div>
                        <img className='rounded-5xl' src={choto1} alt="" />
                        <h2 className='text-2xl font-bold text-primary mb-5'>Build everything you want</h2>
                        <p className='text-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div>
                        <img className='rounded-5xl' src={choto2} alt="" />
                        <h2 className='text-2xl font-bold text-primary mb-5'>Reduce development cost</h2>
                        <p className='text-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div>
                        <img className='rounded-5xl' src={choto3} alt="" />
                        <h2 className='text-2xl font-bold text-primary mb-5'>Receive world class support</h2>
                        <p className='text-primary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;