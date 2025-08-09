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
                <p className='about-text'>
                I am a <b>Melza M. and Frank Theodore Barr Postdoctoral Fellow</b> at the California Institute of Technology.
                <br/><br/>
                In my research, I use numerical models and fundamental theory to study the <b>structure and evolution of 
                icy-rocky bodies</b>, especially icy moons. I am particularly interested in large-scale 
                processes such as ocean formation, metallic core formation, dynamo activity, (seafloor) 
                volcanism, and ocean-ice shell dynamics—as well as the thermodynamics of microbial metabolisms.
                <br/><br/>
                I earned my PhD at Arizona State University in the School of Earth and Space Exploration, supported 
                by <b>NASA FINESST</b>. I received my BA in Physics from Bowdoin College in 2019 as a first-generation 
                student.
                <br/><br/>
                You can contact me at <span className="emphasize-text">ktt@caltech.edu</span>
                </p>
                <br/>
            </div>
        </div>
    )
}

export default AboutPage;