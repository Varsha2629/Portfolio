import React from "react";


const Project = ({ project }) => {
  console.log("Hi", project)
  return (
    <div id="project-card">
      <div class="img-div">
        <img className="project-image" variant="top" src={project.img} alt="card-img" />
      </div>
      <div className="card-body">
        <div className="project-card-header">
          <h3 className="title"><a href="#">{project.title}
          <i class="feather-arrow-up-right" ></i>
          </a>
          </h3>
        </div>
        
      </div>
    </div>
  );
};
export default Project;
