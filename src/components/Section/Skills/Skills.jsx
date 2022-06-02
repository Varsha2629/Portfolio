import React from "react";

const Skills = () => {
  return (
    <div id="skills">
      <h1>SKILLS</h1>
      <div className="card">
        <title>Front-End</title>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>React</li>
        </ul>
    
      <div className="sub-card">
        <title>Back-End</title>
        <ul>
          <li>RESTful APIs</li>
          <li>NodeJS</li>
          <li>Express</li>
          <li>MongoDB</li>
        </ul>
      </div>
      <div className="sub-card">
        <title>API</title>
        <ul>
          <li>Stripe API</li>
          <li>MapBox</li>
          <li>Cloudinary</li>
        </ul>
      </div>
      <div className="sub-card">
        <title>Tools</title>
        <ul>
          <li>GitHub</li>
          <li>Git</li>
          <li>Git desktop</li>
          <li>NPM</li>
          <li>Visual Studio Code</li>
        </ul>
      </div>
    </div>

      <div className="certifications">
        <h1> Certifications </h1>
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
