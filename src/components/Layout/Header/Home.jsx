import React from "react";
import './Home.scss';
import Nav from "./Nav";
 
const Home = () => {
 return (
   <div id="home">
   <Nav />
    <div className="home-page"> 
    <div className="text-zone">
      <h2>Hello, my name is</h2>
      {/* <img src='./img/V.png' alt="developer" /> */}
      <h1>Varsha Panchal</h1>
      <div className="title">
        <div className="title-wrapper">
          <div className="title-item">Full-stack Developer</div>
          <div className="title-item">Web Developer</div>
          <div className="title-item">Creative</div>
          <div className="title-item">Software Developer</div>
          <div className="title-item">Javascript Expert</div>
        </div>
      
      </div>
      {/* <p>I'm passionate about building beautiful interfaces and accessible applications. Welcome to my personal slice of the internet. I'm glad you're here!</p> */}
      <div className="connect"><a href="#contact">Let's Connect</a></div>

    </div>
     
   </div>
   </div>
   
 )

}

export default Home;