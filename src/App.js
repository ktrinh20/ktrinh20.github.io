import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import ResearchPage from './pages/ResearchPage';
import PublicationsPage from './pages/PublicationsPage';
import OutreachPage from './pages/OutreachPage';
import VolunteerPage from './pages/VolunteerPage';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1 id="full-name-header">Kevin T. Trinh</h1>
        <h2 id="professional-title">PhD Candidate in Planetary Science</h2>
        <div className="main-container">
          <hr id="top-hr"/>
          <Navbar />
          <hr/>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={AboutPage} />
              <Route exact path="/research" component={ResearchPage}/>
              <Route exact path="/publications" component={PublicationsPage}/>
              <Route exact path="/outreach" component={OutreachPage}/>
              <Route exact path="/volunteer" component={VolunteerPage}/>
            </Switch>
          </BrowserRouter>
          <hr id="bottom-hr"/>
          <p id="footer-text">Website coded by me :)</p>
        </div>
      </header>
    </div>
  );
}

export default App;
