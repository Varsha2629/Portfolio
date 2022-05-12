import React from "react";
import Project from "./Project";

const Projects = ({projects}) => {
    return (
        <>
        <h1>PROJECTS</h1>
        {projects.map((project) => (
         <div className="projects">          
            <Project key={project.id} project={project} />
        </div>
        ))}
          
        </>
      ) 
  
}
export default Projects;