"use client";
import { useState } from "react";
import Image from "next/image";
import { DragHandleHorizontalIcon, InstagramLogoIcon, TwitterLogoIcon, Cross1Icon } from "@radix-ui/react-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-5 lg:p-3 bg-white fixed top-0 left-0 right-0 z-50 font-work">
        {/* For Mobile: Hamburger Menu Icon on the left */}
        <div className="lg:hidden flex items-center mr-10">
          <button onClick={toggleMenu}>
            <DragHandleHorizontalIcon className="w-8 h-8 text-gray-900" />
          </button>
        </div>

        {/* Logo for all devices, centered in mobile view */}
        <div className="flex text-center ml-5">
          <Image src="/imgs/logo.png" alt="Custom Kicks Logo" width={180} height={180} />
        </div>

        {/* Nav Links for large devices */}
        <div className="hidden lg:flex space-x-10 items-center mr-5 text-normal">
          <a href="/" className="font-semibold text-gray-500 hover:text-gray-900 hover:font-bold">Home</a>
          <a href="/cart" className="font-semibold text-gray-500 hover:text-gray-900 hover:font-bold">Cart</a>
          <a href="/search" className="font-semibold text-gray-500 hover:text-gray-900 hover:font-bold">Brands</a>
          <a href="/blog" className="font-semibold text-gray-500 hover:text-gray-900 hover:font-bold">Blog</a>
          <a href="/contact" className="text-normal font-normal text-white bg-black border border-gray-800 px-4 py-3 rounded-md hover:bg-gray-900">
            Contact us
          </a>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="fixed top-[65px] left-0 w-2/3 h-screen bg-white shadow-lg z-50 transition-transform duration-500 ease-out transform translate-x-0 fade-in-slide-left"
          >
            {/* Close (X) Icon */}
            <button className="absolute top-5 right-5 text-gray-900 text-2xl font-bold" onClick={closeMenu}>
              <Cross1Icon/>
            </button>

            <ul className="flex flex-col items-start p-6 space-y-4 text-gray-800 text-normal mt-3">
              <li>
                <a href="/hero" className="hover:text-indigo-500" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-indigo-500" onClick={closeMenu}>
                  Cart
                </a>
              </li>
              <li>
                <a href="/designs" className="hover:text-indigo-500" onClick={closeMenu}>
                  Designs
                </a>
              </li>
              <li>
                <a href="/brands" className="hover:text-indigo-500" onClick={closeMenu}>
                  Brands
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-indigo-500" onClick={closeMenu}>
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-indigo-500" onClick={closeMenu}>
                  Contact
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-indigo-500" onClick={closeMenu}>
                  FAQ
                </a>
              </li>
            </ul>

            {/* Connect with Us Section */}
            <div className="mt-auto p-6">
              <p className="text-gray-600">Connect with us:</p>
              <div className="flex space-x-4 mt-2">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramLogoIcon className="w-6 h-6 text-gray-400 hover:text-indigo-500" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <TwitterLogoIcon className="w-6 h-6 text-gray-400 hover:text-indigo-500" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;