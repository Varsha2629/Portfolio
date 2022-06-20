import React from "react";
import './Home.css';
import Nav from "./Nav";
 
const Home = () => {
 return (
   <div>
   <Nav />
    <div className="home-page"> 
    <div className="text-zone">
      <h1>Hi,<br /> I'm</h1>
      <img src='./img/V.png' alt="developer" />
      <span>arsha,</span>
      <h2>Full-stack web developer.</h2>
      <p>Web Developer / Javascript Expert </p>
      <p>I love building products that are aesthetically pleasing using clean code.</p>
      <button>Let's Talk</button>   

    </div>
     
   </div>
   </div>
   
 )

}

export default Home;