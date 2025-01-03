import React, { useEffect, useRef, useState } from "react";
import Sp1 from "../assets/Sp1.jpeg";
import Sp2 from "../assets/Sp2.jpeg";
import Sp3 from "../assets/Sp3.jpeg";
import Sp4 from "../assets/Sp4.jpeg";
import Sp5 from "../assets/Sp5.jpeg";
import Sp6 from "../assets/Sp6.jpeg";
import Sp7 from "../assets/Sp7.jpeg";
import Sp8 from "../assets/Sp8.jpeg";
import { Link, useLocation, useNavigate } from "react-router-dom";

const images = [
  { image: Sp1, name: "", category: "Architecture" },
  { image: Sp2, name: "", category: "Architecture" },
  { image: Sp3, name: "", category: "Architecture" },
  { image: Sp4, name: "", category: "Architecture" },
  { image: Sp5, name: "", category: "Architecture" },
  { image: Sp6, name: "", category: "Architecture" },
  { image: Sp7, name: "", category: "Architecture" },
  { image: Sp8, name: "", category: "Food" },
  { image: Sp1, name: "", category: "Food" },
  { image: Sp2, name: "", category: "Food" },
  { image: Sp3, name: "", category: "Food" },
  { image: Sp4, name: "", category: "Food" },
  { image: Sp5, name: "", category: "Food" },
  { image: Sp6, name: "", category: "Food" },
  { image: Sp7, name: "", category: "Food" },
  { image: Sp8, name: "", category: "Corporate Videos" },
  { image: Sp1, name: "", category: "Corporate Videos" },
  { image: Sp2, name: "", category: "Corporate Videos" },
  { image: Sp3, name: "", category: "Corporate Videos" },
  { image: Sp4, name: "", category: "Corporate Videos" },
  { image: Sp5, name: "", category: "Corporate Videos" },
  { image: Sp6, name: "", category: "Corporate Videos" },
  { image: Sp7, name: "", category: "Corporate Videos" },
  { image: Sp8, name: "", category: "Corporate Videos" },
  { image: Sp1, name: "", category: "Corporate Videos" },
  { image: Sp2, name: "", category: "Corporate Events" },
  { image: Sp3, name: "", category: "Corporate Events" },
  { image: Sp4, name: "", category: "Corporate Events" },
  { image: Sp5, name: "", category: "Corporate Events" },
  { image: Sp6, name: "", category: "Corporate Events" },
  { image: Sp7, name: "", category: "Corporate Events" },
  { image: Sp8, name: "", category: "Corporate Events" },
  { image: Sp1, name: "", category: "Educational" },
  { image: Sp2, name: "", category: "Educational" },
  { image: Sp3, name: "", category: "Educational" },
  { image: Sp4, name: "", category: "Educational" },
  { image: Sp5, name: "", category: "Educational" },
  { image: Sp6, name: "", category: "Educational" },
  { image: Sp7, name: "", category: "Educational" },
  { image: Sp8, name: "", category: "Educational" },
];

const categories = [
  "All",
  "Architecture",
  "Corporate Videos",
  "Food",
  "Educational",
  "Corporate Events",
];

function Spotlight() {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [zoomStyles, setZoomStyles] = useState({});
  const [columnSpeeds, setColumnSpeeds] = useState([1, 2, 1]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Filters
  const [isFilter, setIsFilter] = useState(false);
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);
  const [category, setCategory] = useState("All");
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(() => {
    if (category === "All") {
      setFilteredImages(images); // Show all images if category is "all"
    } else {
      setFilteredImages(images.filter((image) => image.category === category));
    }
  }, [category]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [category]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 992) {
      setColumnSpeeds([1, 2]);
    } else {
      setColumnSpeeds([1, 2, 1, 2]);
    }
    return () => {};
  }, [windowWidth]);

  // Auto-scroll functionality
  useEffect(() => {
    let startInterval;
    startInterval = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 2000);

    return () => {
      clearInterval(startInterval);
    };
  }, []);
  const autoScrollSpeed = 0.85;

  useEffect(() => {
    let autoScrollInterval;

    if (isAutoScrolling) {
      autoScrollInterval = setInterval(() => {
        if (containerRef.current) {
          containerRef.current.scrollTop += autoScrollSpeed;
        }
      }, 30);
    }

    return () => {
      if (autoScrollInterval) {
        clearInterval(autoScrollInterval);
      }
    };
  }, [isAutoScrolling]);

  // Update scrollOffset when the parent container is scrolled
  const handleScroll = () => {
    if (containerRef.current) {
      setScrollOffset(containerRef.current.scrollTop);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const parentHeight = window.innerHeight * (windowWidth < 992 ? 2 : 4);

  const handleImageClick = (image, name) => {
    setIsAutoScrolling(false);
    navigate(`/spotlight/${name}`);

    // Initial styles for opening animation
    const initialStyles = {
      position: "fixed",
      top: "50%",
      left: "50%",
      width: "0px",
      height: "0px",
      transform: "translate(-50%, -50%)",
      transition: "all 0.5s ease-in-out",
      zIndex: 50,
    };

    setZoomStyles(initialStyles);
    setZoomedImage(image);

    setTimeout(() => {
      setZoomStyles((prev) => ({
        ...prev,
        top: "50%",
        left: "50%",
        width: "80vw",
        height: "95vh",
        transform: "translate(-50%, -50%)",
      }));
    }, 0);
  };

  const closeZoom = () => {
    navigate("/spotlight");
    setZoomStyles((prev) => ({
      ...prev,
      top: "50%",
      left: "50%",
      width: "0px",
      height: "0px",
      transform: "translate(-50%, -50%)",
      transition: "all 0.5s ease-in-out",
    }));

    setTimeout(() => {
      setZoomedImage(null);
      setZoomStyles({});
      setIsAutoScrolling(true);
    }, 0);
  };

  // Check URL path for zoomed image
  useEffect(() => {
    const pathSegments = location.pathname.split("/");
    const imageName = pathSegments[pathSegments.length - 1];

    if (imageName) {
      const imageData = images.find((img) => img.name === imageName);
      if (imageData) {
        setZoomedImage(imageData.image);
        const initialStyles = {
          position: "fixed",
          top: "50%",
          left: "50%",
          width: "0px",
          height: "0px",
          transform: "translate(-50%, -50%)",
          transition: "all 0.5s ease-in-out",
          zIndex: 50,
        };
        setZoomStyles(initialStyles);

        setTimeout(() => {
          setZoomStyles((prev) => ({
            ...prev,
            top: "50%",
            left: "50%",
            width: "80vw",
            height: "auto",
            transform: "translate(-50%, -50%)",
          }));
        }, 0);
      }
    }
  }, [location.pathname]);

  return (
    <>
      {/* Home */}
      <Link
        to="/"
        className="fixed top-6 left-6 z-10 text-3xl text3d text-white/90 font-bold"
      >
        Lensation
      </Link>
      {/* Display overlay and zoomed image */}
      {zoomedImage && (
        <>
          <div
            onClick={closeZoom}
            className="fixed h-screen w-screen bg-black/80 top-0 left-0 z-10 cursor-pointer"
          ></div>
          <button
            onClick={closeZoom}
            className="fixed bottom-10 left-10 uppercase text-sm z-20 text-white font-semibold"
          >
            Close
          </button>
          <div
            style={zoomStyles}
            className="fixed bg-opacity-75 flex justify-center items-center"
          >
            <img
              src={zoomedImage}
              alt="Zoomed"
              className="w-full h-full max-h-[95vh] object-contain"
            />
          </div>
        </>
      )}
      <div
        ref={containerRef}
        className="h-[200vh] overflow-y-auto relative flex gap-4"
      >
        {columnSpeeds.map((speed, index) => {
          const numItems = index === 1 || index === 3 ? 8 : 7;
          const itemHeight =
            (parentHeight / numItems) * (index === 1 || index === 3 ? 1.4 : 1);

          return (
            <>
              <div
                data-aos={`${
                  index === 1 || index === 3 ? "fade-down" : "fade-up"
                }`}
                key={index}
                className="flex-1 relative h-[165%] xlmd:h-[255%] overflow-hidden column cursor-pointer"
              >
                <div
                  className="absolute left-0 right-0 transition-transform duration-100 ease-linear space-y-4"
                  style={{
                    top: `${-scrollOffset * speed}px`,
                  }}
                >
                  {[...Array(numItems)].map((_, i) => {
                    const image =
                      (index === 0 && filteredImages[i] && filteredImages[i]) ||
                      (index === 1 &&
                        filteredImages[i + 7] &&
                        filteredImages[i + 7]) ||
                      (index === 2 &&
                        filteredImages[i + 15] &&
                        filteredImages[i + 15]) ||
                      (index === 3 &&
                        filteredImages[i + 21] &&
                        filteredImages[i + 21]);
                    // const name = image.name;
                    return (
                      <div
                        key={i}
                        className=""
                        style={{
                          height: `${itemHeight}px`,
                        }}
                        // onClick={() => handleImageClick(image.image, name)}
                      >
                        {image && image.image ? (
                          <img
                            src={image.image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <img
                            src={images[5].image}
                            alt=""
                            className="blur w-full h-full object-cover"
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
              {index === 1 && (
                <div
                  className={`${
                    isFilter ? "w-[200px]" : "w-[8px]"
                  } transition-all duration-500`}
                ></div>
              )}
            </>
          );
        })}
      </div>
      {/* Filters */}
      <div className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
        {!isFilter && (
          <p
            onClick={() => (
              setIsFilter(true),
              setTimeout(() => {
                setIsFiltersVisible(true);
              }, 500),
              setIsAutoScrolling(false)
            )}
            className="rotate-90 uppercase  cursor-pointer "
          >
            Filter Work {category !== "All" && `(${category})`}
          </p>
        )}
        {isFiltersVisible && (
          <div className={`transition-all duration-1000 space-y-4`}>
            <h1 className="uppercase text-lg font-inter-tight tracking-wider font-medium">
              Categories
            </h1>
            {categories.map((item, i) => (
              <p
                key={i}
                onClick={() => (
                  setIsFiltersVisible(false),
                  setIsFilter(false),
                  setIsAutoScrolling(true),
                  setCategory(item)
                )}
                className={`${item === category? "text-red-500 font-semibold":""} hover:text-red-500 cursor-pointer`}
              >
                {item}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Spotlight;
