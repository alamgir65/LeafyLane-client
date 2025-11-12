import React from 'react';
import SwiperSlider from './SwiperSlider';
import LatestProperties from '../../components/Properties/LatestProperties';

const Home = () => {
    return (
        <div>
            <section>
                <SwiperSlider></SwiperSlider>
            </section>
            <section className='my-10'>
                <LatestProperties></LatestProperties>
            </section>
        </div>
    );
};

export default Home;