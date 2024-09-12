import './App.css';
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import ProfileSection from './components/ProfileSection/ProfileSection';
import MyNavbar from './components/Navbar/MyNavbar';
import AboutMe from './components/About/AboutMe';
import Skills from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <ProfileSection/>
      <AboutMe/>
      <Skills/>
      
    </div>
  );
}

export default App;
