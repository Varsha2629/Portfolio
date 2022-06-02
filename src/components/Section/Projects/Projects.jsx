import React from "react";
import Project from "./Project";

const Projects = ({projects}) => {
    return (
        <div id="projects">
        <h1>PROJECTS</h1>
        <p>Collection of some of my work</p>
        {projects.map((project) => (
         <div>          
            <Project key={project.id} project={project} />
        </div>
        ))}
          
        </div>
      ) 
  
}
export default Projects;