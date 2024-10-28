"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Unleash Your Creativity",
      subtitle: "Design Custom Sneakers with Ease, Exclusively on Custom Kicks",
      description:
        "Design and personalize your sneakers with ease, selecting colors, patterns, and unique features to craft a pair of shoes that truly reflect your style. Whether it's subtle tweaks or bold redesigns, our platform offers endless possibilities for creating your dream sneakers from scratch.",
      image: "/imgs/heroshoe.png",
    },
    {
      title: "Collab with Designers",
      subtitle: "Bring Your Vision to Life on Custom Kicks with Our In-House Designers",
      description:
        "Work hand-in-hand with our professional in-house designers to create custom sneakers that are truly one-of-a-kind. Whether you need guidance or want expert input on your ideas, our designers are here to help transform your creative concepts into wearable art. From concept to completion.",
      image: "/imgs/2.png",
    },
    {
      title: "Stay in the Loop",
      subtitle: "Discover the Latest Sneaker Trends and Design Tips on Custom Kicks",
      description:
        "Our blog keeps you updated with everything you need to know about the sneaker world—from the latest design trends to insider tips on customizing your kicks. Get inspired by industry news, style guides, and expert advice to fuel your creativity and help you craft the perfect pair of custom sneakers.",
      image: "/imgs/heroBlog.png",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative bg-white bg-center h-screen flex items-center justify-center border-b">
      {/* Carousel Container */}
      <div className="flex overflow-hidden w-full h-[70%] lg:h-full md:h-[68%] relative lg:px-5 px-2">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse lg:flex-row w-full min-w-full transition-transform duration-700 ease-in-out ${
              currentSlide === index ? "translate-x-0" : "-translate-x-full"
            }`}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
            }}
          >
            {/* Left Content */}
            <div className="w-full lg:w-1/2 p-2 lg:p-5 flex flex-col justify-center gap-2 lg:gap-4 lg:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold italic mb-1 lg:mb-5">
                {slide.title}
              </h2>
              <p className="text-base md:text-lg lg:text-xl italic mt-1 lg:mt-3">
                {slide.subtitle}
              </p>
              <p className="text-sm md:text-base lg:text-lg text-gray-500 italic mt-1 lg:mt-2">
                {slide.description}
              </p>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-1/2 p-3 flex items-center justify-center lg:order-2">
              <Image
                src={slide.image}
                alt={slide.title}
                width={550}
                height={550}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Add to Cart Button */}
      <div className="absolute bottom-12 flex justify-center w-full z-20 mt-5">
        <a
          href="#"
          className="px-8 py-3 bg-black text-white text-lg rounded-none hover:bg-gray-800 transition"
        >
          Add to Cart
        </a>
      </div>
    </section>
  );
};

export default HeroSection;