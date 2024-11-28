"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCykxTuqKTpLFOecypJAM5d1OwjDxwjRIQ",
  authDomain: "custom-kicks-ca63e.firebaseapp.com",
  projectId: "custom-kicks-ca63e",
  storageBucket: "custom-kicks-ca63e.firebasestorage.app",
  messagingSenderId: "555965914762",
  appId: "1:555965914762:web:7100e2a17a0d6834ba1773",
  measurementId: "G-9HEQX8N793",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const LeadGenerationForm: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("+91 ");
  const [submitted, setSubmitted] = useState(false);
  const [alreadyIn, setAlreadyIn] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const formDisplayed = localStorage.getItem("formDisplayed");
    if (!formDisplayed) {
      const timer = setTimeout(() => {
        setShowForm(true);
        document.body.style.overflow = "hidden";
        localStorage.setItem("formDisplayed", "true");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const closeModal = () => {
    setShowForm(false);
    document.body.style.overflow = "auto";
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setAlreadyIn(false);

    try {
      // Check if the email already exists
      const emailQuery = query(collection(db, "leads"), where("email", "==", email));
      const emailSnapshot = await getDocs(emailQuery);

      if (!emailSnapshot.empty) {
        setAlreadyIn(true);
        return;
      }

      // Check if the phone number exists (only if provided)
      if (phone.trim() !== "+91 ") {
        const phoneQuery = query(collection(db, "leads"), where("phone", "==", phone));
        const phoneSnapshot = await getDocs(phoneQuery);

        if (!phoneSnapshot.empty) {
          setError("Phone number already used.");
          return;
        }
      }

      // Add data to Firestore
      await addDoc(collection(db, "leads"), {
        name,
        email,
        phone: phone.trim() !== "+91 " ? phone : "",
        timestamp: new Date(),
      });

      setSubmitted(true);
      setName("");
      setEmail("");
      setPhone("+91 ");

      setTimeout(() => {
        closeModal();
        setSubmitted(false);
      }, 1500);
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
                <span className="block">{alreadyIn ? "We’ve Got You Covered" : "Get Discount"}</span>
                {!alreadyIn && (
                  <span className="mt-1 text-sm block text-gray-600">
                    On your first order
                  </span>
                )}
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
                  className="w-full p-2 mb-4 border border-gray-300 rounded-md text-sm sm:text-base"
                />

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <button
                  type="submit"
                  className={`mt-6 inline-block w-full py-3 text-sm font-bold uppercase tracking-widest text-white rounded-md transition ${submitted
                      ? "bg-green-600"
                      : alreadyIn
                        ? "bg-yellow-600"
                        : "bg-black hover:bg-gray-800"
                    }`}
                >
                  {submitted
                    ? "Congrats You're in"
                    : alreadyIn
                      ? "You're Already In"
                      : "Join the Queue"}
                </button>
              </form>

              <p className="mt-6 text-xs font-medium uppercase text-gray-400">
                Offer valid for first 150 customers only *
              </p>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default LeadGenerationForm;