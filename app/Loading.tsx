import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Loading = () => {
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Set a delay before fade-out starts
    const timer = setTimeout(() => {
      setIsFadingOut(true);
    }, 1500); // Adjust this delay as needed for your loading duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="/imgs/logo.png"
        alt="Loading..."
        className={`w-48 h-48 object-contain transition-transform duration-500 ${
          isFadingOut ? 'fadeOutLeft' : 'fadeInRight'
        }`}
        width={160}
        height={96}
      />
    </div>
  );
};

export default Loading;