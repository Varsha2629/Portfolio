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
          Scheduler is a single-page, React application. This user friendly app allows you to create, edit or delete interimg. The database is managed by a separate API and requests are handled through Axios. The project comes with a testing suite utilising Jest and Cypress.
          </div>
          <h5>NodeJs, Express, CSS, Git</h5>
        </div>
      </div>
    </div>
  );
};
export default Project;
