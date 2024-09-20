import React from 'react';
import Image from "next/legacy/image";

const Brands = () => {
  const brandLogos = [
    {
      name: 'Fila',
      src: 'https://cdn.shopify.com/s/files/1/0558/6413/1764/files/Rewrite_Fila_Logo_Design_History_Evolution_0_1024x1024.jpg?v=1694712230',
    },
    {
      name: 'Adidas',
      src: 'https://cdn.logojoy.com/wp-content/uploads/20231013154327/Adidas-logo-1991-1-600x319.png',
    },
    {
      name: 'Nike',
      src: 'https://thumbs.dreamstime.com/b/web-183282273.jpg',
    },
    {
      name: 'Vans',
      src: 'https://i.pinimg.com/originals/dc/03/89/dc03893a0baf50b2efbdede6350e4d67.jpg',
    },
    {
      name: 'New Balance',
      src: 'https://www.cdnlogo.com/logos/n/91/new-balance.svg',
    },
    {
      name: 'Converse',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR86iL46FLSAoQLdjoxXzT532id-JTXTo5RIw&s',
    },
    {
      name: 'Puma',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8O-Dp6PpVuzWlcf0WG4W_o57GtZEAaimDyg&s',
    },
    {
      name: 'Reebok',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6NpNt23kMoeJdmjZI1BwOfzERxCtpOzocgogAg51rnH3mvo7MX7Vl8Gfe8-D4_G33UAI&usqp=CAU',
    },
    {
      name: 'Doc Martens',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDzFSnElqknXn-KvYGIl5SbMz4HlW4R2SXKA&s',
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
                className="h-24 w-40 object-contain grayscale hover:grayscale-0 transition duration-200"
                layout='fill'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;