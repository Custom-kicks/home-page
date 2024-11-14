"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCykxTuqKTpLFOecypJAM5d1OwjDxwjRIQ",
  authDomain: "custom-kicks-ca63e.firebaseapp.com",
  projectId: "custom-kicks-ca63e",
  storageBucket: "custom-kicks-ca63e.firebasestorage.app",
  messagingSenderId: "555965914762",
  appId: "1:555965914762:web:7100e2a17a0d6834ba1773",
  measurementId: "G-9HEQX8N793"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const LeadGenerationForm: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91 ");
  const [submitted, setSubmitted] = useState(false);

  // Display the form after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
      document.body.style.overflow = "hidden";
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShowForm(false);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    try {
      // Add data to Firestore
      await addDoc(collection(db, "leads"), {
        name,
        email,
        phone,
        timestamp: new Date()
      });
      setSubmitted(true);

      
      setName("");
      setEmail("");
      setPhone("+91 ");

      // Reset fields after a short delay (if needed)
      setTimeout(() => {
        closeModal();
        setSubmitted(false);
      }, 2000);

    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 font-work">
          <section className="relative overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 bg-white max-w-md w-full sm:max-w-md md:max-w-2xl lg:max-w-3xl">
            <div className="h-32 w-full md:h-full relative">
              <Image alt="Sneaker offer" src="/imgs/kicks.jpeg" fill className="object-cover" />
            </div>

            <div className="relative p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
              <button onClick={closeModal} className="absolute top-4 right-4 text-2xl font-semibold text-gray-500 hover:text-gray-700 transition-colors">
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

              <form onSubmit={handleSubmit} className="mt-6">
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
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md text-sm sm:text-base"
                />

                <button
                  type="submit"
                  className={`mt-6 inline-block w-full bg-black py-3 text-sm font-bold uppercase tracking-widest text-white rounded-md transition ${
                    submitted ? "bg-green-600" : "hover:bg-gray-800"
                  }`}
                >
                  {submitted ? (
                    <span className="flex items-center justify-center space-x-2">
                      <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Congrats You&apos;re in</span>
                    </span>
                  ) : (
                    "Get Discount"
                  )}
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