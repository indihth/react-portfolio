import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {

  const tags = project.tags.map((tag, i) => {
    return <div key={i} className="badge badge-neutral">
      {tag}
    </div>;
  });

  return (
    <div className="card w-96 bg-stone-100 shadow-xl">
      <figure>
        <img src={project.images[0].path} alt={project.images[0].caption} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {project.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p> {project.description}</p>
        <div className="card-actions justify-end">
        {tags}
        <br/>
        {(project.website) ? (<a href={project.website} target="_blank" className="btn btn-primary">Website</a>) : ""}
        {(project.github) ? (<a href={project.github} target="_blank" className="btn btn-primary">GitHub</a>) : ""}
        
        <Link to={`/projects/${project.slug}`}>Show</Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
