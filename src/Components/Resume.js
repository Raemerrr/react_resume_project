import React, { useState, useEffect } from "react";
import { CSSTransitionGroup } from "react-transition-group";
import "../styles/Resume.css";
import axios from "axios";

const logoSrc = {
  PYTHON:
    "https://img.shields.io/badge/Python-3766AB?style=flat-square&logo=Python&logoColor=white",
  JAVA:
    "https://img.shields.io/badge/Java-007396?style=flat-square&logo=Java&logoColor=white",
  "C++":
    "https://img.shields.io/badge/C++-00599C?style=flat-square&logo=C%2B%2B&logoColor=white",
  C:
    "https://img.shields.io/badge/C-A8B9CC?style=flat-square&logo=C&logoColor=white",
  JAVASCRIPT:
    "https://img.shields.io/badge/Javascript-ffb13b?style=flat-square&logo=javascript&logoColor=white",
  CSS:
    "https://img.shields.io/badge/css-1572B6?style=flat-square&logo=css3&logoColor=white",
  GO:
    "https://img.shields.io/badge/Go-11B48A?style=flat-square&logo=Go&logoColor=white",
  HTML:
    "https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white",
};

const Resume = () => {
  const [languages, setLanguages] = useState([
    <li key={1}>
      <img src={logoSrc["C++"]} alt="missing" />
      <progress max={100} value={70} />
    </li>,
    <li key={2}>
      <img src={logoSrc.C} alt="missing" />
      <progress max={100} value={80} />
    </li>,
    <li key={3}>
      <img src={logoSrc.JAVASCRIPT} alt="missing" />
      <progress max={100} value={55} />
    </li>,
  ]);

  useEffect(() => {
    const getData = (data) => {
      const resumeDataList = [];
      let total = 0;
      for (let k in data) {
        total += data[k];
      }
      if (total > 0) {
        for (let k in data) {
          resumeDataList.push(
            <li key={resumeDataList.length}>
              <img src={logoSrc[k.toUpperCase()]} alt={k.toUpperCase()} />
              <progress max={100} value={(data[k] / total) * 100} />
            </li>
          );
        }
      }
      return resumeDataList;
    };
    //Resume.js DataSetting
    (async () => {
      await axios({
        url:
          "https://api.github.com/repos/raemerrr/react_resume_project/languages",
        method: "get",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setLanguages(getData(res.data));
          console.log("Resume.js DataSetting");
        })
        .catch((err) => console.error(err));
    })();
    console.log("Resume useEffect() []!!");
  }, []);

  return (
    <CSSTransitionGroup
      transitionName="ResumeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <section className="resume">
        <div className="contents">
          <div className="title">
            <h3>WORK</h3>
          </div>
          <ol className="document">
            <span>
              <h1>SAMSUNG S-1 Corporation</h1>
              <p>#Asp.net, #JavaScript, #MS-SQL, #Winform, #Setup Project...</p>
            </span>
            <span>
              <h1>Agram Corporation</h1>
              <p>#Network Engineer, #CCNA</p>
            </span>
          </ol>
        </div>
        <div className="contents">
          <div className="title">
            <h3>SKILLS</h3>
          </div>
          <ol className="document">{languages}</ol>
        </div>
      </section>
    </CSSTransitionGroup>
  );
};

export default Resume;
