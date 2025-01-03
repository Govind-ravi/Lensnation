import React from "react";

const services = [
  {
    title: "Architecture",
    content:
      "Our architecture services blend innovation and sustainability, creating timeless designs for urban and rural spaces alike. From concept to execution, we shape environments tailored to your needs."
  },
  {
    title: "Corporate Videos",
    content:
      "We craft compelling corporate videos that tell your brand's story, engage your audience, and communicate your vision with clarity and creativity."
  },
  {
    title: "Food",
    content:
      "Our food video services capture the essence of flavors and visuals. Perfect for restaurants, chefs, and food brands aiming to tantalize taste buds and imaginations alike."
  },
  {
    title: "Educational",
    content:
      "Educational videos designed to inform, inspire, and educate audiences of all ages. We transform complex ideas into accessible and engaging visual experiences."
  },
  {
    title: "Corporate Events",
    content:
      "From conferences to celebrations, our event coverage services ensure every highlight is captured. Relive your moments with unparalleled quality and professionalism."
  }
];

export default function Services() {
  return (
    <div className="h-full flex flex-col items-center py-12 mt-8 w-[80%] mx-auto">
      {/* Headline */}
      <div className="w-full flex justify-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight whitespace-nowrap origin-bottom-left">
          Our Services
        </h1>
      </div>

      {/* Services Section */}
      <div
        className="w-full overflow-x-scroll grid grid-cols-3 gap-16 py-4"
        style={{ scrollBehavior: "smooth" }}
      >
        {services.map((service, index) => (
          <div
            key={index}
            className="space-y-4 transform hover:scale-[0.98] cursor-pointer transition-all duration-300 ease-out"
          >
            <div className="bg-gray-300 h-[200px] rounded-lg"></div>
            <h2 className="text-xl font-semibold mb-4">
              {service.title}
            </h2>
            <p className="text-sm leading-relaxed">
              {service.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
