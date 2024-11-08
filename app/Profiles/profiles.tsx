import React from 'react';
import Image from 'next/image';

const designers = [
  {
    name: "Lara Soares",
    img: "/imgs/D1.png",
    testimony: "Lara brings the energy of Brazilian street art into each design. With over seven years of experience in custom sneaker design, she’s a master at transforming shoes into vibrant, expressive pieces. Her work often explores themes of urban culture and individuality, making each pair as unique as the person who wears them.",
  },
  {
    name: "Marcus Chen",
    img: "/imgs/D2.png",
    testimony: "With a keen eye for sleek, minimalist aesthetics, Marcus has a passion for combining comfort with cutting-edge design. His work showcases refined details, focusing on texture and subtle color contrasts to create timeless pieces. Marcus believes that less is more, aiming to design shoes that blend effortlessly with any style.",
  },
  {
    name: "Hana Kim",
    img: "/imgs/D3.png",
    testimony: "Hana is inspired by Seoul's fast-paced, tech-driven lifestyle and brings futuristic designs to life with innovative materials. Known for her work with eco-friendly and fabrics, Hana is committed to creating stylish, sustainable sneakers. Her designs merge fashion and functionality, always pushing the boundaries of traditional footwear.",
  },
];

const MeetOurDesigners = () => {
  return (
    <section id="meet-our-designers" className="px-4 md:px-8 lg:px-16 py-16 bg-gray-50 border-b">
      <h2 className="text-3xl lg:text-7xl font-bold text-center mb-12 text-gray-400 font-poppins">Meet Our Designers</h2>
      
      <div className="flex lg:justify-center lg:gap-16 gap-8 overflow-x-auto pb-4">
        {designers.map((designer, index) => (
          <div 
            key={index} 
            className="flex-shrink-0 flex flex-col items-center gap-4 bg-black rounded-md overflow-hidden"
            style={{
              width: '100%',
              maxWidth: '386px',
            }}
          >
            {/* Designer Image */}
            <div className="w-full h-auto">
              <Image
                src={designer.img}
                alt={designer.name}
                width={386}
                height={386}
                className="object-cover rounded-t-md w-full"
                sizes="(max-width: 768px) 150px, (max-width: 1024px) 250px, 386px"
              />
            </div>

            {/* Text Content */}
            <div className="bg-black text-white w-full p-4 pb-6"> {/* Added pb-10 for padding */}
              <h3 className="text-lg md:text-xl font-semibold mb-2">{designer.name}</h3>
              <p className="text-xs md:text-sm">{designer.testimony}</p> 

              {/* SVG Icon positioned below the text with margin */}
              <div className="mt-4 flex justify-end">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 69 68" fill="none">
                  <g filter="url(#filter0_d_2852_893)">
                    <circle cx="34.5" cy="30" r="30" fill="white"/>
                    <path d="M56.5607 31.0607C57.1464 30.4749 57.1464 29.5251 56.5607 28.9393L47.0147 19.3934C46.4289 18.8076 45.4792 18.8076 44.8934 19.3934C44.3076 19.9792 44.3076 20.9289 44.8934 21.5147L53.3787 30L44.8934 38.4853C44.3076 39.0711 44.3076 40.0208 44.8934 40.6066C45.4792 41.1924 46.4289 41.1924 47.0147 40.6066L56.5607 31.0607ZM12.5 31.5L55.5 31.5L55.5 28.5L12.5 28.5L12.5 31.5Z" fill="black"/>
                  </g>
                  <defs>
                    <filter id="filter0_d_2852_893" x="0.5" y="0" width="68" height="68" filterUnits="userSpaceOnUse" colorInterpolation-filters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="4"/>
                      <feGaussianBlur stdDeviation="2"/>
                      <feComposite in2="hardAlpha" operator="out"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2852_893"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2852_893" result="shape"/>
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MeetOurDesigners;