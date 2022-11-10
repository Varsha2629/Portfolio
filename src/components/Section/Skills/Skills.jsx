import React from "react";
import './Skills.scss'

const Skills = () => {
  return (
    <div id="skills">
      <h1>Skills</h1>
      <div className="card">

        <div className="skill-img">
          <img src="img/svg/JavaScript.svg" alt="javascript" />
          <p>JavaScript</p>
        </div>            
        <div className="skill-img">  
          <img src="img/svg/React.svg" alt="react" />
          <p>React</p>
        </div>
        <div className="skill-img">  
          <img src="img/svg/HTML5.svg" alt="html" />
          <p>HTML5</p>
        </div>
        <div className="skill-img"> 
          <img src="img/svg/CSS3.svg" alt="css" />
          <p>CSS3</p>
        </div>
        <div className="skill-img"> 
          <img src="img/svg/Github.svg" alt="github" />
          <p>GitHub</p>
        </div>
        <div className="skill-img"> 
          <img src="img/svg/NodeExpress.svg" alt="node" />
          <p>NodeJs</p>
        </div>
      
    </div>

      <div className="certifications">
        <h1>Certifications</h1>
        <div className="certified">
          <p>Diploma Full Stack Web Development : </p>
          {/* <a href=""></a> */}
          <p>Udemy Full Stack Web Development : </p>
          {/* <a href="#a"></a> */}
          <p>Udemy Full Stack Web Development : </p>
          {/* <a></a> */}
        </div>
      </div>
    </div>
  );
};
export default Skills;
