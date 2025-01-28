import React, { useEffect, useState } from "react";
import Header from "../assets/Header.png";
import Marquee from "react-marquee-slider";
import AboutSection from "./homepage/AboutSection";
import ClientSection from "./homepage/ClientSection";
import ServiceSection from "./homepage/ServiceSection";
import AwardsSection from "./homepage/AwardsSection";
import WorksSection from "./homepage/WorksSection";

function Homepage() {
  return (
    <>
      <div className="h-screen">
      </div>

      <AboutSection />
      <ClientSection />
      <ServiceSection />
      {/* <AwardsSection /> */}
      <WorksSection />

      {/* Gallery */}
      {/* <div className="overflow-scroll flex items-center justify-center w-full">
        <div className="flex gap-4 md:gap-8 w-full px-4 md:px-8 h-[350px] md:h-[400px] lg:h-[500px]">
          {images.map((image, i) => (
            <div
              key={i}
              className={`min-w-[350px] md:min-w-[400px] lg:min-w-[550px] h-[300px] md:h-[350px] lg:h-[450px] bg-gray-400 ${
                i % 2 === 0 ? "" : "translate-y-4"
              } overflow-hidden`}
            >
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 cursor-pointer transition-all duration-500"
              />
            </div>
          ))}
        </div>
      </div> */}
      {/* Teams */}
      {/* <div className="min-h-[50vh] my-12 sm:my-24 flex flex-col justify-center w-[95%] md:w-[90%] lg:w-[80%] mx-auto gap-8">
        <h1 className="text-4xl md:text-5xl text-theme text3d font-medium font-inter-tight">
          Wo we are
        </h1>
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-4 xs:gap-8 lg:gap-16">
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="overflow-hidden h-[250px] lg:h-[300px]">
                <img
                  src={AbhiNandan}
                  alt=""
                  className="w-full h-full object-cover grayscale hover:grayscale-0 hover:scale-105 cursor-pointer transition-all duration-500"
                />
              </div>
            ))}
        </div>
      </div> */}
    </>
  );
}

export default Homepage;
