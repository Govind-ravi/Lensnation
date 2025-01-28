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
    title: "Products",
    Image: Food,
    content:
      "Enhance the visual appeal of your dishes with vibrant, high-quality visuals.",
  },
  {
    title: "Cinematic Posters",
    Image: Educational,
    content:
      "Produce engaging content that simplifies complex concepts for effective learning.",
  },
];

function ServiceSection() {
  return (
    <div className="lg:flex-row mx-4 md:mx-8 lg:mx-10 my-16 sm:my-24 lg:my-40 space-y-6">
      <p className="text-graySecondary font-semibold">My Services</p>
      <p className="text-2xl xs:text-2xl md:text-3xl xl:text-4xl font-semibold lg:w-2/3 xl:w-1/2">
        Combining creativity, strategy, and technical expertise, these are the
        service I offer.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {services.map((service, i) => (
          <div
            key={i}
            className={`h-[300px] xs:h-[350px] sm:h-[450px] md:h-60 lg:h-80 xl:h-[500px] relative ${
              i === 1 || i === 2 || i === 5 ? "md:col-span-2" : "md:col-span-1"
            }`}
          >
            <p className="absolute text-lg lg:text-xl xl:text-3xl font-semibold z-10 top-0 p-2">
              {service.title}
            </p>
            <p className="absolute z-10 bottom-0 p-2 md:font-semibold">
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
