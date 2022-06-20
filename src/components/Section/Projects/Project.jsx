import React from "react";

const Project = ({ project }) => {
    // console.log(props)
    return (
        // <div className="project-deatils">        
        //      {project.img}
        //      <h3>{project.title}</h3>             
                       <div class="project-card">
                        <div class="project-card-header">
                            <h3>{project.title}</h3>
                        </div>
                          
                          <div class="image-div">
                             {project.img}
                          </div>
                          <h5>NodeJs, Express, CSS, Git</h5>
                          <div class="overlay">
                             <div class="project-card-text">Build microservices using a modern back-end framework. Learn how to develop custom APIs and to communicate with databases to persist data.</div>
                          </div>
                       </div>
                    
        // </div>
    )
}
export default Project;