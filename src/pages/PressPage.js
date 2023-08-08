import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './PressPage.css';

function PressPage() {

    const isWideScreen = useMediaQuery({query: '(min-width: 961px)'});
    const isNarrowScreen = useMediaQuery({query: '(max-width: 960px)'});

    return(
        <div className="about-page">
            <div className="vertical-flex publications-alignment">
                <p className="publications-header">Selected Press</p>
                <ol className="remove-bullet">
                    <li>
                        Coming soon: the Planetary Radio Podcast (via Planetary Society).
                    </li>
                    <br/>
                    <li>
                        <b>2023 - </b>Slow Evolution of Europa's Interior
                        : <a href='https://azpbs.org/horizon/2023/07/exploring-jupiters-moon-europa/'>Arizona PBS</a>
                        , <a href='https://news.asu.edu/20230616-asu-study-jupiters-moon-europa-may-have-had-slow-evolution?utm_content=bufferb256d&utm_medium=social&utm_source=linkedin.com&utm_campaign=buffer'>ASU News</a>
                        , <a href='https://phys.org/news/2023-06-jupiter-moon-europa-evolution.html'>phys.org</a>
                        , <a href='https://www.space.com/jupiter-ocean-moon-europa-no-fully-formed-core'>space.com</a>.
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default PressPage;