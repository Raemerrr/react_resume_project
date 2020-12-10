import React, { useState, useEffect } from "react";
import "../styles/Header.css";

const Header = (props) => {
  const [project, setProject] = useState("");
  const [github, setGithub] = useState("");

  useEffect(()=>{
    if(props.data){
      setProject(props.data.project);
      setGithub(props.data.github);
    }
  }, [props.data]);

  function handleToggle(e) {
    //e.preventDefault();
    document.querySelector(".menu").classList.toggle("active");
    document.querySelector(".icons").classList.toggle("active");
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
            <a
              href="#home"
              onClick={(e) => {
                handleToggle(e);
              }}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={(e) => {
                handleToggle(e);
              }}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={(e) => {
                handleToggle(e);
              }}
            >
              RESUME
            </a>
          </li>
          <li>
            <a
              href="#works"
              onClick={(e) => {
                handleToggle(e);
              }}
            >
              WORKS
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                handleToggle(e);
              }}
            >
              CONTACT
            </a>
          </li>
        </ul>
        <ul className="icons">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href={project}
              className="button btn project-btn"
            >
              <i className="fa fa-book"></i>
            </a>
          </li>
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
        <a
          href="#"
          className="toggleBtn"
          onClick={(e) => {
            e.preventDefault();
            handleToggle(e);
          }}
        >
          <i className="fas fa-bars"></i>
        </a>
      </nav>
    </header>
  );
}

export default Header;
