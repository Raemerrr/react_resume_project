import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import "../styles/Header.css";

function Header(props) {
  const [name, nameSet] = useState("Resume Project");
  const [description, descriptionSet] = useState(
    "React를 공부하기 위해 재미로 만드는 Web Site!"
  );
  const [project, projectSet] = useState(
    "https://github.com/Raemerrr/react_resume_project"
  );
  const [github, githubSet] = useState("https://github.com/Raemerrr/");
  if (props.data) {
    nameSet(props.data.name);
    descriptionSet(props.data.description);
    projectSet(props.ata.project);
    githubSet(props.data.github);
  }

  return (
    <header>
      <nav className="navBar">
        <div className="logo">
          <i className="fab fa-android"></i>
          <a href="#">Raemerrr Blog</a>
        </div>
        <ul className="menu">
          <li>
            <a href="#home">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#">RESUME</a>
          </li>
          <li>
            <a href="#">WORKS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <ul className="icons">
          <li><a
            target="_blank"
            rel="noreferrer"
            href={project}
            className="button btn project-btn"
          >
            <i className="fa fa-book"></i>
          </a></li>
          <li>          
            <a
            target="_blank"
            rel="noreferrer"
            href={github}
            className="button btn github-btn"
          >
            <i className="fab fa-github"></i>
          </a>
          </li>
        </ul>
        <a href="#"
          className="toggleBtn"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(".menu").classList.toggle("active");
            document.querySelector(".icons").classList.toggle("active");
          }}
        >
          <i className="fas fa-bars"></i>
        </a>
      </nav>
      <section id="home">
        <ParticlesBg type="circle" bg={true} />
        <h1>{name}</h1>
        <h3>{description}</h3>
        <hr />
      </section>
    </header>
  );
}

export default Header;
