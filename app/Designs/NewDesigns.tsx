"use client";
import React, { useState } from "react";
import { Pencil1Icon, ChevronUpIcon } from "@radix-ui/react-icons"; // Importing Radix Icons
import Image from "next/image";

const products = [
  { name: "Adidas Pink Pamper", price: "₹6,999", img: "/imgs/adidas_pink_pamper.jpeg" },
  { name: "Air Force 1 Ecstasy", price: "₹11,299", img: "/imgs/Air_force1_ectasy.jpeg" },
  { name: "The Future", price: "₹9,999", img: "/imgs/AF_future.jpeg" },
  { name: "Nike AF GTA", price: "₹5,999", img: "/imgs/Nke_gta.jpeg" },
  { name: "Midnight Jazz", price: "₹7,499", img: "/imgs/Midnight_Jazz.jpeg" },
  { name: "Customised Graffiti Edition", price: "₹8,999", img: "/imgs/Customised_graffiti.jpeg" },
  { name: "Custom Animated Edition", price: "₹9,499", img: "/imgs/Custom_animated_edition.jpeg" },
  { name: "Air Jordan NBA", price: "₹10,299", img: "/imgs/Air_jordan_nba.jpeg" },
  { name: "Air Force 1 Etsy", price: "₹6,299", img: "/imgs/Etsy.jpeg" },
  { name: "Millionaires Adidas Vladi", price: "₹11,999", img: "/imgs/Millionaires_Adidas_Vladi.jpeg" },
  { name: "Imaginary Elements", price: "₹6,799", img: "/imgs/much.jpeg" },
  { name: "Tom and Jerry", price: "₹5,499", img: "/imgs/Tom&jerry.jpeg" },
];

const NewDesigns = () => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  return (
    <section id="new-designs" className="py-24 bg-gray-50 px-6">
      <h2 className="text-3xl lg:text-7xl font-bold text-center mb-12 text-gray-400 font-poppins">New Designs</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Show first 4 products by default */}
        {products.slice(0, showMore ? products.length : 4).map((product, index) => (
          <div key={index} className="bg-white p-3 shadow-md rounded transition duration-300 hover:shadow-lg">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={product.img}
                alt={product.name}
                width={300} 
                height={150} 
                layout="responsive" 
                objectFit="cover" 
                className="w-full h-auto rounded-lg mb-4 transition-all duration-500 hover:scale-110"
              />
              {index < 4 && (
                <span className="absolute bottom-6 left-2 bg-rose-600 text-white text-sm font-semibold px-2 py-1 rounded-xl">
                  New
                </span>
              )}
            </div>
            <h3 className="text-lg font-semibold mb-1">{product.name}</h3>
            <div className="flex items-center justify-between">
              <p className="text-gray-500 text-md">{product.price}</p>
              <button className="relative">
                <Pencil1Icon className="w-6 h-6 bg-gradient-to-r from-orange-600 via-yellow-500 to-green-500 rounded-full text-white p-1" />
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