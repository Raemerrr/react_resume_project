import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import "../styles/Home.css";
function Home(props) {
  const [name, nameSet] = useState("Resume Project");
  const [description, descriptionSet] = useState(
    "React를 공부하기 위해 재미로 만드는 Web Site!"
  );
  if (props.data) {
    nameSet(props.data.name);
    descriptionSet(props.data.description);
  }
  return (
    <div>
      <ParticlesBg type="circle" bg={true} />
      <section className="home" id="home">
        <h1>{name}</h1>
        <h3>{description}</h3>
        <hr />
      </section>
    </div>
  );
}

export default Home;
