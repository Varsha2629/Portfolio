import React from "react";
import './About.scss';
const About = () => {
    return(
        <div id="about">
            <h1>Who I am</h1>  
            <div className="about-test">
                <div>
                    <p className="description">
                       
                    I am a Web Developer adept in front-end and back-end solutions. I've worked with and have become proficient in an assortment of technologies including Javascript, React, HTML/CSS, SQL and more. I am also able to effectively self-manage during independent work as well as collaborate on projects and lead teams to complete tasks.
                     
                    </p> 
                </div>
                <div className="profile-image"> 
                    <img src="/img/user-photo.jpg" alt="user" />
                </div>
            </div> 
           
        </div>
    )
}
export default About;