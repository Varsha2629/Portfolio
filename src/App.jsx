// import { useState } from "react";
import Home from './components/Layout/Header/Home';
import About from './components/Section/About/About';
import Skills from './components/Section/Skills/Skills';
import Projects from './components/Section/Projects/Projects';
import Contact from './components/Section/Contact/Contact';
import Footer from './components/Layout/Footer/Footer';
import "./App.scss";
import dataBase from "./components/dataBase";

function App() {

  return ( 
    <div className="App">    
          <Home />
          <About /> 
          <Skills /> 
           <Projects dataBase={dataBase} />
           <Contact />  
          <Footer /> 
    </div>
  );
}

export default App;
