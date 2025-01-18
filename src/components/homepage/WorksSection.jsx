import React from "react";
import Hero2 from "../../assets/Hero2.jpeg";
import Hero from "../../assets/Hero.jpeg";

const images = [
  { image: Hero, title: "Title", year: "2024" },
  { image: Hero2, title: "Title", year: "2024" },
  { image: Hero, title: "Title", year: "2024" },
  { image: Hero2, title: "Title", year: "2024" },
  { image: Hero, title: "Title", year: "2024" },
  { image: Hero2, title: "Title", year: "2024" },
];

function WorksSection() {
  return (
    <div className="lg:flex-row mx-4 md:mx-8 lg:mx-10 my-16 sm:my-24 lg:my-40 space-y-4">
      <p className="text-graySecondary font-semibold">Works</p>
      <p className="text-2xl xs:text-2xl md:text-3xl xl:text-4xl font-semibold lg:w-2/3 xl:w-1/2">
        A collection of work that defines my approach to design and creativity.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {images.map((item, i) => (
          <div className="group relative h-[500px] md:h-[350px] lg:h-[400px] xl:h-[450px] overflow-hidden rounded-lg cursor-pointer">
            <img
              src={item.image}
              alt=""
              key={i}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black/50 transition-all duration-1000 opacity-0 group-hover:opacity-100"></div>
            <div className="absolute bottom-0 xl:-bottom-20 group-hover:bottom-0 xl:opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 p-2 font-semibold">
              <p className="text-2xl">{item.title}</p>
              <p className="text-base">{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorksSection;
