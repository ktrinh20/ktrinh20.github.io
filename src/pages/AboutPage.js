import React from 'react';
import { useMediaQuery } from 'react-responsive';
import ProfilePic from '../photos/portland-headlight.jpg';
import './AboutPage.css';

function AboutPage() {

    const isWideScreen = useMediaQuery({query: '(min-width: 801px)'});
    const isNarrowScreen = useMediaQuery({query: '(max-width: 800px)'});

    return(
        <div className="about-page">
            <div className={isWideScreen ? "horizontal-flex center-in-flex" : "vertical-flex center-in-flex"}>
                <img id="profile-pic" src={ProfilePic}/>
                <p className="about-text">I am a PhD candidate at the Arizona State University in the School of 
                Earth and Space Exploration, advised by Dr. Joseph G. O’Rourke. I received my BA in Physics from 
                Bowdoin College in 2019 as a first-generation student. Also, I am a NASA FINESST future investigator 
                (FI) studying the internal differentiation, evolution, and potential habitability of Jupiter’s moon, 
                Europa.<br/><br/>
                In my research, I use numerical models to investigate the <b>geophysics and geochemistry of 
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