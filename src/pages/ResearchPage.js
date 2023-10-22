import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ResearchPic1 from '../photos/EuropaInteriorCartoon.png';
import ResearchPic2 from '../photos/Ganymede-moon.png';
import ResearchPic3 from '../photos/Europa-Juno.png';
import ResearchPic4 from '../photos/Io-moon.png';
import ResearchPic5 from '../photos/microbe-emoji.png';
import ResearchPic6 from '../photos/Europa-Clipper-Spacecraft.png';
import './ResearchPage.css';

function ResearchPage() {

    const isWideScreen = useMediaQuery({query: '(min-width: 801px)'});
    const isNarrowScreen = useMediaQuery({query: '(max-width: 800px)'});

    const [selectedTopic, setSelectedTopic] = useState(null);

    const topics = [
      { 
        id: 1, 
        title: (<p>&#x1F315; INTERNAL STRUCTURE AND EVOLUTION</p>), 
        imageSrc: ResearchPic1, 
        content: (
            <div className='research-text'>
                <p>
                    Unlike large rocky planets, many icy moons may have formed as a cold 
                    mixture of ice, rock, and metal (e.g., Canup and Ward, 2002). Radioactive 
                    isotopes and tidal forces may warm up a moon’s interior until temperatures 
                    are high enough to melt solids, leading to denser phases migrating to the 
                    planetary center (i.e., differentiation). The balance of heat sources and sinks 
                    may vary across different moons, so the timing of ocean formation, metallic 
                    core formation, and volcanism should be different for each moon, if such 
                    processes occurred at all.
                </p>
                <br/>
                <ol reversed>
                    <li><strong>KT Trinh</strong>, CJ Bierson, JG O'Rourke, EL Shock (in prep.) 
                    Compositional Regimes for Fe-C-S-O Systems in Icy Satellites from Accretion 
                    to Metal Melting.</li>
                    <li><strong>KT Trinh</strong>, CJ Bierson, JG O'Rourke (2023). Slow Evolution of Europa's Interior: 
                    Metamorphic Ocean Origin, Delayed Metallic Core Formation, and Limited Seafloor Volcanism.
                    &nbsp;<i>Science Advances</i> 9 (24), eadf3995.</li>
                </ol>
            </div>
        ),
    },
      { 
        id: 2, 
        title: (<p>&#x1F9F2; ICY MOON DYNAMOS</p>),
        imageSrc: ResearchPic2, 
        content: (
            <div className='research-text'>
                <p>Ganymede is the only moon in our solar system with an 
                    active dynamo—a magnetic field generator, driven by vigorous 
                    convection of conductive material (e.g., Bland et al., 2008). Strangely, 
                    the neighboring moons Europa and Callisto do not have a dynamo today. The 
                    prospect of an ancient dynamo at Europa and Callisto depends on the thermochemical 
                    evolution of their metallic cores, if they have such cores at all. My goal is to 
                    learn whether Ganymede’s modern dynamo may help us understand the intrinsic 
                    magnetic field histories of all the icy Galilean satellites.</p>
            </div>
        )
    },
      { 
        id: 3, 
        title: (<p>&#x1F30A; ORIGIN OF EUROPA'S OCEAN</p>),
        imageSrc: ResearchPic3,
				content: (
					<div className='research-text'>
						<p>
							While Europa is famously known as an ocean world, over 90% of Europa’s mass 
							comes from rock and metal. Consequently, Europa’s ocean-ice shell is thin enough to 
							be entirely sourced from hydrated rock, as opposed to water ice. These two endmember 
							origins for Europa’s ocean—hydrated rock and water ice—imply different temperature 
							and chemical conditions during the ocean building process. Consequently, the 
							origin of Europa’s ocean may lead to different ocean compositions today. As an 
							affiliate for the MAss Spectrometer for Planetary EXploration (MASPEX) instrument via 
							the NASA Europa Clipper mission, I am tying ocean compositional measurements to potential 
							origins for Europa’s ocean.
						</p>
						<br/>
						<ol reversed>
                <li><strong>KT Trinh</strong>, CJ Bierson, JG O'Rourke (2023). Slow Evolution of Europa's Interior: 
                    Metamorphic Ocean Origin, Delayed Metallic Core Formation, and Limited Seafloor Volcanism.
                    &nbsp;<i>Science Advances</i> 9 (24), eadf3995.</li>
            </ol>
					</div>
				)
    },
			{ 
					id: 4, 
					title: (<p>&#x1F30B; ANCIENT OCEAN AT IO?</p>), 
					content: (
						<div className='research-text'>
							<p>The most volcanically active place in our solar system is Jupiter’s moon, Io. 
								However, we do not know whether Io was born as an ice-free body. Previous studies 
								explored the idea of Io losing its initial water inventory during the moon’s 
								evolution (e.g., Bierson and Steinbrügge, 2021). My thermal and compositional 
								evolution models are tools for understanding the diversity of the Galilean moons.</p>
								<br/>
								<ol reversed>
									<li>CJ Bierson, JJ Fortney, <strong>KT Trinh</strong>, MA Kreslavsky (2023). The 
									Effect of Jupiter’s Early Luminosity on the Galilean Satellites. <i>PSJ</i> 4 (7), 122.
</li>
								</ol>
						</div>
					),
					imageSrc: ResearchPic4,
			},
			{ 
				id: 5, 
				title: (<p>&#x1F9A0; DYNAMIC HABITABILITY</p>),
				imageSrc: ResearchPic5,
				content: (
					<div className='research-text'>
						<p>
						Life as we know it requires three things: liquid water, energy, and a biologically 
						essential suite of elements (e.g., Hand et al., 2021). Europa likely meets the first 
						criteria, but the energy and nutrient budget is less clear. One way to think of 
						habitability is through metabolisms—chemical reactions that life uses to get energy. 
						In the absence of light, life in Europa’s ocean must rely on chemosynthesis 
						(e.g., methanogenesis). My models of Europa’s long-term evolution provides ocean c
						ompositions, which can be used to compute the Gibbs free energy associated with 
						various metabolisms.
						</p>
					</div>
				)
		},
			{ 
				id: 6, 
				title: (<p>&#x1F680; NASA SPACECRAFT MISSIONS</p>),
				imageSrc: ResearchPic6,
				content: (
					<div className='research-text'>
						<p>
							I am an affiliate for the <strong>NASA Europa Clipper</strong> mission—a multi-flyby spacecraft 
							mission to assess Europa’s ocean habitability. My affiliation is with the MAss 
							Spectrometer for Planetary EXploration (MASPEX) instrument, which will measure neutral 
							ions near Europa to obtain compositional information. However, my overall research 
							background complements many investigations related to Europa’s interior, composition, 
							and habitability.
						</p><br/>
						<p>
							I also participated in the <strong>NASA JPL Planetary Science Summer School</strong>, where my cohort 
							practiced developing a pre-Phase A mission concept to Neptune’s moon, Triton. I had 
							two roles in both science and engineering. First, I was the Science Champion for the 
							Interiors objective, where I managed our priority science questions and observables to 
							Triton’s interior structure. Second, I was the telecommunications lead, where I 
							interfaced with other engineers regarding communication between our spacecraft and 
							the Deep Space Network (DSN).
						</p><br/>
						<p>
							There will be many exciting spacecraft missions to icy satellites during my lifetime, 
							and I hope to make valuable contributions toward these missions.
						</p>
						<br/>
						<ol reversed>
							<li>
								G Steinbrügge, ... <strong>KT Trinh</strong> (6th out of 8+ authors), ... and the Europa Clipper 
								Geodesy Team (expected 2023). Geodetic Investigations of the Europa Clipper Mission. 
								<i> AGU Fall Meeting</i>
							</li>
							<li>
								A Steckel, ..., <strong>KT Trinh</strong> (21 total authors) (expected 2023). 
								The Science Case for Nautilus: A Multi-flyby Mission Concept to Triton. <i>AGU Fall Meeting</i>
							</li>
							<li>
								T Horvath, ..., <strong>KT Trinh</strong> (21 total authors) (expected 2023). 
								The Architecture of Nautilus: A Multi-flyby Mission Concept to Triton. <i>AGU Fall Meeting</i>
							</li>
						</ol>
					</div>
				)
		},
      // Add more topics as needed
    ];
  
    const handleTileClick = (topicId) => {
      setSelectedTopic(topicId);
    };
  
    const closePopup = () => {
      setSelectedTopic(null);
    };

    return(
        <div className="research-page">
            <div className="vertical-flex">
                <div id="research-summary-container">
                    <p className="research-text"><strong>I study the formation, evolution, 
                        and potential habitability of icy moons. </strong>There are over 200 moons 
                        in our solar system, but for some reason, many of them look and behave 
                        differently. My specialty is using computer models to explore the 
                        processes responsible for the diversity we see in all our moons.<br/><br/>
                        Check out my <a href='https://picturesque-freezer-4ae.notion.site/a85f2bd573fc440c97456d9eeb456147?v=1aa2748f84b84c248138e5191eed26c6'>Notion</a> 
                        &nbsp;for an updated list of ongoing and future projects. I am also happy 
                        to discuss project ideas for collaboration.
                    </p>
                </div>

                <div>
                    <div className="tile-container">
                        {topics.map((topic) => (
                        <div
                            key={topic.id}
                            className="tile"
                            onClick={() => handleTileClick(topic.id)}
                        >
                            <img src={topic.imageSrc} alt={topic.title} />
                            {topic.title}
                        </div>
                        ))}
                    </div>

                    {selectedTopic && (
                        <div>
                            <div className="overlay" onClick={closePopup}></div>
                            <div className="popup">
                                <h2>{topics.find((topic) => topic.id === selectedTopic).title}</h2>
                                <div className="popup-image-container">
                                <img
                                    src={topics.find((topic) => topic.id === selectedTopic).imageSrc}
                                    alt={topics.find((topic) => topic.id === selectedTopic).title}
                                />
                                </div>
                                <p>{topics.find((topic) => topic.id === selectedTopic).content}</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ResearchPage;