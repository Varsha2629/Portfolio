import React from 'react';

const Project = ({ project }) => {
  console.log('Hi', project);
  return (
    <div id="project-card">
      <div class="img-div">
        <a href={project.link} target="_blank" rel="noreferrer">
          <img
            className="project-image"
            variant="top"
            src={project.img}
            alt="card-img"
          />
        </a>
      </div>
      <div className="card-body">
        <div className="project-card-header">
          <h3 className="title">
            <a href={project.link} target="_blank" rel="noreferrer">
              {project.title}
              <div className="right-arrow-up">
                <img src="/img/svg/arrow-up.svg" alt="arrow" />
              </div>
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Project;
