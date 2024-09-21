import React from 'react';
import Image from 'next/image';

const whatWeDoSections = [
  {
    title: "Sneaker Customization",
    description: `We offer an extensive range of sneaker customization options, empowering you to create a style that’s uniquely yours.
      Our cutting-edge AI technology precisely scans your feet, ensuring a flawless fit tailored to your exact dimensions.
      Say goodbye to the frustration of size mismatches between UK, IN, and our system eliminates all guesswork, delivering a sneaker that fits like it was custom-made for you.`,
    img: '/imgs/sneaker.jpg',
    alt: 'Sneaker Customization',
    linkText: 'Get Started',
    reverse: false,
  },
  {
    title: "In-house Designers",
    description: `Our elite, in-house designers are the true masterminds behind the world’s most iconic sneakers, drawing from years of experience with top-tier global brands.
      Their artistry in creating high-quality, authentic designs is second to none. They are deeply committed to turning your one-of-a-kind vision into reality. With their exceptional talent, your custom sneakers will be nothing short of a masterpiece—crafted with precision, style, and flair that truly embodies your unique personality and taste.`,
    img: '/imgs/designer.jpg',
    alt: 'In-house Designers',
    linkText: 'Explore',
    reverse: true,
  },
  {
    title: "Community Blogs",
    description: `We are fostering a dynamic and ever-growing sneaker community through our exclusive blog section.
      This isn’t just a blog—it’s the go-to destination for sneakerheads worldwide.
      Immerse yourself in the hottest trends, uncover the latest in cutting-edge sneaker design, and stay ahead of the curve with breaking news from the sneaker universe.`,
    img: '/imgs/online-blogs.jpg',
    alt: 'Blogs',
    linkText: 'See All',
    reverse: false,
  },
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="p-8 lg:p-24 bg-white">
      <h2 className="text-3xl lg:text-7xl font-bold text-center mb-12 text-gray-400">What We Offer</h2>

      {/* Dynamically render each section */}
      {whatWeDoSections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center mb-10 lg:mx-8 gap-5`}
        >
          <div className="w-full lg:w-1/2 relative h-96">
            <Image
              alt={section.alt}
              src={section.img}
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 my-3">{section.title}</h3>
              <p className="text-gray-500 mb-4 text-sm md:text-xs lg:text-base">
                {section.description}
              </p>
              <div className="flex justify-end mt-3 lg:mt-5">
                <a href="#" className="bg-gray-900 text-white px-6 py-3 rounded-md flickering hover:bg-gray-700">
                  {section.linkText}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WhatWeDo;