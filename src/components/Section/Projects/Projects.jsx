import React from "react";
import Project from "./Project";

const Projects = ({projects}) => {
    return (
        <div id="projects">
        <h1>PROJECTS</h1>
        {projects.map((project) => (
         <div>          
            <Project key={project.id} project={project} />
        </div>
        ))}
          
        </div>
      ) 
  
}
export default Projects;