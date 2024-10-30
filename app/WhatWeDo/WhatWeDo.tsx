import React from 'react';
import Image from 'next/image';

const whatWeDoSections = [
  {
    title: "One Stop Customization",
    tagline: "Design Custom Sneakers with Ease, Exclusively on Custom Kicks.",
    description: `Design and personalize your sneakers with ease, selecting colors, patterns, and unique features to craft a pair of shoes that truly reflect your style. Whether it's subtle tweaks or bold redesigns, our platform offers endless possibilities for creating your dream sneakers from scratch.`,
    img: '/imgs/S1.png',
    alt: 'Sneaker Customization',
    linkText: 'Customize',
    reverse: true,
  },
  {
    title: "Collab With Designers",
    tagline: "Bring Your Vision to Life on Custom Kicks with our In-house designers",
    description: `Work hand-in-hand with our professional in-house designers to create custom sneakers that are truly one-of-a-kind. Whether you need guidance or want expert input on your ideas, our designers are here to help transform your creative concepts into wearable art.`,
    img: '/imgs/S2.png',
    alt: 'In-house Designers',
    linkText: 'Contact us',
    reverse: false,
  },
  {
    title: "Stay in the Loop",
    tagline: "Discover the Latest Sneaker Trends and Design Tips on Custom Kicks",
    description: `Our blog keeps you updated with everything you need to know about the sneaker world—from the latest design trends to insider tips on customizing your kicks. Get inspired by industry news, style guides, and expert advice to fuel your creativity and help you craft the perfect pair of custom sneakers.`,
    img: '/imgs/S3.png',
    alt: 'Blogs',
    linkText: 'Check out',
    reverse: true,
  },
];

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="px-3 md:px-8 lg:px-24 py-8 lg:py-24 bg-white">
      <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-center mb-16 text-gray-400">Our Services</h2>

      {whatWeDoSections.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-center mb-16 gap-8 lg:gap-12`}
        >
          <div className="w-full lg:w-1/2 relative flex justify-center max-w-[350px] md:max-w-[450px] lg:max-w-[532px] h-[250px] md:h-[350px] lg:h-[441px]">
            <Image
              alt={section.alt}
              src={section.img}
              layout="responsive"
              width={532}
              height={441}
              className="rounded-md object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center px-6 gap-2 md:gap-4 lg:gap-5">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium italic text-gray-900 my-1">{section.title}</h3>
            <p className="text-gray-700 text-normal md:text-lg lg:text-xl mb-2">{section.tagline}</p>
            <p className="text-gray-400 text-xs md:text-base lg:text-normal mb-4 lg:mb-6">{section.description}</p>
            <a href="#" className="bg-gray-900 text-white px-4 py-3 rounded-md text-base font-semibold hover:bg-gray-700 shadow-md">
              {section.linkText}
            </a>
          </div>
        </div>
      ))}
    </section>
  );
};

export default WhatWeDo;
