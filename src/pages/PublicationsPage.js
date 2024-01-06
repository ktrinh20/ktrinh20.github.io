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
                    <li>
                        CJ Bierson, JJ Fortney, <b>KT Trinh</b> and M Kreslavsky (2023). Jupiter's Early Luminosity May Have 
                        Driven Off Io's Initial Water Inventory. <i>Planetary Science Journal</i>. <a href='https://iopscience.iop.org/article/10.3847/PSJ/ace2c7'>Link</a>
                    </li>
                    <li>
                        <b>KT Trinh</b>, CJ Bierson, JG O’Rourke (2023). Slow Evolution of Europa's 
                        Interior: Metamorphic Ocean Origin, Delayed Metallic Core Formation, and 
                        Limited Seafloor Volcanism. <i>Science Advances</i>. <a href="https://www.science.org/doi/10.1126/sciadv.adf3955">Link</a>
                    </li>
                </ol>
                <br/>

                <p className="publications-header">Conference abstracts</p>
                <p><b>*</b> Indicates that the author-list is sorted alphabetically, except for the first author.</p><br/>
                <ol reversed className="body-text">
                    <li>
                        <b>KT Trinh</b>, CJ Bierson, JG O’Rourke, EL Shock (2023). Compositional  
                        Evolution of Europa's Fe-FeS Alloys from Accretion to Metal Melting. 
                        AGU Fall meeting. Poster.
                    </li>
                    <li>
                        A Steckel, ..., <b>*KT Trinh</b> (21 total authors) (2023). The Science Case for 
                        Nautilus: A Multi-flyby Mission Concept to Triton. AGU Fall meeting. Poster.
                    </li>
                    <li>
                        T Horvath, ..., <b>*KT Trinh</b> (21 total authors) (2023). The Architecture 
                        of Nautilus: A Multi-flyby Mission Concept to Triton. AGU Fall meeting. Poster.
                    </li>
                    <li>
                        G Steinbrügge, ... <b>KT Trinh</b> (6th out of 8+ authors), ... and the
                        Europa Clipper Geodesy Team (2023). Geodetic Investigations of the Europa 
                        Clipper Mission. AGU Fall meeting. Poster.
                    </li>
                    <li>
                        CJ Bierson, JJ Fortney, <b>KT Trinh</b>, M Kreslavsky (2023). The Effect of 
                        Jupiter's Early Luminosity on the Galilean Satellites. 54th LPSC. Oral.
                    </li>
                    <li>
                        <b>KT Trinh</b>, CJ Bierson, JG O’Rourke (2022). Slow Evolution of Europa: 
                        Metamorphic Ocean Origin, Delayed Metallic Core Formation, and Limited Seafloor 
                        Volcanism. AGU Fall meeting. Oral.
                    </li>
                    <li>
                        <b>KT Trinh</b>, CJ Bierson, JG O’Rourke (2022). Europa’s metallic core may have 
                        taken billions of years to start forming. 53rd LPSC. Oral.
                    </li>
                    <li>
                        <b>KT Trinh</b>, CJ Bierson, JG O’Rourke (2021). Europa’s metallic core may have 
                        taken billions of years to form. AGU Fall meeting. Oral.
                    </li>
                    <li>
                        <b>KT Trinh</b>, KT Trinh, CJ Bierson, JG O’Rourke (2021). The Argument for a 
                        Young Metallic Core at Europa. Lunar Grad Con. Oral.
                    </li>
                    <li>
                        <b>KT Trinh</b>, CJ Bierson, JG O’Rourke (2021). Delayed Timing of Metal-Silicate 
                        Differentiation in Europa. 52nd LPSC. Poster.
                    </li>
                    <li>
                        <b>KT Trinh</b>, Z MA, CA Dalton (2018). Measuring Rayleigh Wave Phase Velocity 
                        in the Antarctic Upper Mantle from Ambient Seismic Noise. AGU Fall meeting. 
                        Poster.
                    </li>
                    <li>
                        LA Blackstone, T Girona, C Huber, KT Trinh, and M Protti (2018). 
                        Periodic Outgassing Preceding Volcanic Eruptions: Preliminary Results on 
                        Turrialba Volcano, Costa Rica. AGU Fall meeting. Poster.
                    </li>
                    <li>
                        T Girona, C Huber, <b>KT Trinh</b>, M Protti, and JF Pacheco (2017). 
                        Using Digital Cameras to Detect Warning Signs of Volcanic Eruptions. 
                        AGU Fall meeting. Poster.
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default PublicationsPage;