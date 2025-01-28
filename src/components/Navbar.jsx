import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import WhiteIcon from "../assets/LensationMediaLogoversions/White_Icon.png";

const menu = [
  {
    name: "About",
    link: "about",
  },
  {
    name: "Gallery",
    link: "gallery",
  },
  {
    name: "Contact",
    link: "contact",
  },
];

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`px-8 md:px-12 lg:px-10 py-6 flex items-center justify-between fixed w-full top-0 z-[100] ${
          isScrolled ? "bg-[#212121]" : "backdrop-blur-0"
        } ${isMenu ? "bg-black/90" : ""} transition-all duration-500`}
      >
        <Link to="/" className="w-12 md:w-16 flex items-center">
          <img src={WhiteIcon} alt="Logo" className="w-full object-contain" />
        </Link>
        <div className="hidden sm:flex gap-8 font-medium text-xl">
          {menu.map((item, i) => (
            <NavLink
              key={i}
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
          {/* <CgMenuRightAlt /> */}
          <div className="relative w-8">
            <div
              className={`absolute left-0 w-6 h-[3px] bg-white ${
                isMenu ? "rotate-45" : "rotate-0"
              } transition-all duration-500`}
            ></div>
            <div
              className={`absolute left-0 w-6 h-[3px] bg-white ${
                isMenu ? "-rotate-45" : "rotate-0 top-2"
              } transition-all duration-500`}
            ></div>
          </div>
        </div>

        {/* small screen first approach */}
        <div
          className={`absolute left-0 sm:hidden flex flex-col justify-center gap-6 top-[4.5rem] h-screen w-full overflow-hidden ${
            isMenu ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } transition-all duration-500 z-30 bg-black/90 p-4`}
        >
          {menu.map((item, i) => (
            <NavLink
              key={i}
              onClick={() => setIsMenu(false)}
              to={item.link}
              className="hover:scale-95 transition-transform duration-200 text-5xl font-semibold"
            >
              {item.name}
            </NavLink>
          ))}
        </div>
        {/* {isMenu && <div className="fixed h-screen w-screen top-0 left-0 z-20"></div>} */}
      </nav>
    </>
  );
}

export default Navbar;
