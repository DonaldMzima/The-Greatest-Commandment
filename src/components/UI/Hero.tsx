import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gray-200 text-gray-800 h-screen flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">The Greatest Commandment</h1>
        <p className="text-lg mb-8">
          Click on the button below to get the The Greatest Commandment data!
        </p>
        <a
          href="timeLineItem"
          className="bg-gray-800 text-white px-4 py-2 rounded"
        >
          Get Data
        </a>
      </div>
    </section>
  );
};

export default Hero;
