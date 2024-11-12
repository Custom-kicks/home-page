"use client";
import React, { useState, useEffect } from 'react';
import Navbar from './Navbar/Navbar'; // Import Navbar here instead
import Hero from './Hero/hero';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import NewDesigns from './Designs/NewDesigns';
// import Blogs from './Blogs/Blogs';
import Brands from './Brands/Brands';
import FAQ from './FAQ/Faq';
import Contact from './Contact/Contact';
import Loading from './Loading';
import Profiles from './Profiles/profiles';
import LeadGenerationForm from '@/components/LeadGenerationForm';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />; 
  }

  return (
    <>
      <Navbar />
      <main className="font-work">
        <LeadGenerationForm />
        <Hero />
        <WhatWeDo />
        <Profiles />
        <NewDesigns />
        <Brands />
        <FAQ />
        <Contact />
      </main>
    </>
  );
};

export default HomePage;