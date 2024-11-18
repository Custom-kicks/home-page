import React from 'react';
import Image from 'next/image'; 

const Blogs = () => {
  return (
    <section id="blogs" className="py-24 bg-white px-5">
      <h2 className="text-3xl lg:text-7xl font-bold text-center mb-12 text-gray-400 font-poppins">Our Blogs</h2>

      {/* Responsive Image Section */}
      <div className="flex justify-center mb-12">
        <div className="relative w-full max-w-6xl">
          <Image
            src="/imgs/Blog_section.png"
            alt="Blog Section"
            width={1000} 
            height={600} 
            layout="responsive" 
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Blogs;