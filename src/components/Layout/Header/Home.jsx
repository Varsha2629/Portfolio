import React from "react";
import './Home.css';
import Nav from "./Nav";

const Home = () => {
 return (
   <>
   <Nav />
    <div className="container home-page"> 
      <h1><span>Hi,</span>
          <span>I am Varsha,</span>
          <span>Full-stack web developer.</span>
          <p>Web Developer / Javascript Expert </p>
          <p>I love building products that are aesthetically pleasing using clean code.</p>
          <button>Let's Talk</button>   
      </h1>

     
   </div>
   </>
   
 )

}

export default Home;