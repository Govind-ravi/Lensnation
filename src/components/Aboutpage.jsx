import React from "react";
import Header from "../assets/Header.png";
import AwardsSection from "./homepage/AwardsSection";

const awards = [
  {
    title: "Honorable Mention",
    issuer: "DesignFlow Magazine",
    year: "2020",
  },
  {
    title: "Honorable Mention",
    issuer: "DesignFlow Magazine",
    year: "2020",
  },
  {
    title: "Honorable Mention",
    issuer: "DesignFlow Magazine",
    year: "2020",
  },
  {
    title: "Honorable Mention",
    issuer: "DesignFlow Magazine",
    year: "2020",
  },
];

function Aboutpage() {
  return (
    <div>
      {/* fixed image */}
      <div className="w-screen h-screen fixed top-0 left-0 -z-10">
        <img
          src={Header}
          alt=""
          className="w-full h-full object-cover object-top"
        />
      </div>
      <div className="px-4 md:px-8 lg:px-10 py-20 sm:py-24 lg:py-32 bg-body-bg">
        <h1 className="text-xl sm:text-2xl lg:text-5xl space-y-10 lg:w-2/3 xl:w-1/2 font-semibold">
          Hi, I’m Axel Morris—a passionate designer in creating visuals that
          feel fresh, meaningful, and uniquely personal.
        </h1>
      </div>
      <div className="h-screen"></div>
      <div className="flex flex-col gap-8 md:flex-row px-4 md:px-8 lg:px-10 py-16 sm:py-24 lg:py-40 bg-body-bg">
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
              with various media requirements like brand films, social media
              ads, educational videos, corporate videos, F & B videos,
              architectural content, product videos and much more along with
              still photos.
            </p>
            <p>
              Extensive knowledge and experience in managing green matte
              production studios. Active listening, attention to detail and
              practical thought process allows me to bring your creative
              vision into reality.
            </p>
          </p>
        </div>
      </div>
      <div className="bg-body-bg px-4 md:px-8 lg:px-10 ">
        <img src={Header} alt="" className="w-[400px] rounded-lg" />
      </div>
    </div>
  );
}

export default Aboutpage;
