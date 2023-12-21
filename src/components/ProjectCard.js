import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

const ProjectCard = ({ project }) => {
  const tags = project.tags.map((tag, i) => {
    return (
      <p
        className="text-white text-xs border border-1 rounded-lg px-2 py-1"
        key={i}
        value={tag}
      >
        {tag}
      </p>
    );
    // return <Chip key={i} variant="outlined" size="sm" color="blue-gray" value={tag} />;
  });

  return (
    <Link to={`/projects/${project.slug}`}>
      <Card
        shadow={false}
        className="group relative grid h-[18rem] w-[25rem] max-w-[28rem] content-end items-end justify-center overflow-hidden text-center bg-black"
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          // Stores the project image in a css variable to use in className bg-[]
          style={{ "--image-url": `url(${project.images[0].path})` }}
          className={`absolute inset-0 m-0 h-full w-full rounded-none bg-[image:var(--image-url)] bg-cover bg-center`}
        >
          <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50 group-hover:backdrop-brightness-75" />
        </CardHeader>
        <CardBody className="relative py-14 px-6 md:px-12 my-auto">
          <div className="opacity-100 group-hover:opacity-0 duration-200 mb-6">
            <Typography variant="h2" color="white" className="mb-3 font-medium">
              {project.title}
            </Typography>
            <Typography variant="h5" className="text-gray-400">
              {project.category}
            </Typography>
            <div className="flex flex-wrap gap-2 justify-center mt-6">
              {tags}
            </div>
          </div>

          {/* Hidden content - reveal on hover */}
          <p className="opacity-0 group-hover:opacity-100 duration-200 absolute inset-0 z-10 flex justify-center items-center text-white text-xl font-semibold px-6">
            {project.description}
          </p>
        </CardBody>
      </Card>
    </Link>
  );
};

export default ProjectCard;
