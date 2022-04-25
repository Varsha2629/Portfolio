import React, {} from 'react';
import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Section from './components/Section/Section';
import { Routes, Route } from "react-router-dom";
import './App.css';


function App() {
  return (
    
      <div className="App">
         <Routes exact path="/">
            <Route path="/" element={<Header />} />
                   
         </Routes>
         <Section />
          <Footer />  
         
       
          
      </div> 

  );
}

export default App;
