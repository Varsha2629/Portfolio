import React from "react";
import About from './About/About.js';
import Skills from './Skills/Skills.js';
import Projects from './Projects/Projects.js';
import Contact from './Contact/Contact.js';

const Section = () => {
    return(
        <div className="section"> 
              <div id="top" className="container">
              </div>           
                <About />
                <Skills />
                <Projects 
                    
                
                />
                <Contact />
              
            
        </div>
    )
} 

export default Section;