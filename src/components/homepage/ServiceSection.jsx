import React from "react";
import Architecture from "../../assets/Architecture.png";
import Coorporate from "../../assets/Coorporate.png";
import Food from "../../assets/Food.png";
import Educational from "../../assets/Educational.png";
import Events from "../../assets/Events.png";

const services = [
  {
    title: "Architecture Photography & Videography",
    Image: Architecture,
    content:
      "Capture and highlight the intricate beauty of architectural designs with professional imagery.",
  },
  {
    title: "Corporate Videos",
    Image: Coorporate,
    content:
      "Create compelling videos that effectively showcase your brand’s mission and values.",
  },
  {
    title: "Food Photography & Videography",
    Image: Food,
    content:
      "Enhance the visual appeal of your dishes with vibrant, high-quality visuals.",
  },
  {
    title: "Educational Videos",
    Image: Educational,
    content:
      "Produce engaging content that simplifies complex concepts for effective learning.",
  },
  {
    title: "Architecture Photography & Videography",
    Image: Architecture,
    content:
      "Capture and highlight the intricate beauty of architectural designs with professional imagery.",
  },
  {
    title: "Corporate Events",
    Image: Events,
    content:
      "Document your corporate events with precision, capturing key moments and highlights.",
  },
];

function ServiceSection() {
  return (
    <div className="lg:flex-row mx-2 xs:mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-16 sm:my-24 lg:my-40 space-y-6">
      <p>My Services</p>
      <p className="text-2xl xs:text-3xl sm:text-4xl font-semibold lg:w-2/3 xl:w-1/2">
        Combining creativity, strategy, and technical expertise, these are the
        service I offer.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((service, i) => (
          <div
            key={i}
            className={`h-60 xs:h-80 sm:h-96 md:h-60 lg:h-80 xl:h-96 relative ${
              i === 1 || i === 2 || i === 5 ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            <p className="absolute text-lg lg:text-xl xl:text-3xl font-semibold z-10 top-0">
              {service.title}
            </p>
            <p className="absolute text-base xl:text-base z-10 bottom-0">
              {service.content}
            </p>
            <img
              src={service.Image}
              alt=""
              className="h-full w-full object-cover rounded-lg   opacity-60"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceSection;
