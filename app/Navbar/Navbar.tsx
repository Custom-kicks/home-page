"use client"
import { HeartIcon, MagnifyingGlassIcon, PersonIcon, DragHandleHorizontalIcon } from '@radix-ui/react-icons';
import { useState } from 'react';

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
            
            <li><a href="#new-designs" className="hover:text-indigo-500" onClick={closeMenu}>New Designs</a></li>
            <li><a href="#blogs" className="hover:text-indigo-500" onClick={closeMenu}>Blogs</a></li>
            <li><a href="#brands" className="hover:text-indigo-500" onClick={closeMenu}>Brands</a></li>
            <li><a href="#faq" className="hover:text-indigo-500" onClick={closeMenu}>FAQ</a></li>
          </ul>
        </div>
      )}

      {/* Login Dialog */}
      {isLoginOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 relative">
            <button onClick={toggleLoginDialog} className="absolute top-2 right-2 text-gray-500">&times;</button>
            <h2 className="text-xl font-bold">Login or Get Started</h2>
            <a href="/login" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 block text-center">Log in</a>
            <a href="/get-started" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 block text-center">Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;