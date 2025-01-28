import React, { useEffect, useState, useRef } from "react";
import { MdArrowDropDown } from "react-icons/md";

function Gallery() {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("all");
  const [isFilters, setIsFilters] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState([]); // Visible projects
  const [loadedImages, setLoadedImages] = useState(new Set()); // Tracks loaded images
  const [page, setPage] = useState(0); // Current page
  const [isLoading, setIsLoading] = useState(false); // Tracks loading status
  const loaderRef = useRef(null); // Ref for the loader element

  const PROJECTS_PER_PAGE = 12; // Number of projects per page

  console.log(projects.length, "number of projects");
  console.log(visibleProjects.length, "number is visible");
  console.log(page, "page number");
  useEffect(() => {
    const fetchData = async () => {
      const csvUrl =
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vSX6pk6qiRV8tGfS6c27-dX7mdCDjUhnPvogB9ZJEdHUkTrePlsJIXsQNfL_aOU4LirEKrh35o75189/pub?output=csv"; // Replace with your CSV link

      const response = await fetch(csvUrl);
      const data = await response.text();

      // Parse the CSV into JSON
      const rows = data
        .split("\n")
        .slice(1)
        .map((row) => {
          const [projectId, thumbnailUrl, category] = row.split(",");
          return { projectId, thumbnailUrl, category: category.trim() };
        });

      setProjects(rows);

      // Extract unique categories
      const uniqueCategories = new Set(
        rows.map((project) => project.category.toLowerCase().trim())
      );
      setCategories(Array.from(uniqueCategories));
    };

    fetchData();
  }, []);

  // Filter projects based on the selected category
  const filteredProjects =
    filteredCategory === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === filteredCategory.toLowerCase()
        );

  // Handle visibility of projects (lazy loading)
  useEffect(() => {
    const startIndex = page * PROJECTS_PER_PAGE;
    const endIndex = startIndex + PROJECTS_PER_PAGE;
    const newVisibleProjects = filteredProjects.slice(0, endIndex);
    setVisibleProjects(newVisibleProjects);
    setIsLoading(false); // Mark loading as complete
  }, [filteredProjects, page]);

  // Lazy loading logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && !isLoading) {
          if (visibleProjects.length >= filteredProjects.length) {
            console.log("All projects are loaded. Stopping observer.");
            return; // No more projects to load
          }
          console.log("Loading more projects...");
          setIsLoading(true);
          setPage((prevPage) => prevPage + 1); // Increment page number
        }
      },
      { threshold: 0.1 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [isLoading, visibleProjects, filteredProjects]);

  const handleImageLoad = (projectId) => {
    setLoadedImages((prevLoaded) => new Set(prevLoaded).add(projectId));
  };

  const columns = window.innerWidth < 768 ? 2 : 3; // Number of columns
  const columnImages = Array.from({ length: columns }, () => []);

  // Distribute images row-wise into columns
  visibleProjects.forEach((project, index) => {
    columnImages[index % columns].push(project);
  });

  return (
    <main className="mt-16 mx-4 md:mx-8 lg:mx-10 relative">
      {/* Filters Dropdown */}
      <div
        className={`absolute flex flex-col text-black font-semibold bg-gray-300 py-1 sm:py-2 px-2 sm:px-4 w-fit rounded my-4 space-y-2 ${
          isFilters ? "max-h-96" : "max-h-10"
        } overflow-hidden transition-all duration-500`}
      >
        <div
          onClick={() => setIsFilters((prev) => !prev)}
          className="flex items-center gap-1 cursor-pointer capitalize"
        >
          Categories {filteredCategory !== "all" && `(${filteredCategory})`}
          <MdArrowDropDown
            className={`text-2xl ${
              isFilters ? "rotate-180" : "rotate-0"
            } transition-all duration-500`}
          />
        </div>
        <div
          className={`space-y-2 text-lg ${isFilters ? "visible" : "hidden"}`}
        >
          <p
            onClick={() => {
              setFilteredCategory("all");
              setIsFilters((prev) => !prev);
              setPage(0); // Reset page
            }}
            className={`capitalize cursor-pointer ${
              "all" === filteredCategory ? "text-orange-500" : ""
            } transition-all duration-200`}
          >
            All
          </p>
          {categories.map((category, i) => (
            <p
              key={i}
              onClick={() => {
                setFilteredCategory(category);
                setIsFilters((prev) => !prev);
                setPage(0); // Reset page
              }}
              className={`capitalize cursor-pointer ${
                category === filteredCategory ? "text-orange-500" : ""
              } transition-all duration-200`}
            >
              {category}
            </p>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 lg:gap-10 pt-16">
        {/* Render each column */}
        {columnImages.map((col, colIndex) => (
          <div className="flex flex-col gap-4 md:gap-8 lg:gap-10 justify-start" key={colIndex}>
            {col.map((project, index) => (
              <div key={`${colIndex}-${index}`}>
                {!loadedImages.has(project.projectId) && (
                  <div className="h-40 w-full bg-gray-300 rounded-lg animate-pulse" />
                )}
                <img
                  className={`h-auto max-w-full w-full rounded-lg bg-gray-300 ${
                    loadedImages.has(project.projectId) ? "block" : "hidden"
                  }`}
                  src={project.thumbnailUrl}
                  alt={`Gallery Image ${project.projectId}`}
                  onLoad={() => handleImageLoad(project.projectId)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Loader */}
      {visibleProjects.length < filteredProjects.length && (
        <div
          ref={loaderRef}
          className="w-full text-center py-4 text-gray-500 text-xl"
        >
          Loading more...
        </div>
      )}
    </main>
  );
}

export default Gallery;
