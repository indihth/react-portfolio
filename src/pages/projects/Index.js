import { useState, useEffect } from "react";
import axios from "axios";

// Import components
import ProjectCard from "../../components/ProjectCard";
import BackButton from "../../components/BackButton";
import { Typography } from "@material-tailwind/react";

const Index = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://india-portfolio-default-rtdb.europe-west1.firebasedatabase.app/.json"
      )
      .then((response) => {
        setProjects(response.data);
      })
      .catch((e) => {
        console.error(e);
      });
  }, []);

  if (!projects) return <p>Loading...</p>;

  const projectList = projects.map((project, i) => {
    return <ProjectCard key={i} project={project} />;
  });

  return (
    <div className="ps-32 pt-12 bg-black">
      <Typography variant="h3" className="mb-6">Projects</Typography>
      <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
        {projectList}
      </div>
    </div>
  );
};

export default Index;
