"use client";
import { useState } from "react";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  DragHandleHorizontalIcon,
  ArrowRightIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLoginMenu = () => {
    setIsLoginMenuOpen(!isLoginMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="flex items-center justify-between p-5 lg:p-6 bg-black fixed top-0 left-0 right-0 z-50">
        {/* Hamburger Menu Icon */}
        <button onClick={toggleMenu}>
          <DragHandleHorizontalIcon className="w-6 h-6 text-gray-200" />
        </button>

        {/* Brand Name */}
        <div className="text-xl font-bold text-center w-full text-white">
          Custom Kicks
        </div>

        {/* Right Icons */}
        <div className="flex space-x-1 lg:space-x-2 relative">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-300" />
          <HeartIcon className="w-5 h-5 text-gray-300" />
          <button onClick={toggleLoginMenu} className="relative">
            <PersonIcon className="w-5 h-5 text-gray-300" />
          </button>

          {/* Dropdown Menu for Sign In and Sign Up */}
          {isLoginMenuOpen && (
            <div className="absolute right-0 mt-8 w-32 bg-white border border-gray-200 shadow-lg rounded-md z-50">
              <ul className="py-1">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    SignIn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className=" flex block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    SignUp <ArrowRightIcon className="ml-8 mt-1" />
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-12 lg:top-16 left-0 w-2/3 lg:w-1/4 h-full bg-black shadow-md z-50">
            <ul className="flex flex-col items-start p-4 space-y-4 text-gray-200 animate-fadeIn">
              <li>
                <a
                  href="#new-designs"
                  className="hover:text-indigo-500"
                  onClick={closeMenu}
                >
                  New Designs
                </a>
              </li>
              <li>
                <a
                  href="#blogs"
                  className="hover:text-indigo-500"
                  onClick={closeMenu}
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#brands"
                  className="hover:text-indigo-500"
                  onClick={closeMenu}
                >
                  Brands
                </a>
              </li>
              <li>
                <a
                  href="#in-house-designers"
                  className="hover:text-indigo-500"
                  onClick={closeMenu}
                >
                  In-house Designers
                </a>
              </li>
              <li>
                <a
                  href="#our-community"
                  className="hover:text-indigo-500"
                  onClick={closeMenu}
                >
                  Our Community
                </a>
              </li>
              <li>
                <a
                  href="#your-orders"
                  className="hover:text-indigo-500"
                  onClick={closeMenu}
                >
                  Your Orders
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-indigo-500"
                  onClick={closeMenu}
                >
                  FAQ
                </a>
              </li>
            </ul>

            {/* Connect with Us Section */}
            <div className="mt-auto p-4">
              <p className="text-gray-400">Connect with us:</p>
              <div className="flex space-x-4 mt-2">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="text-gray-200 hover:text-indigo-500"
                >
                  <InstagramLogoIcon className="w-6 h-6" />
                </a>

                {/* Twitter */}
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="text-gray-200 hover:text-indigo-500"
                >
                  <TwitterLogoIcon className="w-6 h-6" />
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
