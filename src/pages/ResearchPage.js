import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ResearchPic1 from '../photos/Asset 9.png';
import ResearchPic2 from '../photos/Asset 14.png';
import ResearchPic3 from '../photos/Asset 11.png';
import ResearchPic4 from '../photos/Asset 12.png';
import './ResearchPage.css';

function ResearchPage() {

    const isWideScreen = useMediaQuery({query: '(min-width: 801px)'});
    const isNarrowScreen = useMediaQuery({query: '(max-width: 800px)'});

    const [selectedTopic, setSelectedTopic] = useState(null);

    const topics = [
      { 
        id: 1, 
        title: (<div>Icy Moon Interiors</div>), 
        imageSrc: ResearchPic1, 
        content: (
            <div className='research-text'>
                <p>
                Icy moons likely formed as a cold unlayered mixture containing water-ice 
                and/or hydrated rock. Consequently, icy moons like Europa may have taken 
                billions of years to warm up sufficiently to trigger metallic core formation, 
                if this event occurred at all (Trinh et al., 2023). I am interested the timing and 
                extent of differentiation in moons, as well as the present-day interior structure of 
                such moons. 
                </p>
                <br/>
                <p><strong>Science questions: </strong></p><br/>
                <ul>
                    <li>How old is Europa's metal core, if it exists?</li>
                    <li>What is the composition of metal cores in outer solar system moons?</li>
                    <li>What is the origin of Europa's ocean?</li>
                    <li>Is Europa's rocky mantle partially hydrated today?</li>
                </ul>
                <br/>
                <p><strong>Relevant papers: </strong></p><br/>
                <ol reversed>
                    <li>CJ Bierson, JJ Fortney, <strong>KT Trinh</strong>, MA Kreslavsky (2023). The 
                	Effect of Jupiter’s Early Luminosity on the Galilean Satellites. <i>PSJ</i> 4 (7), 122.</li>
                    <li><strong>KT Trinh</strong>, CJ Bierson, JG O'Rourke (2023). Slow Evolution of Europa's Interior: 
                    Metamorphic Ocean Origin, Delayed Metallic Core Formation, and Limited Seafloor Volcanism.
                    &nbsp;<i>Science Advances</i> 9 (24), eadf3995.</li>
                </ol>
            </div>
        ),
    },
    { 
        id: 2, 
        title: (<div>Planetary Magnetism</div>),
        imageSrc: ResearchPic3, 
        content: (
            <div className='research-text'>
                <p>I am primarily interested in two kinds of planetary magnetic fields. First, 
                    there are induced magnetic fields, which reveal the existence of a salty ocean 
                    underneath the surfaces if icy moons. Induced magnetic field strength can be used 
                    as a constraint for determining the size and composition of the subsurface ocean. 
                    Second, there are planetary dynamos, which are magnetic field generators driven by 
                    the vigorous motion of electrically conductive material. The most plausible 
                    dynamo mechanism in icy moons would be convection in an iron-rich core. Ganymede is 
                    the only moon known to sustain an active dynamo today, while our Moon shows strong 
                    evidence of an ancient dynamo. Io, Europa, and Callisto either have 
                    weak dynamos below the detection limit of the Galileo magnetometer, or they lack 
                    dynamos entirely. Crucially, the absence or presence of dynamos places strong constraints 
                    on the interior structure and thermal history of celestial bodies.
                </p>
                <br/>
                <p><strong>Science questions: </strong></p><br/>
                    <ul>
                        <li>What moons in our solar system have dynamos today? And in the past?</li>
                        <li>What is the likely age of Ganymede's dynamo?</li>
                        <li>Is ongoing metal core formation consistent with Ganymede's dynamo?</li>
                        <li>What kinds of core crystallization mechanisms (e.g., Fe snow, FeS layers, inner core growth) are 
                            relevant to moon-sized bodies?
                        </li>
                    </ul>
                    <br/>
                    <p><strong>Relevant papers: </strong></p><br/>
                    <ol reversed>
                        <li><strong>KT Trinh</strong>, CJ Bierson, JG O'Rourke (2024). A Critical 
                        Core Size for Dynamo Action at the Galilean Satellites.
                        <i>Geophysical Research Letters</i></li>
                    </ol>
            </div>
        )
    },
			{ 
				id: 3, 
				title: (<div>Ocean Habitability</div>),
				imageSrc: ResearchPic4,
				content: (
					<div className='research-text'>
						<p>
						Life as we know it requires three things: liquid water, energy, and a 
                        biologically essential suite of elements (e.g., Hand et al., 2021). 
                        Europa and Enceladus meet the first criteria, but the energy and nutrient 
                        budget over geologic time is less clear. One way to think of habitability is 
                        through metabolisms—chemical reactions that life uses to get energy (e.g., 
                        methanogenesis). Metabolisms require a steady delivery of heat and chemical 
                        energy to avoid a “thermodynamic extinction” (Gaidos et al., 1999). 
                        My chemical evolution models provide ocean compositions, which can be 
                        used to compute the Gibbs free energy associated with various metabolisms.
						</p>
                        <br/>
                        <p><strong>Science questions: </strong></p><br/>
                        <ul>
                            <li>Does Europa experience seafloor volcanism today? Or in the past?</li>
                            <li>What is the origin of Europa's ocean?</li>
                            <li>Is Europa's seafloor today conducive for rock-water reactions (i.e., serpentinization)?</li>
                            <li>How has the composition of Europa's ocean changed over time?</li>
                            <li>How has the energy available for chemosynthetic organisms changed over time?</li>
                        </ul>
                        <br/>
                        <p><strong>Relevant papers: </strong></p><br/>
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
            title: (<div>Icy Surfaces</div>),
            imageSrc: ResearchPic2,
                    content: (
                        <div className='research-text'>
                            <p>
                            The surfaces of icy moons are incredibly diverse. Enceladus, 
                            a moon of Saturn, actively erupts water out of parallel fissures at the 
                            south polar region. Europa, a moon of Jupiter, boasts a deformed surface 
                            full of ridges, irradiated salts, and chaotic terrain. Ganymede and Callisto 
                            are similar in size and bulk density, with adjacent orbits around Jupiter. Yet, 
                            Ganymede displays a tectonically evolved surfaces, whereas Callisto's surface shows 
                            no sign of resurfacing. There are 200+ other moons in our solar system with varied 
                            traits too. However, existing studies have yet to solve whether common processes 
                            or rare events are the primary culprit for icy moon diversity.
                            <br/><br/>
                            <p><strong>Science questions: </strong></p><br/>
                            <ul>
                                <li>How did Enceladus initially create its Tiger Stripe fractures?</li>
                                <li>How does Enceladus maintain actively erupting fissures?</li>
                                <li>Could Europa's double ridges be the frozen remnants of an erupting fissure?</li>
                                <li>Could metallic core formation at Ganymede (but not Callisto) explain the Ganymede-Callisto surface dichotomy?</li>
                            </ul>
                            </p>
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
                    <p className="research-text"><strong>I study the structure, evolution, 
                        and potential habitability of outer solar system moons. </strong>There are over 300 moons 
                        in our solar system, but for some reason, many of them look and behave 
                        differently. My specialty is using computer models to explore the 
                        processes responsible for the diversity we see in all our moons.<br/><br/> 
                        I am also happy to discuss project ideas for collaboration.
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