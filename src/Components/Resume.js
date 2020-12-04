import React from "react";
import "../styles/Resume.css";
function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="contents">
        <div className="title">
          <h3>WORK</h3>
        </div>
        <div className="document">
          <h1>SAMSUNG S-1 Corporation</h1>
          <h1>Agram Corporation</h1>
        </div>
      </div>
      <div className="contents">
        <div className="title">
          <h3>SKILLS</h3>
        </div>
        <div className="document">
          <div className="skill">
            <h1>C++</h1>
            <progress max="100" value="70" />
          </div>
          <div className="skill">
            <h1>C#</h1>
            <progress max="100" value="85" />
          </div>
          <div className="skill">
            <h1>JavaScript</h1>
            <progress max="100" value="55" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
