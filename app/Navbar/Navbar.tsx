"use client";

import { useState } from "react";
import Image from "next/image";
import { DragHandleHorizontalIcon, Cross1Icon } from "@radix-ui/react-icons";

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

        {/* Logo */}
        <div className="flex text-center ml-5">
          <Image src="/imgs/logo.png" alt="Custom Kicks Logo" width={180} height={180} />
        </div>

        {/* Navigation Links (Desktop) */}
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
            {/* Close Icon */}
            <button className="absolute top-5 right-5 text-gray-900 text-2xl font-bold" onClick={closeMenu}>
              <Cross1Icon />
            </button>

            {/* Menu Links */}
            <ul className="flex flex-col items-start p-6 space-y-4 text-gray-800 text-normal mt-3">
              <li><a href="/" className="hover:text-indigo-500" onClick={closeMenu}>Home</a></li>
              <li><a href="/cart" className="hover:text-indigo-500" onClick={closeMenu}>Cart</a></li>
              <li><a href="/designs" className="hover:text-indigo-500" onClick={closeMenu}>Designs</a></li>
              <li><a href="/brands" className="hover:text-indigo-500" onClick={closeMenu}>Brands</a></li>
              <li><a href="/blog" className="hover:text-indigo-500" onClick={closeMenu}>Blog</a></li>
              <li><a href="/contact" className="hover:text-indigo-500" onClick={closeMenu}>Contact</a></li>
              <li><a href="/faq" className="hover:text-indigo-500" onClick={closeMenu}>FAQ</a></li>
            </ul>

            {/* Social Links */}
            <div className="mt-auto p-6">
              <p className="text-gray-600">Connect with us:</p>
              <div className="flex space-x-4 mt-2">
                <a
                  href="https://www.facebook.com/customkicksind"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-75"
                >
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/customkicksind/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-75"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:customkicks011@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:opacity-75"
                >
                  <span className="sr-only">Email</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 9.75l-9 6-9-6m18 0L12 3.75m9 6v7.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V9.75"
                    />
                  </svg>
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
