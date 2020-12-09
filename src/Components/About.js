import React, { useState, useEffect } from "react";
import img from "../raemerrr.png";
import "../styles/About.css";

const About = (props) => {
  const [aboutMe, setAboutMe] = useState("");
  const [address, setAddress] =useState("");
  const [email, setEmail] =useState("");

  useEffect(()=>{
    if (props.data) {
      setAboutMe(props.data.aboutMe);
      setAddress(props.data.address);
      setEmail(props.data.email);
    }
  }, []);

  useEffect(()=>{
    if (props.data) {
      setAboutMe(props.data.aboutMe);
      setAddress(props.data.address);
      setEmail(props.data.email);
    }
  }, [props.data]);

  return (
    <section id="about">
      <figure className="image">
        <img src={img} alt="missing" />
        <figcaption>사진은 이주용님의 그림입니다.</figcaption>
      </figure>
      <div className="content">
        <div className="aboutMe">
          <h2>About Me</h2>
          <h4>{aboutMe}</h4>
        </div>
        <div className="contactDetails">
          <h2>Contact Details</h2>
          <h4>{address}</h4>
          <h4>{email}</h4>
        </div>
      </div>
    </section>
  );
}

export default About;
