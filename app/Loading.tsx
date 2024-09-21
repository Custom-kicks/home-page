import React from 'react';
import Image from 'next/image';
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Image
        src="/imgs/logo.jpeg"
        alt="Loading..."
        className="w-48 h-48 object-contain"
        width={160}
        height={96}
      />
    </div>
  );
};

export default Loading;