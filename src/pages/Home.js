import { useState, useEffect } from "react";
import axios from "axios";

// Import components
import ProjectCard from "./../components/ProjectCard";
import { Typography, Button } from "@material-tailwind/react";

const Home = () => {
  const [projects, setProjects] = useState(null);

  const styles = {
    accentColor: "pink-500",
  }

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
    <div className="overflow-hidden">
      <div className="grid grid-cols-2 mt-16">
        <div className="my-auto ps-32 grid gap-8">
          <Typography className="uppercase tracking-widest">
            Hi there, I'm
          </Typography>
          <Typography className="lowercase text-7xl font-bold tracking-tight">
            India Heath.
          </Typography>
          <div className="grid gap-3">
            <Typography className={`text-${styles.accentColor} uppercase tracking-widest font-semibold`}>
              Web Developer
            </Typography>
            <Typography variant="paragraph" className="w-1/2 text-gray-500 mb-1">
              With a passion for languages and learning based in Wicklow, Ireland.
            </Typography>
            {/* <div>
              <Button className={`rounded-full px-8 py-4 bg-${styles.accentColor} text-black tracking-widest font-semibold`}>
                test button
              </Button>
            </div> */}
          </div>
        </div>

        <div className="">
          {/* <Typography variant="h3">Projects</Typography> */}
          <div className="grid grid-rows-2 grid-flow-col gap-4 ">
            {projectList}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
