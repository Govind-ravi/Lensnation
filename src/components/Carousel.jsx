import React, { useEffect, useRef, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Hero from "../assets/Hero.jpeg";
import Hero2 from "../assets/Hero2.jpeg";

const MAX_VISIBILITY =
  window.innerWidth < 768 ? (window.innerWidth < 480 ? 1 : 2) : 3;

const Slider = ({ children, startScroll }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);

  const intervalRef = useRef(null);

  useEffect(() => {
    if (startScroll) {
      const interval = setInterval(() => {
        setActive((prev) => (prev < count - 1 ? prev + 1 : 0));
      }, 2000);
      intervalRef.current = interval;
    } else {
      clearInterval(intervalRef.current);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [startScroll, count]);

  const handleButtonClick = (newActive) => {
    clearInterval(intervalRef.current);
    setActive(newActive);
  };

  return (
    <div className="carousel w-[95vw] text-black/80 xxs:w-[90vw] xs:w-[80vw] h-[25rem] md:w-[35rem] md:h-[25rem] xlmd:h-[30rem] xlmd:w-[40rem] lg:h-[35rem] lg:w-[45rem] xl:h-[35rem] xl:w-[50rem]">
      {active > 0 && (
        <button
          className="nav top-1/2 -translate-y-1/2 left-0 xs:left-auto xs:right-full text-7xl"
          onClick={() => handleButtonClick(active - 1)}
        >
          <IoIosArrowBack />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            "pointer-events": active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          className="nav top-1/2 -translate-y-1/2 right-0 xs:right-auto xs:left-full text-7xl"
          onClick={() => handleButtonClick(active + 1)}
        >
          <IoIosArrowForward />
        </button>
      )}
    </div>
  );
};

function Carousel() {
  const [startScroll, setStartScroll] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartScroll(true);
        } else {
          setStartScroll(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const Card = ({ image }) => (
    <div className="card">
      <img src={image} alt="" className="w-full h-full object-cover" />
    </div>
  );

  return (
    <div
      ref={sectionRef}
      className="flex items-center w-screen overflow-hidden justify-center xl:my-24"
    >
      <Slider startScroll={startScroll}>
        {[
          Hero,
          Hero2,
          Hero,
          Hero2,
          Hero,
          Hero2,
          Hero,
          Hero2,
          Hero,
          Hero2,
          Hero,
          Hero2,
        ].map((image, i) => (
          <Card key={i} image={image} />
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
