import React, { useState, useEffect } from "react";
import "../styles/Works.css";
import { CSSTransitionGroup } from "react-transition-group";
import axios from "axios";

const Works = () => {
  const [commits, setCommits] = useState([
    <tr key={0}>
      <td key={0}>이슈 발생</td>
      <td key={1}>Github API 토큰 만료 혹은 에러</td>
    </tr>,
  ]);

  useEffect(() => {
    console.log("Works useEffect[] 실행");
    const getData = (data) => {
      const worksDataList = [];
      for (let i of data) {
        worksDataList.push(
          <tr key={worksDataList.length * 10}>
            <td key={worksDataList.length * 10}>{i.commit.author.date}</td>
            <td key={worksDataList.length * 10 + 1}>{i.commit.message}</td>
          </tr>
        );
      }
      return worksDataList;
    };
    //Works.js DataSetting
    (async () => {
      await axios({
        url:
          "https://api.github.com/repos/raemerrr/react_resume_project/commits",
        method: "get",
        timeout: 8000,
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setCommits(getData(res.data));
          console.log("Works.js DataSetting");
        })
        .catch((err) => console.error(err));
    })();
  }, []);

  return (
    <CSSTransitionGroup
      transitionName="WorksTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <section className="works">
        <h1>커밋 기록</h1>
        <div className="tableDiv">
          <table>
            <thead>
              <tr>
                <th>시간</th>
                <th>메세지</th>
              </tr>
            </thead>
            <tbody>{commits}</tbody>
          </table>
        </div>
      </section>
    </CSSTransitionGroup>
  );
};

export default Works;
