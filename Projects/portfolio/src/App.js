import React from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import LandingPage from './components/LandingPage/LandingPage';
import AboutMe from './components/About Me/AboutMe';
import Skills from './components/Skills/Skills';
import Education from './components/Education/Education'
import Portfolio from './components/Portfolio/Portfolio';
import Resume from './components/Resume/Resume';
import Links from './components/Links/Links';
import Contact from './components/Contact/Contact'

function App(){
  return(
    <div className="App">
      <NavBar/>
      <div className="overlay"></div>
      <div className="homeBackground"></div>
        <div className="container">
        
          <LandingPage/>
          <AboutMe/>
          <Skills/>
          <Education/>
          <Portfolio/>
          <Resume/>
          <Links/>
          <Contact/>
    </div>
  </div>
  );
}
export default App;