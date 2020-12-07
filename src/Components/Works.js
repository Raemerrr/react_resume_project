import React, {useState, useEffect} from "react";
import "../styles/Works.css";
import axios from "axios";

function Works() {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/raemerrr/react_resume_project/commits",
          {
            headers: {
              Authorization: "bearer 883f4a80e416db37bda2da66f0b131625a18eb54",
              "Content-Type": "application/json",
            },
          }
        );
        // status : 200 (정상)
        if (response["status"] && response["status"] === 200) {
            console.log(JSON.stringify(response));
        }
        //setCommits([]);
      } catch (e) {
        console.log("error : " + e);
      }
    };
    fetchData();
  }, []);

  return (
  <section id="works">
    <h1>커밋 기록</h1>
  </section>
  );
}

export default Works;
