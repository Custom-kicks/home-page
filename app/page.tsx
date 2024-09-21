"use client"
import React, { useState, useEffect } from 'react';
import Hero from './Hero/hero';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import NewDesigns from './Designs/NewDesigns';
import Blogs from './Blogs/Blogs';
import Brands from './Brands/Brands';
import FAQ from './FAQ/Faq';
import Contact from './Contact/Contact';
import Loading from './Loading'; 

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading time (e.g., 2 seconds)

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main className='font-poppins'>
      <Hero />
      <WhatWeDo />
      <NewDesigns />
      <Blogs />
      <Brands />
      <FAQ />
      <Contact />
    </main>
  );
};

export default HomePage;