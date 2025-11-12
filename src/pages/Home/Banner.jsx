import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import bg1 from '../../assets/bg2.jpg';


const slides = [
  {
    id: 1,
    title: "Title",
    subtitle: "Subtitle",
    description: "Description",
    image: "https://toytime-theme.myshopify.com/cdn/shop/files/AdobeStock_609517545_273df5c7-5a5c-45b1-a5ad-b97264621de5.png?v=1707907353&width=535",
    buttonText: "Button",
    buttonLink: "#link"
  },
  {
    id: 2,
    title: "Title",
    subtitle: "Subtitle",
    description: "Description",
    image: "image-url.jpg",
    buttonText: "Button",
    buttonLink: "#link"
  },
];

const Banner = ({ autoplay = true, autoplayDelay = 3000 }) => {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoplayDelay);
    return () => clearInterval(interval);
  }, [autoplay, autoplayDelay, slides.length]);

  const goToSlide = (index) => setCurrentSlide(index);
  const goToPrevious = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${bg1})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center text-white px-4 max-w-3xl">
                <h2 className="text-5xl font-bold mb-4">{slide.title}</h2>
                <h3 className="text-2xl font-semibold mb-4">{slide.subtitle}</h3>
                <p className="text-lg mb-8">{slide.description}</p>
                <a
                  href={slide.buttonLink}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-black p-2 rounded-full"
      >
        <GrFormPrevious />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-30 hover:bg-opacity-50 text-black p-2 rounded-full"
      >
        <GrFormNext />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white bg-opacity-50'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;