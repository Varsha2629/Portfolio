import React from "react";
import './Skills.scss'

const Skills = () => {
  return (
    <div id="skills">
      <h1>Skills</h1>
      <p>What I do</p>
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

      <div className="service">
        <h1>Work Experience</h1>
        <p>What I offer</p>
        <div className="service-container">
        <div className="service__head">
          <h3>Shreesoftic</h3>
          <small class="services__item-desc">FullStack Developer</small>
        </div>
        <ul className="service_list">
          <li>
            <div class="service__list-icon"><img src="img/svg/checkarrow.svg" alt="checkarrow" /></div>
            <p>Develop an intuitive user interface for the users.</p>
          </li>
          <li>
            <div class="service__list-icon"><img src="img/svg/checkarrow.svg" alt="checkarrow" /></div>
            <p>Work on the integration of the demand chain system.</p>
          </li>

           <li>
            <div class="service__list-icon"><img src="img/svg/checkarrow.svg" alt="checkarrow" /></div>
            <p>Use of HTML5, jQuery, and CSS for the development of Views/Front End for the legacy MVC application.</p>
          </li>
          <li>
            <div class="service__list-icon"><img src="img/svg/checkarrow.svg" alt="checkarrow" /></div>
            <p>Apply Server-side validations in MVC Models using Data Annotations.</p>
          </li>
          <li>
            <div class="service__list-icon"><img src="img/svg/checkarrow.svg" alt="checkarrow" /></div>
            <p> Perform code reviews of fellow developers.</p>
          </li>
          <li>
            <div class="service__list-icon"><img src="img/svg/checkarrow.svg" alt="checkarrow" /></div>
            <p>Used Git for version control.</p>
          </li>
          <li>
            <div class="service__list-icon"><img src="img/svg/checkarrow.svg" alt="checkarrow" /></div>
            <p>Upgrade and develop new Stored Procedures as per the requirement</p>
          </li>
          <li>
            <div class="service__list-icon"><img src="img/svg/checkarrow.svg" alt="checkarrow" /></div>
            <p>Enhance the system modules and functionality.</p>
          </li>
          <li>
            <div class="service__list-icon"><img src="img/svg/checkarrow.svg" alt="checkarrow" /></div>
            <p>Consumed the API and worked on ReactJS-based UI.</p>
          </li>
          <li>
            <div class="service__list-icon"><img src="img/svg/checkarrow.svg" alt="checkarrow" /></div>
            <p>Collaborated with QA on deployment to different environments, and bug fixes.</p>
          </li>
        </ul>
          
        </div>       

      </div>
    </div>
  );
};
export default Skills;
