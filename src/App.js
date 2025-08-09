import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Switch, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ResearchPage from './pages/ResearchPage';
import PublicationsPage from './pages/PublicationsPage';
import OutreachPage from './pages/OutreachPage';
import VolunteerPage from './pages/VolunteerPage';
//import SciCommPage from './pages/SciCommPage';
import PressPage from './pages/PressPage';
import MoonLogo from './photos/metallic core formation.png';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <div className="main-header">
          <div className="left">
            <img id="kevin-logo" src={MoonLogo}/>
          </div>
          <div className="right">
            <h1 id="full-name-header">Kevin T. Trinh</h1>
            <h2 id="professional-title">Barr Postdoctoral Fellow + Planetary Scientist.</h2>
          </div>
        </div>

        <div className="main-container">
          <hr id="top-hr"/>
          <Navbar />
          <hr/>
          <Switch>
            <Route exact path="/" component={AboutPage}/>
            <Route exact path="/research" component={ResearchPage} />
            <Route exact path="/publications" component={PublicationsPage}/>
            <Route exact path="/outreach" component={OutreachPage}/>
            <Route exact path="/press" component={PressPage}/>
          </Switch>
          <hr id="bottom-hr"/>
          <p id="footer-text">Website coded by me :)</p>
        </div>
      </header>
    </div>
  );
}

export default App;
