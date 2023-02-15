import React from "react";

import classes from "./Woman.module.css";

const Woman = () => {
  return (
    <div>
      <div className={classes.womanTitle}>
        <h2>Darauf legen wir Wert</h2>
        <p>
          Wir legen grossen Wert auf Kreativität, Innovation und
          Eigenverantwortung. Die iNovitas lebt von seinen tollen
          Mitarbeitenden, die sich mit innovativem Denken und Einsatzwille
          einbringen und mit einer Macher-Mentalität die digitale Transformation
          mitgestalten. Damit sind wir ein Game-Changer im gesamten, digitalen
          Infrastruktur-Lifecycle-Management. Denn eine lebenswerte Zukunft
          durch nachhaltige Prozesse zu schaffen ist ein zentrales Anliegen bei
          unserer täglichen Arbeit.
        </p>
      </div>
      <div className={classes.woman}>
        <img
          src="https://jobs.inovitas.ch/wp-content/uploads/2022/06/staf.png"
          alt="woman"
        />
        <div className={classes.womanText}>
          <h1>Als Einsteiger oder Berufserfahrene</h1>
          <h3>
            Bei und mit iNovitas gemeinsam wachsen und Einzigartiges bewirken
          </h3>
          <ul className={classes.womanList}>
            <li>
              <img src={require("../Images/checked.png")} />
              <p>Dein Fachwissen aus der Aus- und Weiterbildung anwenden</p>
            </li>
            <li>
              <img src={require("../Images/checked.png")} />
              <p>Dein Know-How und Deine Erfahrung einbringen</p>
            </li>
            <li>
              <img src={require("../Images/checked.png")} />
              <p>Von den vielfältigen Kompetenzen im Team lernen</p>
            </li>
            <li>
              <img src={require("../Images/checked.png")} />
              <p>Gemeinsam neue Herausforderung anpacken</p>
            </li>
            <li>
              <img src={require("../Images/checked.png")} />
              <p>Ein Game-Changer werden und innovative Ideen verwirklichen</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Woman;
