import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import projectsJSON from "../../assets/data/projects.json";

// Import components
import { Carousel } from "@material-tailwind/react";

// import json, look for project with matching slug

const Show = () => {
  const [project, setProject] = useState();
  const { slug } = useParams();

  useEffect(() => {
    // Loop through all projects and return when slug matches slug from useParams

    // Find will return the first match - filter will return all matches in an array
    let temp = projectsJSON.find((project) => project.slug === slug);

    // Storing returned project
    setProject(temp);
  }, []);

  if (!project) return <h1>Project doesn't exist!</h1>;

  let imageCarousel = "";

  // If project only contains 1 image, no carousel
  if (project.images) {
    let items = project.images.map((image, i) => {
      return (
        <img
          src={`${image.path}`}
          alt={`${image.caption}`}
          key={i}
          className="h-full w-full object-cover"
        />
      );
    });

    imageCarousel = (
      <Carousel
        className="rounded-xl w-2/4 h-auto"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {items}
      </Carousel>
    );
  }

  return (
    <>
      <p className="font-semibold text-gray-500 mb-1">{project.category}</p>
      <h1 className="text-6xl mb-20">{project.title}</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 ">
          <p>{project.description}</p>
        </div>

        <div>
          <p>
            <b>Tags: </b>
            {project.tags}
          </p>
          {/* <p>
          <b>Dates: </b>
          {project.dates}
        </p> */}
          <p>
            <b>Website: </b>
            {project.website}
          </p>
          <p>
            <b>GitHub: </b>
            {project.github}
          </p>
          {project.demo ? <p>demo goes here</p> : ""}
        </div>
      </div>

      {imageCarousel}
    </>
  );
};

export default Show;
