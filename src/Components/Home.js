import React from "react";
import ParticlesBg from "particles-bg";
import "../styles/Home.css";
import { Tween, SplitWords } from "react-gsap";

const Home = () => {
  return (
    <section className="home" id="home">
      <ParticlesBg type="circle" bg={true} />
      <div className="animation">
        <Tween from={{ x: "100vw" }} stagger={0.5} ease="elastic.out(0.1, 0.1)">
          <SplitWords
            wrapper={
              <div style={{ display: "inline-block", fontSize: "40px" }} />
            }
          >
          Welcome to Raemerrr`s Blog.🙇
          </SplitWords>
        </Tween>
      </div>
    </section>
  );
};

export default Home;
