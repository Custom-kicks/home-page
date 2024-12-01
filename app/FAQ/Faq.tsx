"use client";

import React, { useState } from "react";
import { initializeApp, getApps } from "firebase/app";
import { ChevronDown } from 'lucide-react';
import { addDoc, collection, getFirestore, query, where, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCykxTuqKTpLFOecypJAM5d1OwjDxwjRIQ",
  authDomain: "custom-kicks-ca63e.firebaseapp.com",
  projectId: "custom-kicks-ca63e",
  storageBucket: "custom-kicks-ca63e.appspot.com",
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
  const [loading, setLoading] = useState(false);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const trimmedEmail = email.trim();
    if (!isValidEmail(trimmedEmail)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      // Check if email already exists in the database
      const emailExists = await emailAlreadyExists(trimmedEmail);

      if (emailExists) {
        setError("This email is already subscribed.");
        setLoading(false);
        return;
      }

      // Add the email to the "newsletter" collection
      await addDoc(collection(db, "newsletter"), { email: trimmedEmail, timestamp: new Date() });

      setIsSubmitted(true);
      setEmail("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 1500);
    } catch (err) {
      console.error("Error adding email: ", err);
      setError("Failed to submit your email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const emailAlreadyExists = async (email: string): Promise<boolean> => {
    const q = query(collection(db, "newsletter"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  };

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I customize my sneakers with Custom Kicks?",
      answer:
        "With Custom Kicks, you can unleash your creativity using our intuitive online design tool. Choose from a wide range of styles, colors, patterns, and materials to craft a sneaker that truly represents your personality. Don’t have a design in mind? Our in-house expert designers can bring your ideas to life!",
    },
    {
      question: "Do you ship all over India?",
      answer:
        "Absolutely! We offer nationwide shipping across India, ensuring your custom sneakers reach you wherever you are. Plus, we take extra care to package your unique creation securely for a flawless delivery experience.",
    },
    {
      question: "What will be the price of a customized sneaker?",
      answer:
        "The cost of a customized sneaker depends on the design complexity and materials you choose. Our pricing is transparent, and you'll see the estimated cost and timeline as you design. We aim to offer premium-quality custom sneakers at competitive prices, making your dream design accessible.",
    },
    {
      question: "Why choose Custom Kicks for sneaker customization?",
      answer:
        "Custom Kicks stands out with its easy-to-use design tool, AI-powered size recommendations, and a team of skilled designers dedicated to delivering top-notch results. Whether you want a bold statement piece or a sleek minimalist design, we've got you covered!",
    },
  ];

  return (
    <section id="faq" className="mt-20">
      <h2 className="text-3xl font-bold text-center mb-12 font-poppins">Frequently Asked Questions</h2>
      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto mb-12 px-7">
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <h3
                className="text-md lg:text-lg font-semibold text-gray-800 cursor-pointer flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className={`transform transition-transform ${activeIndex === index ? "rotate-180" : ""}`}>
                  <ChevronDown className="w-5 h-5"/>
                </span>
              </h3>
              {activeIndex === index && (
                <p className="text-gray-600 mt-2 transition-opacity text-sm lg:text-base">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      {/* Newsletter Form */}
      <div className="bg-gray-50 mt-16">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">Stay Updated with Our Sneaker News!</h2>
            <p className="text-gray-500 text-xs md:text-sm lg:text-lg mt-2 lg:mt-4 sm:block">
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
                  aria-invalid={!!error}
                  aria-describedby="email-error"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`group mt-4 flex w-full items-center justify-center gap-2 rounded-md px-5 py-3 text-white transition focus:outline-none focus:ring focus:ring-gray-400 sm:mt-0 sm:w-auto ${isSubmitted ? "bg-green-600" : "bg-black"
                  }`}
              >
                <span className="text-sm font-medium">{isSubmitted ? "Thank You!" : loading ? "Submitting..." : "Sign Up"}</span>
              </button>
            </form>
            {error && <p id="email-error" className="text-red-500 mt-2">{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQWithLeadForm;
