import React from 'react';
import SwiperSlider from './SwiperSlider';
import LatestProperties from '../../components/Properties/LatestProperties';
import WhyChoose from './WhyChoose';
import CustomerSaying from './CustomerSaying';
import MapSection from '../../components/Properties/MapSection';

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
            <section>
                <CustomerSaying></CustomerSaying>
            </section>
            <section>
                <MapSection></MapSection>
            </section>
        </div>
    );
};

export default Home;