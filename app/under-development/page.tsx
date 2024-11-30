"use client";

import React from "react";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";
import { AlertTriangle, HomeIcon } from "lucide-react"; // Importing icons
import { motion } from "framer-motion"; // For animations

const UnderDevelopmentPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <main className="relative flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800 font-poppins px-6 text-center">
        {/* Animated Heading */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-6"
        >
          <AlertTriangle size={48} className="text-yellow-500 mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold">We are currently in Development</h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-md md:text-xl mb-8"
        >
          At Custom Kicks, we are committed to providing you with the best experience. 
          Our team is working tirelessly to bring exciting features your way!
        </motion.p>

        {/* Information Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="bg-yellow-100 border-l-4 border-yellow-500 p-4 rounded-md shadow-md max-w-2xl"
        >
          <p className="text-sm md:text-base">
            Stay tuned as we finalize our platform to deliver unparalleled sneaker customization 
            and exclusive features. Thank you for your patience and support!
          </p>
        </motion.div>

        {/* Back to Home Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-6"
        >
          <Link legacyBehavior href="/">
            <a className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-md text-sm md:text-base hover:bg-gray-800 transition duration-300">
              <HomeIcon size={20} /> Back to Home
            </a>
          </Link>
        </motion.div>
      </main>
    </>
  );
};

export default UnderDevelopmentPage;