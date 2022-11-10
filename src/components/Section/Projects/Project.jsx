import React from "react";

const Project = ({ project }) => {
    
    return (
                
                       <div class="project-card">
                          <div class="img-div">
                             <img variant="top" src={project.img} alt="card-img" />
                          </div>
                          <div className="card-body">
                               <div class="project-card-header">
                                <h3>{project.title}</h3>
                               </div>
                            
                               <div class="overlay">
                                <div class="project-card-text">Build microservices using a modern back-end framework. Learn how to develop custom APIs and to communicate with databases to persist data.</div>
                                <h5>NodeJs, Express, CSS, Git</h5>
                               </div>
                                
                           </div>  
                       </div>
    )
}
export default Project;