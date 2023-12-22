import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

// import projectsJSON from "../../assets/data/projects.json";

// Import components
import { Button, Carousel, Typography } from "@material-tailwind/react";
import BackButton from "../../components/BackButton";

// import json, look for project with matching slug

const Show = () => {
  const [project, setProject] = useState();
  const { slug } = useParams();

  useEffect(() => {
    axios
      .get(
        "https://india-portfolio-default-rtdb.europe-west1.firebasedatabase.app/.json"
      )
      .then((response) => {
        // Find will return the first match - filter will return all matches in an array
        setProject(response.data.find((project) => project.slug === slug));
      })
      .catch((e) => {
        console.error(e);
      });

    // let temp = projectsJSON.find((project) => project.slug === slug);

    // Loop through all projects and return when slug matches slug from useParams
    // Storing returned project
    // setProject(temp);
  }, [slug]);

  if (!project) return <h1>Project doesn't exist!</h1>;

  const technologies = project.tags.map((tag, i) => {
    return (
      // Return tags with comma seperating - minus last element
      <p key={i}>
        {tag}
        {i < project.tags.length - 1 ? ", " : ""}
      </p>
    );
  });

  let imageCarousel = "";

  // If project only contains 1 image, no carousel
  if (project.images) {
    let items = project.images.map((image, i) => {
      return (
        <img
          src={`${image.path}`}
          alt={`${image.caption}`}
          key={i}
          className="h-auto w-full object-cover"
        />
      );
    });

    imageCarousel = (
      <Carousel
        className="rounded-xl"
        transition={{ duration: 0.7 }} // Transition between images
      >
        {items}
      </Carousel>
    );
  }

  return (
    <div class="flex items-start ps-16 pt-10 bg-black">
      <BackButton className="mb-4 me-4" />
      <div className="pe-28">
        <p className="font-semibold text-gray-500 my-1 ps-1">
          {project.category}
        </p>
        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="col-span-2 row-span-2 grid pe-12">
            <div className="max-w-screen-lg ">{imageCarousel}</div>
          </div>
          <div className="grid gap-6">
            <h1 className="text-5xl mb-1">{project.title}</h1>
            <Typography variant="paragraph" className="text-gray-400">
              {project.description}
            </Typography>

            <div>
              <Typography variant="small" className="font-semibold mb-1">
                Technologies
              </Typography>
              <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                {technologies}
              </div>
            </div>
            <div class="flex gap-2 text-white">
              {/* GitHub Button */}
              <a href={project.github} target="_blank">
                <Button className="flex items-center gap-3" variant="filled">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="15.5"
                    viewBox="0 0 496 512"
                  >
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                  </svg>
                  GitHub
                </Button>
              </a>
              {/* Website Button - if exists*/}
              {project.website ? (
                <a href={project.website} target="_blank">
                  <Button className="flex items-center gap-3" variant="filled">
                    Hosted App
                  </Button>
                </a>
              ) : (
                ""
              )}
            </div>
            {/* {project.demo ? <p>demo goes here</p> : ""} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
