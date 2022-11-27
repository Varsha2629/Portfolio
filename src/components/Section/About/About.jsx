import React from 'react';
import './About.scss';
const About = () => {
  return (
    <div id="about">
      <h1>Who I am</h1>
      <div className="about-test">
        <div>
          <p className="description">
            I am a detail-oriented Front-End developer with a passionate about
            what i'm doing and see every task as a challenge and an opportunity
            to get better. My diverse background in computer science and
            investing allows me to excel at logical thinking and creative
            problem-solving, allowing development to be the perfect field for my
            skill set. I love dry, responsive, accessible code and bring
            experience developing applications in Javascript, React, jQuery,
            CSS/SCSS, and HTML.
          </p>
        </div>
        <div className="profile-image">
          <img src="/img/user-photo.jpg" alt="user" />
        </div>
      </div>
    </div>
  );
};
export default About;
