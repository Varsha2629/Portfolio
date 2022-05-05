import React from "react";
import Header from './components/Layout/Header/Header';
import About from './components/Section/About/About';
import Skills from './components/Section/Skills/Skills';
import Projects from './components/Section/Projects/Projects';
import Contact from './components/Section/Contact/Contact';
import Footer from './components/Layout/Footer/Footer';
import "./App.css";

function App() {
  return (
    <div className="App">    
          <Header />
          <About />
          <Skills />
          <Projects />
          <Contact />   
          <Footer /> 
    </div>
  );
}

export default App;
