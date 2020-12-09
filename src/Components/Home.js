import React, { useState, useEffect } from "react";
import ParticlesBg from "particles-bg";
import "../styles/Home.css";

const Home = (props) => {
  const [name, setName] = useState("기본 값");
  const [description, descriptionSet] = useState("기본 값");

  useEffect(()=>{
    if(props.data){
      setName(props.data.name);
      descriptionSet(props.data.description);
    }
  }, []);

  useEffect(()=>{
    if(props.data){
      setName(props.data.name);
      descriptionSet(props.data.description);
    }
  }, [props.data]);

  return (
    <section className="home" id="home">
      <ParticlesBg type="circle" bg={true} />
      <h1>{name}</h1>
      <h3>{description}</h3>
      <hr />
    </section>
  );
}

export default Home;
