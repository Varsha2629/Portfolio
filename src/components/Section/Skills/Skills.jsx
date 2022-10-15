import React from "react";
import './Skills.scss'

const Skills = () => {
  return (
    <div id="skills">
      <h1>SKILLS</h1>
      <div className="card">
                     
         <img src="img/svg/JavaScript.svg" alt="javascript" />
          
          <img src="img/svg/React.svg" alt="react" />
          
          <img src="img/svg/HTML5.svg" alt="html" />
                  
          <img src="img/svg/CSS3.svg" alt="css" />
          
          <img src="img/svg/Github.svg" alt="html" />
          
          <img src="img/svg/NodeExpress.svg" alt="html" />
                 
      
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
