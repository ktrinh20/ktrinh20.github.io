import React from 'react';
import { useMediaQuery } from 'react-responsive';
import WSYCSIG from '../photos/wsycs.png';
import './VolunteerPage.css';

function VolunteerPage() {

    const isWideScreen = useMediaQuery({query: '(min-width: 961px)'});
    const isNarrowScreen = useMediaQuery({query: '(max-width: 960px)'});

    return(
        <div className="outreach-page">
            <div className="vertical-flex">
                <div className={isWideScreen ? "horizontal-flex container" : "vertical-flex container"}>
                    <div className="vertical-flex">
                    <p className="wsycs-text"><u>The Problem</u><br/>There is a big gap between scientists and the broader community. 
                    As a result, the common person is often out of touch with science that could (and often should) 
                    be used to guide societal values and policy. There is a need for digestable science that can 
                    reach non-scientists in an engaging way.
                    </p>

                    <p className="wsycs-text"><u>Our Goals</u><br/><a href="https://www.instagram.com/whyshouldyoucarescience/">
                        @whyshouldyoucarescience (WSYCS)</a> is an Instagram SciComm page that has three goals:
                    </p>
                    <ol className="wsycs-text">
                        <li>Create engaging yet trustworthy STEM content directly from subject-matter experts.</li>
                        <li>Make STEM more accessible to the broader community.</li>
                        <li>Provide a platform for PhD students, med students, and post-docs to practice 
                            communicating the importance of their work to the common person, NOT an expert in 
                            their field.</li>
                    </ol>
                    </div>

                    <img  className="wsycs-pic" src={WSYCSIG}/>
                </div>
                <p className="wsycs-text"><u>Get Started!</u><br/>Interested in volunteering? We'd love for 
                    you to contribute a post talking about something within your expertise! We have a 
                    a <a href="https://www.canva.com/design/DAEYG_YJ1HU/bL8b6yL5dS9Kfo3S3FLzJg/view?utm_content=DAEYG_YJ1HU&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton&mode=preview">
                         template</a> for your post. Generally, each post should answer three questions for their audience:
                </p>
                <ol className="wsycs-text">
                    <li>What is it?</li>
                    <li>Why is it important?</li>
                    <li>Why should you care? (concluding slide before references)</li>
                </ol>
                <p className="wsycs-text">You're encouraged to elaborate on your topic between your 
                    "Why is it important?" and "Why should you care about it?" slides. 
                    Additionally, people may ask questions about your work! You're more than welcomed 
                    (in fact encouraged) to engage with your audience in the comments section of your 
                    post on Instagram. If you don't have an Instagram, we can forward the questions to 
                    you and comment from the WSYCS account.
                </p>
                <p className="wsycs-text">All posts will be reviewed before submission. We will provide feedback to (hopefully) 
                    bring out the best in your work. Don't hesitate to email me with any questions at 
                    <strong> kttrinh1 (at) asu (dot) edu</strong>.
                </p>

                <p className="wsycs-text"><u>Tips and rules</u><br/>
                    <ol>
                        <li>
                            <b>Follow the template.</b>For consistency, please use this 
                             <a href="https://www.canva.com/design/DAEYG_YJ1HU/KgmX9jrcUv7VSVLbcbbPsA/view?utm_content=DAEYG_YJ1HU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink&mode=preview">Canva template</a>
                             and include a title, “What is it?”, “Why is it important?”, “Why should 
                            you care (conclusion)”, references, and about the author slide. You have 
                            creative freedom outside of that.
                        </li>
                        <li>
                            <b>Avoid jargon.</b> If you must use a technical term, 
                            please define it upon use.
                        </li>
                        <li>
                            <b>Never say "scientifically proven".</b> Avoid strong words 
                            (e.g. always, never, everything) and use appropriate qualifiers 
                            (e.g. mostly, usually, rarely, etc.) with reason. Be wary of overly 
                            endorsing a statement.
                        </li>
                        <li>
                            <b>Cite your sources.</b> The lead author (+ et al.), publication year, 
                            and paper title will be enough. Include a reference slide as your 
                            penultimate slide. It is okay to use a "+" instead of "et al.".
                        </li>
                        <li>
                            <b>Cite your images.</b> Image credit must be listed subtly at the 
                            bottom of each slide. See the example as a guide.
                        </li>
                        <li>
                            <b>Choose a color theme and stick with it. </b> <a href="https://coolors.co/">Coolers.co</a>
                            is a great free website that generates color palletes.
                        </li>
                        <li>
                            <b>Use the specified fonts.</b> League Spartan for headers, Now for body text.
                        </li>
                        <li>
                            <b>Limit font sizes</b>. Try to create as little variation as possible. Be 
                            consistent with your choices (e.g., 24 pt. for header text, 16 pt. for body text).
                        </li>
                        <li>
                            <b>Make use of white space.</b> In this context, "white space" refers to all empty real 
                            estate on your slide, which matches your background color (i.e., doesn't have to be white). 
                            Slides with white space prevent your content from appearing over crowded.
                        </li>
                    </ol>
                </p>

            </div>
        </div>
    )
}

export default VolunteerPage;