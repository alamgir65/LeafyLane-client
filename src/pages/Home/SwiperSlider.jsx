import React, { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Swiper.css";

const sliderPromise = fetch("/slides.json").then((res) => res.json());

const SwiperSlider = () => {
    const slides = use(sliderPromise);

    return (
        <div className="w-full h-[90vh]">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                loop={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="relative w-full h-[90vh] flex justify-center  text-center text-primary overflow-hidden"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <div className="absolute inset-0  transition-opacity duration-700"></div>

                            <div className="relative z-10 max-w-2xl px-4 mt-[10%] animate-fadeInUp pl-8">
                                <p className="text-lg md:text-xl text-primary font-light opacity-90">
                                    {slide.subtitle}
                                </p>
                                <h2 className="text-2xl md:text-5xl font-semibold text-primary my-5 drop-shadow-lg">
                                    {slide.title}
                                </h2>
                                <button className="btn btn-primary px-10 py-6 text-xl">
                                    {slide.buttonText}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SwiperSlider;