import React from 'react';
import { useMediaQuery } from 'react-responsive';
import WSYCSIG from '../photos/wsycs-ig.png';
import WSYCSVolunteer from '../photos/wsycs-volunteer.png';
import './SciCommPage.css';

function SciCommPage() {

    const isWideScreen = useMediaQuery({query: '(min-width: 961px)'});
    const isNarrowScreen = useMediaQuery({query: '(max-width: 960px)'});

    return(
        <div className="outreach-page">
            <div className="vertical-flex">

                <div id="wsycs-summary-container">
                    <p className="wsycs-text"><strong>Why Should You Care Science (WSYCS) </strong>
                    is an Instagram STEAM outreach page where graduate students and postdocs communicate 
                    about STEM in plain-speak. Each post is a visual slideshow that answers three questions 
                    on about a topic: 1) what is it? 2) why is it important? And 3) why should you care?
                    </p>
                </div>


                <div className={isWideScreen ? "horizontal-flex wsycs-container" : "vertical-flex wsycs-container"}>
                    <a href="https://www.instagram.com/whyshouldyoucarescience"><img className="wsycs-pic" src={WSYCSIG}/></a>
                    <a href="https://ktrinh20.github.io/#/volunteer/"><img className="wsycs-pic" src={WSYCSVolunteer}/></a>
                </div>
            </div>
        </div>
    )
}

export default SciCommPage;