import React from "react";
import AbhiNandan from "../assets/AbhiNandan.jpg";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ServicesSection from "./ServicesSection";
import Carousel from "./Carousel";
import Hero from "../assets/Hero.jpeg";
import Hero2 from "../assets/Hero2.jpeg";

const images = [Hero, Hero2, Hero, Hero2, Hero, Hero2];

function Homepage() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="absolute top-0 left-0 h-screen w-screen bg-black/50 -"></div>
        <div className="h-screen flex items-end justify-end">
          <h1 className="p-4 text-lg xxs:text-xl sm:text-2xl md:text-3xl font-semibold">
            Lensation Photography
          </h1>
        </div>
      </div>

      {/* Company */}
      <div className="w-[95%] sm:w-[90%] md:w-[80%] mx-auto my-4 sm:my-12 md:my-24">
        <div className="space-y-4 sm:space-y-8">
          <div>
            <h1 className="text-4xl md:text-5xl text-theme text3d font-medium font-inter-tight">
              About Lensation
            </h1>
            <p className="text-sm sm:text-base font-inter-tight">
              Welcome to Lensation Photography
            </p>
          </div>
          <p className="text-sm sm:text-base">
            At Lensation Photography, we specialize in Commercial Media
            Production, combining creativity and precision to help businesses
            and individuals stand out. As a trusted name in Marketing and
            Advertising, we create tailored media content that speaks directly
            to your audience. Our experienced team is dedicated to turning your
            ideas into stunning visuals that impress and inspire.
          </p>
          <p>
            At Lensation Photography, we pride ourselves on delivering tailored
            media solutions designed to help you promote yourself or your
            business effectively. Our knowledgeable team of professionals is
            dedicated to ensuring that your vision is brought to life with
            precision and flair.
          </p>
        </div>
      </div>
      <Carousel />

      {/* CEO */}
      <div className="min-h-screen w-[95%] md:w-[90%] lg:w-[80%] mx-auto my-12 sm:my-24 flex items-center justify-center">
        <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
          <div className="flex flex-col w-[90%] sm:w-[70%] justify-between gap-4 lg:gap-8">
            <div>
              <h1 className="text-4xl lg:text-5xl text-theme text3d font-medium font-inter-tight">
                Abhi Nandan
              </h1>
              <p className="text-sm md:text-base font-inter-tight">
                Founder, DOP
              </p>
            </div>
            <p>
              Abhi Nandan, a photographer and video editor by trade, is the
              Founder and CEO of{" "}
              <span className="text-theme font-medium">Lensnation</span>, a
              renowned creative agency specializing in visual storytelling. With
              a keen eye for detail and a passion for capturing captivating
              moments.
            </p>
            <p>
              Abhi has built a brand that delivers high-quality photography and
              videography services to a diverse range of clients. Through
              Lensnation, he continues to push the boundaries of creativity,
              blending technical expertise with artistic vision to craft
              compelling visuals that leave a lasting impact.
            </p>
            <div className="flex gap-4">
              <div className="p-2 text-xl border-2 border-gray-300 text-gray-300 rounded-full">
                <FaInstagram />
              </div>
              <div className="p-2 text-xl border-2 border-gray-300 text-gray-300 rounded-full">
                <FaLinkedinIn />
              </div>
              <div className="p-2 text-xl border-2 border-gray-300 text-gray-300 rounded-full">
                <FaXTwitter />
              </div>
            </div>
          </div>
          <div className="w-[95%] sm:w-[80%] md:w-[50%] h-[300px] sm:h-[400px]">
            <img
              src={AbhiNandan}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      {/* Gallery */}
      <div className="overflow-scroll flex items-center justify-center w-full">
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
      </div>
      {/* Teams */}
      <div className="min-h-[50vh] my-12 sm:my-24 flex flex-col justify-center w-[95%] md:w-[90%] lg:w-[80%] mx-auto gap-8">
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
      </div>
    </>
  );
}

export default Homepage;
