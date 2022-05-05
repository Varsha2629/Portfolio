import React from "react";
import './Header.css';

const Header = () => {
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
          <a href='#contect' className="contect">Contact</a>
         </div>     
        
      </nav>
   </div>
 )

}

export default Header;