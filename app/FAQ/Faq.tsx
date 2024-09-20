import React from 'react';

const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-white px-5">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="max-w-4xl mx-auto space-y-4">
        <details className="bg-gray-100 p-4 rounded-md">
          <summary className="cursor-pointer font-semibold">How does the customization process work?</summary>
          <p className="mt-2 text-gray-600">You can select a sneaker of your favourite brand, customize it with colors, patterns, and more, then order it directly from our platform.</p>
        </details>
        <details className="bg-gray-100 p-4 rounded-md">
          <summary className="cursor-pointer font-semibold">How long does it take to receive my sneakers?</summary>
          <p className="mt-2 text-gray-600">Our designers work fast, and you should receive your custom sneakers within 2-3 weeks.</p>
        </details>
      </div>
    </section>
  );
};

export default FAQ;