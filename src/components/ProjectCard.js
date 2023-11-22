import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Chip
} from "@material-tailwind/react";

const ProjectCard = ({ project }) => {
  const tags = project.tags.map((tag, i) => {
    return (
      <Chip key={i} variant="ghost" size="sm" value={tag}/>
    );
  });

  return (
    <>
    <Link to={`/projects/${project.slug}`}>
     <Card className="max-w-[24rem] overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none"
      >
        <img
          className="object-cover w-full h-56"
          src={project.images[0].path}
          alt={project.images[0].caption}
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h4" color="blue-gray">
        {project.title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal">
        {project.description}
        </Typography>
      </CardBody>
      <CardFooter className="flex items-end justify-between">
        <div className="flex flex-wrap gap-2">
          {tags}
        </div>
        <Typography className="font-normal">{project.date}</Typography>
      </CardFooter>
    </Card>
    </Link>
  </>
  );
};

export default ProjectCard;
