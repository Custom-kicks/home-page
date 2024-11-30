"use client";

import React, { useState, useEffect } from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/hero";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import NewDesigns from "./Designs/page";
// import Blogs from './Blogs/Blogs';
// import Brands from './Brands/Brands';
import FAQ from "./FAQ/Faq";
import Contact from "./Contact/page";
import Loading from "./Loading";
import Profiles from "./Profiles/profiles";
import LeadGenerationForm from "@/components/LeadGenerationForm";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Force light theme by adding a class to <html>
    document.documentElement.classList.add("theme-light");
    document.documentElement.style.fontSize = "16px"; // Lock font size to 16px

    // Remove loading screen after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <main className="font-work overflow-x-hidden">
        <LeadGenerationForm />
        <Hero />
        <WhatWeDo />
        <Profiles />
        <NewDesigns />
        {/* <Brands /> */}
        <FAQ />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;