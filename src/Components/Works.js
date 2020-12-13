import React, { useState, useEffect } from "react";
import "../styles/Works.css";

const Works = (props) => {
  const [commits, setCommits] = useState([
    <tr key={0}>
      <td key={0}>이슈 발생</td>
      <td key={1}>Github API 토큰 만료 혹은 에러</td>
    </tr>
  ]);

  const getData = (data) => {
    //여기선 of문법을 이용해본다. (*주의 IE 지원하지 않음..)
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

  useEffect(() => {
    if (props.data) {
      setCommits(getData(props.data));
    }
  }, [props.data]);

  return (
    <section id="works">
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
  );
};

export default Works;
