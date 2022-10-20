import React from "react";
import './About.scss';
const About = () => {
    return(
        <div id="about">
            <h1>Who I am</h1>  
            <div className="about-test">
                <p> I am a detail-oriented Front-End developer with a passion for creating, repairing, building, and innovating. My diverse background in corporate and investing allows me to excel at logical thinking and creative problem-solving, allowing development to be the perfect field for my skill set. I love dry, responsive, accessible code and bring experience developing applications in Javascript, React, jQuery, CSS/SCSS, and HTML.
                While attending Lighthouse labs I had the opportunity to create multiple projects using various languages. The projects that I worked on while at LHL had many up and downs but the final products turned out to be something I am proud of and well worth it.</p>         
                
                <div className="profile-image"> 
                    <img src="/img/user-photo.jpg" alt="user" />
                </div>
            </div> 
           
        </div>
    )
}
export default About;