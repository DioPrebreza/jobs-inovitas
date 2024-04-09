import img from "../Images/section.png";
import "./about.css";

export default function About() {
  return (
    <div>
      <div className="about-container">
        <div className="about">
          <h4>
            Smart cities are created by
            <b> smart people</b>
            <span> and</span>
            <b> cool companies!</b>
          </h4>
          <p>
            Wir haben ein innovatives Projekt lanciert, welches das
            Infrastruktur-<br></br>management anhand von neuen digitalen Mitteln
            revolutioniert. Wir sind stets <br></br> auf der Suche nach neuen
            Talenten, Technologie-Enthusiasten und Machern. <br></br> Komm zu
            uns, um Vieles zu bewegen, neue Trends zu setzen und die digitale{" "}
            <br></br> Zukunft mitzugestalten.
          </p>
          <div className="button">
            <a className="first-btn" href="#jobs">
              Finde Deinen Traumjob
            </a>
            <a
              className="second-btn"
              href="https://www.inovitas.ch/de/unternehmen/team"
            >
              Das iNovitas Team
            </a>
          </div>
        </div>
        <div className="image-content">
          <img src={img} className="img" alt=""></img>
        </div>
      </div>
    </div>
  );
}
