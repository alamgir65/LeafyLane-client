import React from 'react';
import SwiperSlider from './SwiperSlider';
import LatestProperties from '../../components/Properties/LatestProperties';
import WhyChoose from './WhyChoose';

const Home = () => {
    return (
        <div>
            <section>
                <SwiperSlider></SwiperSlider>
            </section>
            <section className='my-10'>
                <LatestProperties></LatestProperties>
            </section>
            <section>
                <WhyChoose></WhyChoose>
            </section>
        </div>
    );
};

export default Home;