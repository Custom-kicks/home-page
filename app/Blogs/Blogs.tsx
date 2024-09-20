import React from 'react';

const Blogs = () => {
  return (
    <section id="blogs" className="py-24 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Blog</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 shadow-md rounded-lg">Blog Post 1</div>
        <div className="bg-gray-100 p-6 shadow-md rounded-lg">Blog Post 2</div>
        <div className="bg-gray-100 p-6 shadow-md rounded-lg">Blog Post 3</div>
      </div>
    </section>
  );
};

export default Blogs;