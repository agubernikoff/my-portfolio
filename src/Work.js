import { React, useState } from "react";
import Tilt from "react-parallax-tilt";
import PIXART from "./assets/PIXART.png";
import rickandmorty from "./assets/rickandmorty.png";
import opaque from "./assets/opaque.png";
import loading from "./assets/loading.gif";
import cap from "./assets/cap.png";

function Work() {
  const [detail, setDetail] = useState(true);
  const [detail2, setDetail2] = useState(true);
  const [detail3, setDetail3] = useState(true);
  const [detail4, setDetail4] = useState(true);

  function enterYe() {
    setDetail(false);
    setDetail2(true);
    setDetail3(true);
    setDetail4(true);
  }

  function exitYe() {
    setDetail(true);
    setDetail2(true);
    setDetail3(true);
    setDetail4(true);
  }
  function enterLeaf() {
    setDetail(true);
    setDetail2(false);
    setDetail3(true);
    setDetail4(true);
  }

  function exitLeaf() {
    setDetail(true);
    setDetail2(true);
    setDetail3(true);
    setDetail4(true);
  }
  function enterGroup() {
    setDetail(true);
    setDetail2(true);
    setDetail3(false);
    setDetail4(true);
  }

  function exitGroup() {
    setDetail(true);
    setDetail2(true);
    setDetail3(true);
    setDetail4(true);
  }
  function enterEarn() {
    setDetail(true);
    setDetail2(true);
    setDetail3(true);
    setDetail4(false);
  }

  function exitEarn() {
    setDetail(true);
    setDetail2(true);
    setDetail3(true);
    setDetail4(true);
  }

  return (
    <div id="work" className="flush-up">
      <h1 className="contact-name">WORK</h1>     
      <div className="work-hold">
        <Tilt className="tilt">
          {/* <h2>Keeping Up With Kanye</h2> */}          
          <div className="projects">
            {!detail ? (
              <div
                className="details"
                onMouseEnter={() => enterYe()}
                onMouseLeave={() => exitYe()}
              >
                <div className="link-hold">
                  <img src={opaque} className="opaque" alt="opaque" />
                  <a
                    className="link"
                    href="https://phase-4-project-pixel-app.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Deployed Site
                  </a>
                  <a
                    className="link"
                    href="https://github.com/agubernikoff/phase4project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ) : null}
            <img
              className="ye"
              src={PIXART}
              onMouseEnter={() => enterYe()}
              onMouseLeave={() => exitYe()}
              alt="something"
            />
          </div>
        </Tilt>
        <Tilt className="tilt">
           
          <div className="projects">
            {!detail2 ? (
              <div
                className="details"
                onMouseEnter={() => enterLeaf()}
                onMouseLeave={() => exitLeaf()}
              >
                <div className="link-hold">
                  <img src={opaque} className="opaque" alt="opaque" />
                  <a
                    className="link"
                    href="https://tylergubser.github.io/phase1RickAndMortyProject/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Deployed Site
                  </a>
                  <a
                    className="link"
                    href="https://github.com/agubernikoff/phase1RickAndMortyProject"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ) : null}
            <img
              className="ye"
              src={rickandmorty}
              onMouseEnter={() => enterLeaf()}
              onMouseLeave={() => exitLeaf()}
              alt="something"
            />
          </div>
        </Tilt>
        <Tilt className="tilt">
          <div className="projects">
            {!detail3 ? (
              <div
                className="details"
                onMouseEnter={() => enterGroup()}
                onMouseLeave={() => exitGroup()}
              >
                <div className="links-hold">
                  <img src={opaque} className="opaque" alt="opaque" />
                  {/* <a
                    className="links"
                    href="https://keeping-up-with-kanye.herokuapp.com/"
                    target="_blank"
                  >
                    Demo
                  </a> */}
                  <a
                    className="links"
                    href="https://github.com/agubernikoff/loading"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ) : null}
            <img
              className="ye"
              src={loading}
              onMouseEnter={() => enterGroup()}
              onMouseLeave={() => exitGroup()}
              alt="something"
            />
          </div>
        </Tilt>
        <Tilt className="tilt">
          <div className="projects">
            {!detail4 ? (
              <div
                className="details"
                onMouseEnter={() => enterEarn()}
                onMouseLeave={() => exitEarn()}
              >
                <div className="links-hold">
                  <img src={opaque} className="opaque" alt="opaque" />
                  <a
                    className="links"
                    href="https://youtu.be/E4Ft8SYuUGA"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    className="links"
                    href="https://github.com/agubernikoff/phase5project"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ) : null}
            <img
              className="ye"
              src={cap}
              onMouseEnter={() => enterEarn()}
              onMouseLeave={() => exitEarn()}
              alt="something"
            />
          </div>
        </Tilt>
      </div>
    </div>
  );
}

export default Work;
