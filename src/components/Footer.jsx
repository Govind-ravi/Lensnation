import React from "react";
import { Link } from "react-router-dom";
import WhiteIcon from "../assets/LensationMediaLogoversions/White_Logo.png";

function Footer() {
  return (
    <footer className="mx-6 sm:mx-8 lg:mx-10 mt-16 sm:mt-24 lg:mt-40  gap-8 lg:gap-16">
      {/* <hr className="h-2" /> */}
      <div className="relative flex flex-col xl:flex-row xl:items-end justify-between gap-16">
        <div className="flex flex-col gap-16 xs:gap-32 lg:gap-40">
          <div className="">
            <img src={WhiteIcon} alt="" className="w-40 md:w-52 lg:w-64" />
          </div>
          <div className="space-y-4">
            <p className="font-semibold text-graySecondary">
              Have a project in mind?
            </p>
            <div className="text-3xl lg:text-4xl font-semibold">
              <Link to="/contact">Let's Collaborate</Link>
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-6 xs:gap-24">
          {/* Navigate */}
          <div className="flex flex-col gap-4 text-2xl sm:text-3xl lg:text-4xl font-semibold">
            <p className="font-semibold text-graySecondary text-base">
              Navigate
            </p>
            <Link className="hover:underline">Home</Link>
            <Link className="hover:underline">About</Link>
            <Link className="hover:underline">Work</Link>
            <Link className="hover:underline">Contact</Link>
          </div>
          <div className="flex flex-col gap-4 text-2xl sm:text-3xl lg:text-4xl font-semibold">
            <p className="font-semibold text-graySecondary text-base">
              Follow me
            </p>
            <Link className="hover:underline">Instagram</Link>
            <Link className="hover:underline">Twitter</Link>
            <Link className="hover:underline">LinkedIn</Link>
            <Link className="hover:underline">YouTube</Link>
          </div>
        </div>
      </div>
      <hr className="mt-10" />
      <div className="my-6 text-center xl:text-start text-sm xs:text-base">
        <p>+91-9880540700 | lensation.abhi@gmail.com</p>
        <p>
          #974, 2E cross, 4B main, 3rd stage, 3rd block, Basaveshwara Nagar,
          Bengaluru 560079
        </p>
      </div>
    </footer>
  );
}

export default Footer;
