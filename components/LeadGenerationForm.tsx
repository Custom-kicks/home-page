"use client"; 

import React, { useState, useEffect } from 'react';
import Image from 'next/image'; 

const LeadGenerationForm: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [formClosed, setFormClosed] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // Show the form after 3 seconds of site interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!formClosed) {
        setShowForm(true);
        document.body.style.overflow = 'hidden'; 
      }
    }, 3000); 

    return () => clearTimeout(timer);
  }, [formClosed]);

  // Close the modal and prevent it from showing again
  const closeModal = () => {
    setShowForm(false);
    setFormClosed(true);
    document.body.style.overflow = 'auto'; 
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email });
  
    try {
      const response = await fetch("https://getform.io/f/apjmoeja", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name, 
          email, 
        }).toString(),
      });
  
      if (response.ok) {
        console.log("Form successfully submitted");
        closeModal();
      } else {
        console.error("Form submission failed", response);
      }
    } catch (error) {
      console.error("An error occurred during submission:", error);
    }
  };

  return (
    <>
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6">
          <section className="relative overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 bg-white max-w-md w-full sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
            {/* Image Section */}
            <div className="h-32 w-full md:h-full relative">
              <Image
                alt="Sneaker offer"
                src="/imgs/kicks.jpeg"
                fill
                className="object-cover"
              />
            </div>

            {/* Form Section */}
            <div className="relative p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-2xl font-semibold text-gray-500 hover:text-gray-700 transition-colors"
              >
                &times;
              </button>

              <p className="text-sm font-semibold uppercase tracking-widest text-gray-600">
                Run with the pack
              </p>

              <h2 className="mt-4 font-black uppercase text-2xl sm:text-3xl lg:text-4xl">
                <span className="block">Get 20% off</span>
                <span className="mt-1 text-sm block text-gray-600">
                  On your first order
                </span>
              </h2>

              <form
                action="https://getform.io/f/apjmoeja"
                method="POST"
                onSubmit={handleSubmit}
                className="mt-6"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md text-sm sm:text-base"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md text-sm sm:text-base"
                />
                {/* Honeypot field for spam prevention */}
                <input type="hidden" name="_gotcha" style={{ display: "none" }} />

                <button
                  type="submit"
                  className="mt-6 inline-block w-full bg-black py-3 text-sm font-bold uppercase tracking-widest text-white rounded-none transition hover:bg-gray-800"
                >
                  Get Discount
                </button>
              </form>

              <p className="mt-6 text-xs font-medium uppercase text-gray-400">
                Offer valid for first 100 users only *
              </p>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default LeadGenerationForm;