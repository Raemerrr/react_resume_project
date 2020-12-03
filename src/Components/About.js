import React, { useState } from "react";
import img from "../raemerrr.png";
import "../styles/About.css";

function About(props) {
  const [aboutMe, aboutMeSet] = useState("기본 값");
  if (props.data) {
    aboutMeSet(props.data.adboutMe);
  }
  return (
    <section id="about">
      <figure className="image">
        <img src={img} alt="missing" />
        <figcaption>사진은 이주용님의 그림입니다.</figcaption>
      </figure>
      <div className="content">
        <div className="aboutMe">
          <h2>About Me</h2>
        </div>
        <div className="contactDetails">
          <h4>{aboutMe}</h4>
        </div>
      </div>
    </section>
  );
}

export default About;
