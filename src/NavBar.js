import React, { useRef } from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import shgif_fr2 from "./assets/shgif_fr2.GIF";
import linkedin from "./assets/linkedin.png";
import resume from "./assets/resume.png";
import github from "./assets/github.png";
import medium from "./assets/medium.png";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const url = window.location.href.split("/");
  const path = url[url.length - 1];
  const div = useRef(path ? path : "top");
  const nav = useNavigate();
  return (
    <div className="bar">
      <img src={shgif_fr2} alt="yin-yang-smiley" className="gif" />
      <div className="navbar">
        <button
          className={"top" === div.current ? "matching" : null}
          value="top"
          onClick={(e) => {
            if ("top" !== div.current) {
              document.getElementById(div.current).className = "flush-down";
              div.current = e.target.value;
              setTimeout(() => {
                nav(`/`);
              }, 2990);
            }
          }}
        >
          Home
        </button>
        <button
          className={"skills" === div.current ? "matching" : null}
          value="skills"
          onClick={(e) => {
            if ("skills" !== div.current) {
              document.getElementById(div.current).className = "flush-down";
              div.current = e.target.value;
              setTimeout(() => {
                nav(`/${div.current}`);
              }, 2990);
            }
          }}
        >
          Skills
        </button>
        <button
          className={"work" === div.current ? "matching" : null}
          value="work"
          onClick={(e) => {
            if ("work" !== div.current) {
              document.getElementById(div.current).className = "flush-down";
              div.current = e.target.value;
              setTimeout(() => {
                nav(`/${div.current}`);
              }, 2990);
            }
          }}
        >
          Work
        </button>
        <button
          className={"contact" === div.current ? "matching" : null}
          value="contact"
          onClick={(e) => {
            if ("contact" !== div.current) {
              document.getElementById(div.current).className = "flush-down";
              div.current = e.target.value;
              setTimeout(() => {
                nav(`/${div.current}`);
              }, 2990);
            }
          }}
        >
          Contact
        </button>
      </div>
      <div className="nav-icons">
        <a
          href="https://www.linkedin.com/in/alexander-gubernikoff-b9014b14a/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt={linkedin} className="icons" />
        </a>
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vREeCq_S8vERoS6fQl5RB1DV_nNTskjHgsTSYnOJC_eY3NuD0WoCq_Ssuk2BKoQtUOMxn12B7_F5MTS/pub"
          target="_blank"
          rel="noreferrer"
        >
          <img src={resume} alt={resume} className="icons" />
        </a>
        <a
          href="https://github.com/agubernikoff"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} alt={github} className="icons" />
        </a>
        <a
          href="https://medium.com/@agubernikoff"
          target="_blank"
          rel="noreferrer"
        >
          <img src={medium} alt={medium} className="icons" />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
