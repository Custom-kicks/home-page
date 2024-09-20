import React from 'react';
import Image from 'next/image';

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="p-8 lg:p-24 bg-white">
      <h2 className="text-3xl lg:text-7xl font-bold text-center mb-12 text-gray-400">What We Offer</h2>

      {/* Sneaker Customization Section */}
      <div className="flex flex-col lg:flex-row items-center mb-10 lg:mx-8 gap-3">
        <div className="w-full lg:w-1/2 relative h-96">
          <Image
            alt="Sneaker Customization"
            src="/imgs/sneaker.jpg" // Using the path for the sneaker image
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-5 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 my-3">Sneaker Customization</h3>
            <p className="text-gray-500 my-5 text-sm md:text-xs lg:text-base">
              We offer an extensive range of sneaker customization options, empowering you to create a style that’s uniquely yours.
              Our cutting-edge AI technology precisely scans your feet, ensuring a flawless fit tailored to your exact dimensions.
              Say goodbye to the frustration of size mismatches between UK, IN, and our system eliminates all guesswork, delivering a sneaker that fits like it was custom-made for you.
            </p>
            <div className='flex justify-end mt-3 lg:mt-5'>
              <a href="#" className="bg-gray-900 text-white px-6 py-3 mt-5 lg:mt-10 rounded-md flickering hover:bg-gray-700">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* In-house Designers Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center mb-10 lg:mx-8 gap-5">
        <div className="w-full lg:w-1/2 relative h-96">
          <Image
            alt="In-house Designers"
            src="/imgs/designer.jpg" // Using the path for the designer image
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-5 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 my-3">In-house Designers</h3>
            <p className="text-gray-500 mb-4 text-sm md:text-xs lg:text-base">
              Our elite, in-house designers are the true masterminds behind the world’s most iconic sneakers, drawing from years of experience with top-tier global brands.
              Their artistry in creating high-quality, authentic designs is second to none. They are deeply committed to turning your one-of-a-kind vision into reality. With their exceptional talent, your custom sneakers will be nothing short of a masterpiece—crafted with precision, style, and flair that truly embodies your unique personality and taste.
            </p>
            <div className="flex justify-end mt-3 lg:mt-5">
              <a href="#" className="bg-gray-900 text-white px-6 py-3 rounded-md flickering hover:bg-gray-700">
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Blogs Section */}
      <div className="flex flex-col lg:flex-row items-center mb-10 lg:mx-8 gap-5">
        <div className="w-full lg:w-1/2 relative h-96">
          <Image
            alt="Blogs"
            src="/imgs/online-blogs.jpg" // Using the path for the blogs image
            layout="fill"
            objectFit="cover"
            className="rounded-md"
          />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-5 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 my-3">Community Blogs</h3>
            <p className="text-gray-500 mb-4 text-sm md:text-xs lg:text-base">
              We are fostering a dynamic and ever-growing sneaker community through our exclusive blog section.
              This isn’t just a blog—it’s the go-to destination for sneakerheads worldwide.
              Immerse yourself in the hottest trends, uncover the latest in cutting-edge sneaker design, and stay ahead of the curve with breaking news from the sneaker universe. Whether you’re a seasoned sneaker enthusiast looking to share your expertise or a newcomer eager to learn and connect with like-minded individuals, our blog is the heartbeat of the sneaker culture, where passion and innovation meet.
            </p>
            <div className="flex justify-end mt-3 lg:mt-5">
              <a href="#" className="bg-gray-900 text-white px-6 py-3 rounded-md flickering hover:bg-gray-700">
                See All
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;