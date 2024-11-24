"use client";

import React, { useState, useEffect } from "react";
import { initializeApp, getApps } from "firebase/app";
import { addDoc, collection, getFirestore, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCykxTuqKTpLFOecypJAM5d1OwjDxwjRIQ",
  authDomain: "custom-kicks-ca63e.firebaseapp.com",
  projectId: "custom-kicks-ca63e",
  storageBucket: "custom-kicks-ca63e.firebasestorage.app",
  messagingSenderId: "555965914762",
  appId: "1:555965914762:web:7100e2a17a0d6834ba1773",
  measurementId: "G-9HEQX8N793",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

const FAQWithLeadForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Check if email already exists
      const q = query(collection(db, "newsletter"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        setError("This email is already subscribed.");
        return;
      }

      // Add email to the "newsletter" collection if not already subscribed
      await addDoc(collection(db, "newsletter"), { email, timestamp: new Date() });
      setIsSubmitted(true);
      setError(null); // Clear any errors

      // Reset form after a short delay
      setTimeout(() => {
        setEmail("");
        setIsSubmitted(false);
      }, 1500); 

    } catch (err) {
      console.error("Error adding email: ", err);
      setError("Failed to submit your email. Please try again.");
    }
  };

  return (
    <section id="faq" className="mt-20 px-5">
      <h2 className="text-3xl font-bold text-center mb-12 font-poppins">Frequently Asked Questions</h2>
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
        <details className="bg-gray-100 p-4 rounded-md">
          <summary className="cursor-pointer font-semibold">Can I return or exchange customized sneakers?</summary>
          <p className="mt-2 text-gray-600">Unfortunately, customized sneakers are non-returnable unless there is a manufacturing defect.</p>
        </details>
        <details className="bg-gray-100 p-4 rounded-md">
          <summary className="cursor-pointer font-semibold">Do you offer bulk orders for events or teams?</summary>
          <p className="mt-2 text-gray-600">Yes, we do! Please contact us for bulk order pricing and customization options.</p>
        </details>
      </div>

      <div className="bg-gray-50 mt-16">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Stay Updated with Our Sneaker News!</h2>
            <p className="hidden text-gray-500 sm:mt-4 sm:block">
              Subscribe to get exclusive discounts, early releases, and insights into the latest sneaker trends.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-xl">
            <form onSubmit={handleSubmit} className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <input
                  type="email"
                  id="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-md border-gray-200 bg-white p-3 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-gray-400"
                />
              </div>

              <button
                type="submit"
                className={`group mt-4 flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-gray-400 sm:mt-0 sm:w-auto ${isSubmitted ? "bg-green-600" : "bg-black"
                  }`}
              >
                <span className="text-sm font-medium">{isSubmitted ? "Thank You!" : "Sign Up"}</span>
              </button>
            </form>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQWithLeadForm;