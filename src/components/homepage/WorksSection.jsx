import React from "react";
import Hero2 from "../../assets/Hero2.jpeg";
import Hero from "../../assets/Hero.jpeg";

const images = [Hero, Hero2, Hero, Hero2, Hero, Hero2];

function WorksSection() {
  return (
    <div className="lg:flex-row mx-2 xs:mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-16 sm:my-24 lg:my-40 space-y-4">
      <p>Works</p>
      <p className="text-2xl xs:text-3xl sm:text-4xl font-semibold lg:w-2/3 xl:w-1/2">
        A collection of work that defines my approach to design and creativity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {images.map((image, i) => (
          <div className="h-96 overflow-hidden rounded-lg">
            <img
              src={image}
              alt=""
              key={i}
              className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 transition-all duration-1000 ease-in-out"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorksSection;
