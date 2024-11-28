"use client";

import React, { useState } from "react";
import { Pencil1Icon, ChevronUpIcon } from "@radix-ui/react-icons"; 
import Image from "next/image";

const products = [
  { name: "Anime Phantom", price: "₹9,799", originalPrice: "₹12,999", img: "/imgs/sneaker10.jpeg" },
  { name: "Urban Cosmos", price: "₹11,499", originalPrice: "₹14,999", img: "/imgs/Custom_shoes.jpeg" },
  { name: "Cartoon Clash", price: "₹9,199", originalPrice: "₹11,999", img: "/imgs/Custom4.jpeg" },
  { name: "Nature Luxe", price: "₹10,499", originalPrice: "₹13,999", img: "/imgs/sneaker11.jpeg" },
  { name: "Ace Strike", price: "₹7,899", originalPrice: "₹9,999", img: "/imgs/Ace.jpeg" },
  { name: "Artful Airs", price: "₹7,899", originalPrice: "₹9,599", img: "/imgs/JordanArt.jpeg" },
  { name: "Fusion Heroes", price: "₹5,999", originalPrice: "₹7,499", img: "/imgs/DragonBallxNaruto.jpeg" },
  { name: "Twilight Horizon", price: "₹8,499", originalPrice: "₹10,999", img: "/imgs/Attack_on_Titan_Custom.jpeg" },
  { name: "Crimson Blaze", price: "₹6,999", originalPrice: "₹8,599", img: "/imgs/sneaker12.jpeg" },
  { name: "Sorcerer's Edge", price: "₹8,299", originalPrice: "₹10,399", img: "/imgs/Jujutsu.jpeg" },
  { name: "Feudal Warrior", price: "₹6,499", originalPrice: "₹7,999", img: "/imgs/sneaker9.jpeg" },
  { name: "Classic Odyssey", price: "₹6,799", originalPrice: "₹8,199", img: "/imgs/1piece.jpeg" },
  { name: "Dream Anime", price: "₹6,799", originalPrice: "₹8,199", img: "/imgs/sneaker5.jpeg" },
  { name: "Timeless Anime", price: "₹6,799", originalPrice: "₹8,199", img: "/imgs/sneaker7.jpeg" },
];

const NewDesigns = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <section id="new-designs" className="py-24 bg-gray-50 px-6">
      <h2 className="text-3xl lg:text-7xl font-bold text-center mb-12 text-gray-400 font-poppins">New Designs</h2>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, showMore ? products.length : 4).map((product, index) => (
          <div key={index} className="bg-white p-2 sm:p-3 shadow-md rounded transition duration-300 hover:shadow-lg">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={product.img}
                alt={product.name}
                width={300} 
                height={150} 
                layout="responsive" 
                objectFit="cover" 
                className="w-full h-auto rounded-lg mb-2 sm:mb-4 transition-all duration-500 hover:scale-110"
              />
              {index < 4 && (
                <span className="absolute bottom-5 left-2 bg-rose-600 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded-xl italic">
                  New
                </span>
              )}
            </div>
            <h3 className="text-sm lg:text-lg font-light mb-1">{product.name}</h3>
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p className="text-gray-800 font-semibold text-sm sm:text-md inline">{product.price}</p>
                <p className="line-through text-gray-400 text-xs sm:text-sm inline ml-2">{product.originalPrice}</p>
              </div>
              <button className="relative">
                <Pencil1Icon className="w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-r from-orange-600 via-yellow-500 to-green-500 rounded-full text-white p-1" />
              </button>
            </div>
          </div>
        ))}
      </div> 

      {/* See More / See Less button */}
      <div className="flex justify-center mt-5">
        <button
          onClick={toggleShowMore}
          className="flex items-center justify-center text-gray-800 transition duration-500 ease-in-out"
        >
          <span>{showMore ? "See Less" : "See More"}</span>
          <ChevronUpIcon
            className={`w-6 h-6 ml-1 transform transition-transform duration-500 ${showMore ? "rotate-0" : "rotate-180"}`}
          />
        </button>
      </div>
    </section>
  );
};

export default NewDesigns;
