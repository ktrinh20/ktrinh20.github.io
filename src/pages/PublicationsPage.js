import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './PublicationsPage.css';

function PublicationsPage() {

    const isWideScreen = useMediaQuery({query: '(min-width: 961px)'});
    const isNarrowScreen = useMediaQuery({query: '(max-width: 960px)'});

    return(
        <div className="about-page">
            <div className="vertical-flex publications-alignment">
                <p id="google-scholar-text">My <a href="https://scholar.google.com/citations?user=zpvV860AAAAJ&hl=en&oi=sra">
                    Google Scholar profile</a>.
                </p>

                <p className="publications-header">Publications</p>
                <ol reversed className="body-text">
                    <li>CJ Bierson, JJ Fortney, <strong>KT Trinh</strong>, M Kreslavsky (submitted). Jupiter's Early Luminosity
                    May Have Driven Off Io's Initial Water Inventory.</li>
                    <li><strong>KT Trinh</strong>, CJ Bierson, JG O'Rourke (submitted). Slow evolution of Europa:
                    metamorphic ocean formation, delayed metallic core formation, and limited seafloor 
                    volcanism.</li>
                </ol>
            </div>
        </div>
    )
}

export default PublicationsPage;