import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { CgMenuRightAlt } from "react-icons/cg";

const menu = [
  {
    name: "Spotlight",
    link: "spotlight",
  },
  {
    name: "Blog",
    link: "blog",
  },
  {
    name: "Services",
    link: "services",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <nav className="px-8 md:px-12 lg:px-16 py-4 flex items-center justify-between fixed w-full backdrop-blur-lg top-0 z-10">
        <Link to="/" className="w-10 md:w-12 flex items-center">
          <img src={Logo} alt="Logo" className="w-full object-contain" />
          <div className="text-2xl md:text-3xl text3d text-theme font-bold">
            Lensnation
          </div>
        </Link>
        <div className="hidden sm:flex gap-4 font-medium">
          {menu.map((item, i) => (
            <NavLink
              to={item.link}
              className="hover:scale-95 transition-transform duration-200"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        <div
          onClick={() => setIsMenu((prev) => !prev)}
          className="text-2xl sm:hidden z-20"
        >
          <CgMenuRightAlt />
        </div>

        <div
          className={`absolute sm:hidden flex flex-col justify-center items-center gap-4 top-16 w-[90vw] overflow-hidden ${
            isMenu ? "max-h-40  py-24" : "max-h-0"
          } transition-all duration-500 bg-gray-500 z-20`}
        >
          {menu.map((item, i) => (
            <NavLink
              onClick={() => setIsMenu(false)}
              to={item.link}
              className="hover:scale-95 transition-transform duration-200 text-lg"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        {isMenu && (
          <div
            onClick={() => setIsMenu(false)}
            className="w-screen h-screen sm:hidden fixed top-0 left-0 z-10 bg-black/50"
          ></div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
