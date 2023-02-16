import './parallax.css'
import Para from '../Images/parallax.png'
import Bulb from '../Images/Bulb.png'
import Notification from '../Images/Notification.png'
import Users from '../Images/Users_Group.png'
import Arrow from '../Images/Arrow-Right.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import { Parallax } from 'react-parallax';


 
const Container = () => (
    <Parallax  bgImage={Para} bgImageAlt="the cat" strength={200}>
       
        <div className='parallax'>
            <div className="text_section3">
                <div className="containerpara">
                    <div className='row'>
                        <div className="title">
                            <h2>Why #JoiniNovitas?</h2>
                        </div>
                    </div>
                    <div className="row">
                          <div className="clo">
                          <FontAwesomeIcon icon="fa-regular fa-clock" />
                            <h5>Mobil-flexibles Arbeitsmodell</h5>
                            <p>Zeitliche und räumliche Arbeitsflexibilität (mit Home-Office- und Remote-Work-Möglichkeiten) – für eine optimale Work-Life-Balance, reduzierte Pendelzeit und Umweltbelastung.</p>
                        </div>
                        <div className="clotwo">
                            <img src={Bulb}></img>
                            <h5>Game-Changer-Technologie</h5>
                            <p>Arbeiten an der digitalen Transformation mit einer Next-Gen-Technologie, spannenden Projekten und einer herausfordernden, abwechslungsreichen Tätigkeit.</p>
                        </div>
                        <div className="clothree">
                            <img src={Notification}></img>
                            <h5>Attraktiver Standort</h5>
                            <p>Moderne Arbeitsplätze im Zentrum der Stadt Baden. Sehr gut mit öffentlichen Verkehrsmitteln erreichbar (5 Min. zu Fuss vom Bahnhof) und umgeben von zahlreichen Restaurants, Bars und Geschäften.</p>
                        </div>
                         <div className="clofour">
                            <img src={Users}></img>
                            <h5>Flache Hierarchien</h5>
                            <p>Kollegiales Miteinander, flexible Arbeitsweise mit kurzen Entscheidungs- und Kommunikationswegen sowie Eigenverantwortung und -initiative.</p>
                        </div>
                        <div class="clofive">
                            <img src={Arrow}></img>
                            <h5>Entwicklungsmöglichkeiten</h5>
                            <p>Verschiedene berufliche und persönliche Entwicklungsmöglichkeiten in unterschiedlichen Abteilungen / Fort- und Weiterbildungsmöglichkeiten, ein tolles Netzwerk und Branchen-Know-How.</p>
                        </div>
                         <div class="closix">
                            <img src={Notification}></img>
                            <h5>Aktivitäten &amp; Spass</h5>
                            <p>Fröhliche und interessante gemeinsame Freizeit-, Sport- und Kultur-Aktivitäten, After-Work-Apéros, Team-Lunches und Austausch-Sessions während des ganzen Jahres.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Parallax>

)

export default Container;
