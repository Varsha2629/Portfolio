import React from "react";
import './Nav.css';

const Nav = () => {
 return (
    <div className="main"> 

      <nav className="navbar">
        <div className='leftSide'>
          <h3><a href="http://localhost:3000/" className="logo"><img src="/img/logo192.jpg" alt="logo" /></a></h3>
        </div>
        <div className='leftSide'>
          <a href='#about' className="about">About</a>
          <a href='#skills' className="skill">Skills</a>
          <a href='#projects' className="project">Projects</a>
          <a href='#contact' className="contact">Contact</a>
         </div>     
        
      </nav>
   </div>
 )

}

export default Nav;