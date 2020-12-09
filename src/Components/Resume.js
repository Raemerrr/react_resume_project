import React, { useState, useEffect } from "react";
import "../styles/Resume.css";

const Resume = (props) => {
  const [languages, setLanguages] = useState([
    <li key={1}>
      <h1>{"C++"}</h1>
      <progress max={100} value={70} />
    </li>,
    <li key={2}>
      <h1>{"C#"}</h1>
      <progress max={100} value={80} />
    </li>,
    <li key={3}>
      <h1>{"JavaScript"}</h1>
      <progress max={100} value={55} />
    </li>,
  ]);

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
            <h1>{k}</h1>
            <progress max={100} value={(data[k] / total) * 100} />
          </li>
        );
      }
    }
    return resumeDataList;
  };

  useEffect(() => {
    if (props.data) {
      setLanguages(getData(props.data.languages));
    }
  }, []);

  useEffect(() => {
    if (props.data) {
      setLanguages(getData(props.data.languages));
    }
  }, [props.data]);

  return (
    <section id="resume" className="resume">
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
  );
};

export default Resume;
