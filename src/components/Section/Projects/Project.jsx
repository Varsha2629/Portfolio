import React from "react";

const Project = ({ project }) => {
    // console.log(props)
    return (
        <div id="project">
              {project.img}
             <h3>{project.title}</h3>
        </div>
    )
}
export default Project;