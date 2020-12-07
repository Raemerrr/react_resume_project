import React, { useState } from "react";
import img from "../raemerrr.png";
import "../styles/About.css";

function About(props) {
  const [aboutMe, setAboutMe] = useState("저는 코딩을 좋아하고 즐기는 사람입니다. React에 관심이 생겨 해당 프로젝트를 진행하게 되었습니다. 프론트엔드 엔지니어로 거듭나도록 하겠습니다.");
  const [address, setAddress] =useState("🏡 경기도 안산시 단원구 광덕 1로 80");
  const [email, setEmail] =useState("📩 foals18@gmail.com");
  if (props.data) {
    setAboutMe(props.data.adboutMe);
    setAddress(props.data.contactDetails.address);
    setEmail(props.data.contactDetails.email);
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
