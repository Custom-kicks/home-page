"use client";

import React from "react";
import Image from "next/image";
import { ArrowRightIcon } from "@radix-ui/react-icons"; // Importing ArrowRightIcon from Radix UI

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-start text-white px-4 md:px-8 lg:px-16">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/imgs/heroSection1.png"
          alt="Background sneaker image"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Left-Aligned Text Content */}
      <div className="flex flex-col max-w-full md:max-w-3xl lg:max-w-4xl gap-6 md:gap-8 lg:gap-[62px] text-white">
        <h1 className="text-[32px] md:text-[40px] lg:text-[56px] font-medium italic leading-normal">
          Custom Kicks: Craft Sneakers That Reflect Your Style
        </h1>
        <p className="text-base md:text-[24px] lg:text-[32px] font-semibold font-barlow leading-normal max-w-[90%] md:max-w-[667px]">
          We're on a mission to build the ultimate sneaker customization
          platform, complete with in-house designers and a dedicated blog for
          sneaker enthusiasts.
        </p>

        {/* Explore Button */}
        <div className="absolute bottom-8 md:bottom-12 flex justify-center w-full lg:w-auto">
          <a
            href="#"
            className="flex items-center gap-[10px] py-2 md:py-3 px-4 md:px-6 w-[120px] md:w-[150px] bg-white text-black rounded-md text-sm md:text-base font-semibold transition hover:bg-gray-200 shadow-md"
          >
            Explore 
            <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 ml-3" />
          </a> 
        </div>
      </div>
    </section>
  );
};

export default HeroSection;