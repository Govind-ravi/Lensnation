import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-black/50 h-[50vh] p-16 flex justify-between">
      <div className="w-1/4">
        <h1 className="text-4xl font-medium">Lensation</h1>
        <p className="text-sm font-light">
          Lensation Photography is dedicated to help you promote yourselves or
          your businesses, by creating the right media content tailored for you.
          Impressing your clients is our goal. Our enthusiasm, knowledge and
          skills make us one of the best. We're excited to take you up on your
          challenges, and make your good work look great!{" "}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Link className="hover:underline">Spotlight</Link>
        <Link className="hover:underline">Blog</Link>
        <Link className="hover:underline">Services</Link>
        <Link className="hover:underline">Terms and Condition</Link>
        <Link className="hover:underline">FAQs</Link>
      </div>
      <div className="flex flex-col gap-4">
        <Link className="hover:underline font-medium">Contact Us</Link>
        <Link className="hover:underline">LinkdedIn</Link>
        <Link className="hover:underline">Instagram</Link>
        <Link className="hover:underline">Facebook</Link>
        <Link className="hover:underline">Just Dial</Link>
      </div>
      <div className="flex flex-col gap-4">
        <Link className="hover:underline">YouTube</Link>
        <Link className="hover:underline">+91-9880540700</Link>
        <Link className="hover:underline">lensation.abhi@gmail.com</Link>
        <Link className="hover:underline">#974, 2E cross, 4B main, 3rd stage, 3rd block,<br /> Basaveshwara Nagar, Bengaluru 560079</Link>
      </div>
    </footer>
  );
}

export default Footer;
