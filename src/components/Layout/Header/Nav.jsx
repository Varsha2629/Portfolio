import React from "react";
import './Nav.scss';

const Nav = () => {
 return (
    <div className="main"> 
      <nav className="navbar">
        <div className='rightSide'>
          <h3><a href="http://localhost:3000/" className="logo"><img src="/img/logo192.jpg" alt="logo" /></a></h3>
        </div>
        <div className='leftSide'>
        <a href='#home' className="text active">Home</a>
          <a href='#about' className="text">About</a>
          <a href='#skills' className="text">Skills</a>
          <a href='#projects' className="text">Projects</a>
          <a href='#contact' className="text">Contact</a>
         </div>     
        
      </nav>
   </div>
 )

}

export default Nav;