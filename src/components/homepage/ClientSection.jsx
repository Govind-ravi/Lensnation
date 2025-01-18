import React from "react";
import ClientLogo from "../../assets/ClientLogo.png";
import Marquee from "react-marquee-slider";

const logos = [
  ClientLogo,
  ClientLogo,
  ClientLogo,
  ClientLogo,
  ClientLogo,
  ClientLogo,
];

function ClientSection() {
  return (
    <div className="lg:flex-row mx-4 md:mx-8 lg:mx-10 sm:my-24 lg:my-40 space-y-4 border-b-[1px] pb-8 lg:pb-12">
      <p className="text-graySecondary font-semibold">Clients & Partners</p>
      <p data-aos="fade-up" className="text-2xl xs:text-2xl md:text-3xl xl:text-4xl font-semibold lg:w-2/3 xl:w-1/2 pb-6">
        Over the years, I’ve had the opportunity of collaborating with some
        clients from big brands. Here are some of them.
      </p>
      {/* Logo */}
      <div data-aos="fade-up" className="grid grid-cols-3 md:grid-cols-6 gap-2 xl:gap-4 overflow-scroll">
          {logos.map((logo, i) => (
            <div key={i} className="bg-[#3b3b3b] rounded">
              <img src={logo} alt="" className="h-full w-full object-contain" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ClientSection;
