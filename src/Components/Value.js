import React from "react";
//styles
import classes from "./Value.module.css";

const Value = () => {
  return (
    <div className={classes.valueContainer}>
      <div className={classes.textTop}>
        <h1>Darauf legen wir Wert</h1>
        <p>
          Wir legen grossen Wert auf{" "}
          <span className={classes.blueText}>Kreativität, Innovation</span> und
          <span className={classes.blueText}> Eigenverantwortung.</span> Die
          iNovitas lebt von seinen tollen Mitarbeitenden, die sich mit
          innovativem Denken und Einsatzwille einbringen und mit einer
          Macher-Mentalität die digitale Transformation mitgestalten. Damit sind
          wir ein Game-Changer im gesamten, digitalen
          Infrastruktur-Lifecycle-Management. Denn eine lebenswerte Zukunft
          durch nachhaltige Prozesse zu schaffen ist ein zentrales Anliegen bei
          unserer täglichen Arbeit.
        </p>
      </div>
      <div className={classes.imgText}>
        <div className={classes.leftImg}>
          <img src='\img\GroupStaff.png' alt='staff' />
        </div>
        <div className={classes.sideText}>
          <h1>Als Einsteiger oder Berufserfahrene</h1>
          <h2>
            Bei und mit iNovitas gemeinsam wachsen und Einzigartiges bewirken
          </h2>
          <div className={classes.item}>
            <img src='\img\checked1.svg' alt='li1' />
            <p>Dein Fachwissen aus der Aus- und Weiterbildung anwenden</p>
          </div>
          <div className={classes.item}>
            <img src='\img\checked1.svg' alt='li2' />
            <p>Dein Know-How und Deine Erfahrung einbringen</p>
          </div>
          <div className={classes.item}>
            <img src='\img\checked1.svg' alt='li3' />
            <p>Von den vielfältigen Kompetenzen im Team lernen</p>
          </div>
          <div className={classes.item}>
            <img src='\img\checked1.svg' alt='li4' />
            <p>Gemeinsam neue Herausforderung anpacken</p>
          </div>
          <div className={classes.item5}>
            <img src='\img\checked1.svg' alt='li5' />
            <p>Ein Game-Changer werden und innovative Ideen verwirklichen</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Value;
