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
        img: '/tiny-login-user.png',
        title: 'TinnyApp'

      },
      { 
        id:2,
        img: '/scheduler-home-page.png',
        title: 'InterviewScheduler', 
      },
      { 
        id:3,
        img: '/tweeter-desktop-view.png',
        title: 'TweeterApp'
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
