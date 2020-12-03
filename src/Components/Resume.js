import React from "react";
import "../styles/Resume.css";
function Resume() {
  return (
    <section id="resume" className="resume">
      <div className="contents">
          <h5 className="contentsHeader">WORK</h5>
        {/* <div className="workTitle"></div> */}
        <div className="workContents">
          <h1>SAMSUNG S-1 Corporation</h1>
          <h1>Agram Corporation</h1>
        </div>
      </div>
      <div className="contents">
          <h5  className="contentsHeader">SKILLS</h5>
        <div className="skillsTitle"></div>
        <div className="skillsContents"></div>
      </div>
    </section>
  );
}

export default Resume;
