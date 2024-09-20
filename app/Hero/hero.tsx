"use client";
import { useEffect, useState } from "react";
import Image from "next/legacy/image";

const images = [
  {
    src: "/imgs/carousel1.jpg",
    tagline: "We customize awesome sneakers",
  },
  {
    src: "/imgs/carousel.jpg",
    tagline: "We've experienced in-house designers",
  },
  {
    src: "/imgs/carousel3.jpg",
    tagline: "Trending blog stories on sneakers",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative flex items-center justify-center text-center min-h-screen bg-black overflow-hidden">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 w-full h-full z-10">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].tagline}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </div>

      {/* Black Gradient Overlay for Extra Darkening */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-90 z-8"></div>

      {/* Tagline */}
      <div className="relative z-10 text-white px-6">
        <h1 className="text-6xl lg:text-9xl font-extrabold mb-4 tracking-wider drop-shadow-xl">
          {images[currentIndex].tagline}
        </h1>
      </div>
    </section>
  );
};

export default Hero;