"use client";
import { useState } from "react";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  DragHandleHorizontalIcon,
} from "@radix-ui/react-icons";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLoginDialog = () => {
    setIsLoginOpen(!isLoginOpen);
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
        <div className="flex space-x-1 lg:space-x-2">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-300" />
          <HeartIcon className="w-5 h-5 text-gray-300" />
          <button onClick={toggleLoginDialog}>
            <PersonIcon className="w-5 h-5 text-gray-300" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-12 lg:top-16 left-0 w-2/3 lg:w-1/4 h-full bg-black shadow-md z-50">
            <ul className="flex flex-col items-start p-4 space-y-4 text-gray-200">
              <li>
                <a href="#new-designs" className="hover:text-indigo-500" onClick={closeMenu}>
                  New Designs
                </a>
              </li>
              <li>
                <a href="#blogs" className="hover:text-indigo-500" onClick={closeMenu}>
                  Blogs
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-indigo-500" onClick={closeMenu}>
                  Brands
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-indigo-500" onClick={closeMenu}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Login Dialog */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 relative w-full max-w-lg">
            <button onClick={toggleLoginDialog} className="absolute top-2 right-2 text-gray-500">
              &times;
            </button>
            <h2 className="text-xl font-bold text-center">Sign in</h2>

            <form className="mt-6 space-y-4">
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter email"
                    required
                  />
                  <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                    placeholder="Enter password"
                    required
                  />
                  <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </span>
                </div>
              </div>

              <button
                type="submit"
                className="block w-full rounded-lg bg-gray-900 px-5 py-3 text-sm font-medium text-white"
              >
                Sign in
              </button>

              <p className="text-center text-sm text-gray-500">
                No account?{" "}
                <a className="underline" href="#">
                  Sign up
                </a>
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;