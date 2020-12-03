import React, { useState } from "react";
import "../styles/Header.css";

function Header(props) {
  const [project, projectSet] = useState(
    "https://github.com/Raemerrr/react_resume_project"
  );
  const [github, githubSet] = useState("https://github.com/Raemerrr/");
  if (props.data) {
    projectSet(props.ata.project);
    githubSet(props.data.github);
  }

  return (
    <header className="header">
      <nav className="navBar">
        <div className="logo">
          <i className="fab fa-android"></i>
          <a href="#">Raemerrr`s Blog</a>
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
    </header>
  );
}

export default Header;
