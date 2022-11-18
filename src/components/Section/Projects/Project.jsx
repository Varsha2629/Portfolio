import React from "react";


const Project = ({ project }) => {
  console.log("Hi", project)
  return (
    <div class="project-card">
      <div class="img-div">
        <img className="project-image" variant="top" src={project.img} alt="card-img" />
      </div>
      <div className="card-body">
        <div class="project-card-header">
          <h3>{project.title}</h3>
        </div>

        <div class="overlay">
          <div class="project-card-text">
            {project.des}
          </div>
          <span>NodeJs, Express, CSS, Git</span>
          <button className="card-btn">
            <a href="">Code</a>
          </button> <button className="card-btn">
            <a href="">Live</a>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Project;
