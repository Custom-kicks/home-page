import React from 'react';
import Hero from './Hero/hero';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import NewDesigns from './Designs/NewDesigns';
import Blogs from './Blogs/Blogs';
import Brands from './Brands/Brands';
import FAQ from './FAQ/Faq';
import Contact from './Contact/Contact';

const HomePage = () => {
  return (
    <main className='font-poppins'>
      <Hero />
      <WhatWeDo />
      <NewDesigns />
      <Blogs />
      <Brands />
      <FAQ />
      <Contact/>
    </main>
  );
}

export default HomePage;

