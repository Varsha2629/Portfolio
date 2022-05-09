import { useState } from "react";
import Header from './components/Layout/Header/Header';
import About from './components/Section/About/About';
import Skills from './components/Section/Skills/Skills';
import Projects from './components/Section/Projects/Projects';
import Contact from './components/Section/Contact/Contact';
import Footer from './components/Layout/Footer/Footer';
import "./App.css";

function App() {
    const [projects, setProjects] = useState([
      {
        id:1,
        title: 'TinnyApp'
      },
      { id:1,
        title: 'Yelpcamp'
      },
      { id:1,
        title: 'Yelpcamp'
      },
    ])
  return ( 
    <div className="App">    
          <Header />
          <About /> 
          <Skills />
          <Projects projects={projects} />
          <Contact />   
          <Footer /> 
    </div>
  );
}

export default App;
