import React from "react";
import { MdEmail, MdLocationOn, MdCall } from "react-icons/md";

function Contact() {
  return (
    <div>
      <div className="mx-4 md:mx-8 lg:mx-10 my-16 sm:my-24 lg:my-40 space-y-8">
        <h1 className="text-7xl font-semibold text-graySecondary">Contact</h1>
        <h2 className="text-5xl w-1/2">
          Ready to work together or have something on your mind? Reach me out
          and let’s get started!
        </h2>
      </div>
      <div className="mx-4 md:mx-8 lg:mx-10 my-16 sm:my-24 lg:my-40 space-y-10">
        <div>
          <p className="text-graySecondary font-semibold">Phone Number</p>
          <div className="flex items-center gap-2 text-xl">
            <MdCall />
            <p></p>
          </div>
        </div>
        <div>
          <p className="text-graySecondary font-semibold">Email</p>
          <div className="flex items-center gap-2 text-xl">
            <MdEmail />
            <p>lensation.abhi@gmail.com</p>
          </div>
        </div>
        <div>
          <p className="text-graySecondary font-semibold">Location</p>
          <div className="flex items-center gap-2 text-xl">
            <MdLocationOn />
            <p>lensation.abhi@gmail.com</p>
          </div>
        </div>
        <div>
          <p className="text-graySecondary font-semibold">Email</p>
          <div className="flex items-center gap-2 text-xl">
            <MdEmail />
            <p>lensation.abhi@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
