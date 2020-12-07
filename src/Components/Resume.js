import React, { useState, useEffect } from "react";
import "../styles/Resume.css";
import axios from "axios";

function Resume() {
  const [languages, setLanguages] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/raemerrr/react_resume_project/languages",
          {
            headers: {
              Authorization: "bearer 883f4a80e416db37bda2da66f0b131625a18eb54",
              "Content-Type": "application/json",
            },
          }
        );
        let itemList = [
          <li>
            <h1>{"C++"}</h1>
            <progress max={100} value={70} />
          </li>,
          <li>
            <h1>{"C#"}</h1>
            <progress max={100} value={80} />
          </li>,
          <li>
            <h1>{"JavaScript"}</h1>
            <progress max={100} value={55} />
          </li>,
        ];
        // status : 200 (정상)
        if (response["status"] && response["status"] === 200) {
          itemList = [];
          let total = 0;
          for (let k in response["data"]){
            total += response["data"][k];
          }
          for (let k in response["data"]) {
            itemList.push(
              <li key={itemList.length}>
                <h1>{k}</h1>
                <progress max={100} value={(response["data"][k] / total) * 100} />
              </li>
            );
          }
        }
        setLanguages(itemList);
      } catch (e) {
        console.log("error : " + e);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="resume" className="resume">
      <div className="contents">
        <div className="title">
          <h3>WORK</h3>
        </div>
        <ol className="document">
          <h1>SAMSUNG S-1 Corporation</h1>
          <h1>Agram Corporation</h1>
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
}

export default Resume;
