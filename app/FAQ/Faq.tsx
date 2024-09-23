"use client"; // Necessary for Next.js projects using the app directory

import React, { useState } from 'react';

const FAQWithLeadForm: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ email });
    // Add your form submission logic here
  };

  return (
    <section id="faq" className="mt-20 bg-white px-5">
      {/* FAQ Section */}
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        <details className="bg-gray-100 p-4 rounded-md">
          <summary className="cursor-pointer font-semibold">How does the customization process work?</summary>
          <p className="mt-2 text-gray-600">
            You can select a sneaker of your favorite brand, customize it with colors, patterns, and more, then order it directly from our platform.
          </p>
        </details>
        <details className="bg-gray-100 p-4 rounded-md">
          <summary className="cursor-pointer font-semibold">How long does it take to receive my sneakers?</summary>
          <p className="mt-2 text-gray-600">Our designers work fast, and you should receive your custom sneakers within 2-3 weeks.</p>
        </details>
      </div>

      {/* Lead Form Section */}
      <div className="bg-gray-50 mt-16">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              {/* Stay Updated with Our Sneaker News! */}
            </h2>
            <p className="hidden text-gray-500 sm:mt-4 sm:block">
              Subscribe to get exclusive discounts, early releases, and insights into the latest sneaker trends.
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-yellow-400"
                />
              </div>

              <button
                type="submit"
                className="group mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-rose-600 px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-yellow-400 sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium"> Sign Up </span>

                <svg
                  className="size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQWithLeadForm;