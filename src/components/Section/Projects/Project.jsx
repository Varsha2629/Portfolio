import React from "react";

const Project = ({ project }) => {
    // console.log(props)
    return (
        <div className="project-deatils">        
             {project.img}
             <h3>{project.title}</h3>
        </div>
    )
}
export default Project;