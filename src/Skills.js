import React from "react";
import html from "./assets/skills/html5.png";
import css from "./assets/skills/css.png";
import js from "./assets/skills/js.png";
import react from "./assets/skills/react.png";
import ruby from "./assets/skills/ruby.png";
import rails from "./assets/skills/rails.png";
import ps from "./assets/skills/ps.png";

function Skills() {
  const skills = [react, ruby, rails, ps, html, css, js];
  const skillIcons = skills.map((s) => (
    <img
      className="skill-icons"
      key={skills.indexOf(s)}
      src={s}
      alt={"skill icon"}
    />
  ));
  return (
    <div id="skills" className="flush-up">
      <h1 className="contact-name">Skills</h1>
      <div className="skills-container">{skillIcons}</div>
    </div>
  );
}

export default Skills;
