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
    <div className="lg:flex-row mx-2 xs:mx-4 sm:mx-8 md:mx-12 lg:mx-16 my-16 sm:my-24 lg:my-40 space-y-4">
      <p>Clients & Partners</p>
      <p className="text-2xl xs:text-3xl sm:text-4xl font-semibold lg:w-2/3 xl:w-1/2">
        Over the years, I’ve had the opportunity of collaborating with some
        clients from big brands. Here are some of them.
      </p>
      {/* Logo */}
      <div className="flex gap-40 overflow-scroll">
        <Marquee velocity={50}>
          {logos.map((logo, i) => (
            <div key={i} className="bg-[#222222] rounded w-24 xs:w-32 sm:w-40 md:w-52 lg:w-60 xl:w-72 mx-4">
              <img src={logo} alt="" className="h-full w-full object-contain" />
            </div>
          ))}
        </Marquee>
      </div>
      <hr className="" />
    </div>
  );
}

export default ClientSection;
