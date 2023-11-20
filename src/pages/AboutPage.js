import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ProfilePic from '../photos/DBG_4.jpg';
import TwitterLogo from '../photos/twitter-logo.png';
import GithubLogo from '../photos/github-logo.png';
import GoogleScholarLogo from '../photos/google-scholar-logo.png';
import NotionLogo from '../photos/notion-logo.png';
import './AboutPage.css';

function AboutPage() {

    const isWideScreen = useMediaQuery({query: '(min-width: 801px)'});
    const isNarrowScreen = useMediaQuery({query: '(max-width: 800px)'});

    return(
        <div className="about-page">
            <div className={isWideScreen ? "horizontal-flex center-in-flex" : "vertical-flex center-in-flex"}>
                <div className='vertical-flex'>
                    <img id="profile-pic" src={ProfilePic}/>
                    <div className='horizontal-flex center-in-flex logo-icon-container'>
                        <a target="_blank" className = 'align-items-center' href='https://twitter.com/IcyMoonsKevin'><img className='logo-icon' src={TwitterLogo}/></a>
                        <a target="_blank" href='https://github.com/ktrinh20'><img className='logo-icon' src={GithubLogo}/></a>
                        <a target="_blank" href='https://scholar.google.com/citations?user=zpvV860AAAAJ&hl=en'><img className='logo-icon' src={GoogleScholarLogo}/></a>
                        <a target="_blank" href='https://picturesque-freezer-4ae.notion.site/KEVIN-T-TRINH-002e7f267b2442b4b6d20dcf61004fe9'><img className='logo-icon' src={NotionLogo}/></a>
                    </div>
                </div>
                <p className="about-text">I am a PhD candidate at the Arizona State University in the School of 
                Earth and Space Exploration, advised by <a href="https://josephgorourke.com/">Dr. Joseph G. O’Rourke</a>. I received my BA in Physics from 
                Bowdoin College in 2019 as a first-generation student. Also, I am a <strong>NASA FINESST</strong> future investigator 
                (FI) studying the internal differentiation, evolution, and potential habitability of Jupiter’s moon, 
                Europa.<br/><br/>
                In my research, I use numerical models and fundamental theory to investigate the <b>geophysics and geochemistry of 
                icy moons</b>. I am particularly interested in large-scale processes such as ocean formation,
                metallic core formation, dynamo activity, and (seafloor) volcanism.
                <br/><br/>
                You can contact me at <span className="emphasize-text">kttrinh1@asu.edu</span>
                </p>
                <br/>
            </div>
        </div>
    )
}

export default AboutPage;