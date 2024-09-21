import React from 'react';
import Image from "next/image";

const Brands = () => {
  const brandLogos = [
    {
      name: 'Fila',
      src: '/logos/fila.svg',
    },
    {
      name: 'Adidas',
      src: '/logos/adidas.svg',
    },
    {
      name: 'Nike',
      src: '/logos/nike.svg',
    },
    {
      name: 'Vans',
      src: '/logos/vans.svg',
    },
    {
      name: 'New Balance',
      src: '/logos/newbalance.svg',
    },
    {
      name: 'Converse',
      src: '/logos/converse.svg',
    },
    {
      name: 'Puma',
      src: '/logos/puma.svg',
    },
    {
      name: 'Reebok',
      src: '/logos/reebok.svg',
    },
  ];

  return (
    <section id="brands" className="py-24">
      <h2 className="text-3xl lg:text-7xl font-bold text-center mb-12 text-gray-400">Brands We Work With</h2>
      <div className="overflow-hidden">
        <div className="flex space-x-2 md:space-x-3 lg:space-x-5 animate-marquee whitespace-nowrap">
          {brandLogos.concat(brandLogos).map((brand, index) => (
            <div key={index} className="flex-shrink-0 w-40 py-5">
              <Image
                src={brand.src}
                alt={brand.name}
                width={140}
                height={50}
                className="object-contain grayscale hover:grayscale-0 transition duration-200"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;