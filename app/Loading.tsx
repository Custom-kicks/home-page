import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <img
        src="/imgs/logo.jpeg"
        alt="Loading..."
        className="w-48 h-48 object-contain"
      />
    </div>
  );
};

export default Loading;