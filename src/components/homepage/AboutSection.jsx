import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

const socials = [
  {
    symbol: <FaInstagram />,
    link: "",
  },
  {
    symbol: <FaLinkedinIn />,
    link: "",
  },
  {
    symbol: <FaXTwitter />,
    link: "",
  },
];

function AboutSection() {
  return (
    <div className="flex flex-col gap-8 md:flex-row mx-4 md:mx-8 lg:mx-10 my-16 sm:my-24 lg:my-40">
      <div className="md:w-[40%] text-graySecondary font-semibold">About</div>
      <div className="md:w-[60%] space-y-4 sm:space-y-6 font-semibold">
        {/* <p className="font-semibold uppercase text-3xl sm:text-4xl">Abhi Nandan</p> */}
        <p className="text-xl sm:text-2xl lg:text-4xl space-y-10">
          <p>
            Passion turned profession, empowered by technical education in
            commercial photography.
          </p>
          <p>
            DOP with a decade of experience in understanding visual
            communication and clients’ branding needs. Having vast experience
            with various media requirements like brand films, social media ads,
            educational videos, corporate videos, F & B videos, architectural
            content, product videos and much more along with still photos.
          </p>
          <p>
            Extensive knowledge and experience in managing green matte
            production studios. Active listening, attention to detail and
            practical thought process allows me to bring your creative
            vision into reality.
          </p>
        </p>
        <div className="flex gap-4">
          {socials.map((item, i) => (
            <NavLink to={item.link} key={i} className="text-3xl md:text-4xl">
              {item.symbol}
            </NavLink>
          ))}
        </div>
        <Link
        
          to="/about"
          className="text-base flex font-medium items-center gap-2 sm:gap-4 hover:underline"
        >
          More about me <FaArrowRightLong />
        </Link>
      </div>
    </div>
  );
}

export default AboutSection;
