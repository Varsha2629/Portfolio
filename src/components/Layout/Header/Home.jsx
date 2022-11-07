import React from "react";
import './Home.scss';
import Nav from "./Nav";
 
const Home = () => {
 return (
   <div id="home">
   <Nav />
    <div className="home-page"> 
      <div className="coverImage">
        <img className="Into-img" src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&q=80" alt="home-image" />
        
      </div>    
      <div className="text-zone">
        <h2>Hello, my name is</h2>
        
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
        <div className="connect"><a href="https://wa.me/5147060363" rel="noreferrer" target="_blank">Let's Connect</a></div>

      </div>
      
    </div>
   </div>
   
 )

}

export default Home;