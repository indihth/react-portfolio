import { useState } from 'react'

import projectsJSON from '../../assets/data/projects.json'

// Import components
import ProjectCard from '../../components/ProjectCard'

const Index = () => {

  const [projects, setProjects] = useState(projectsJSON)

  const projectList = projects.map((project, i) => {
    return <ProjectCard key={i} project={project} />
  })

  return (
   <>
    <div class="grid grid-cols-2 gap-2 justify-items-center">{projectList}</div>
   </>
  )
}

export default Index