import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";
const Header = (props) => {
  const [project, setProject] = useState("");
  const [github, setGithub] = useState("");

  useEffect(() => {
    if (props.data) {
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
          <Link
            to="/"
            onClick={(e) => {
              handleToggle(e);
            }}
          >
            Raemerrr`s Blog
          </Link>
        </div>
        <ul className="menu">
          <li>
            <Link
              to="/"
              onClick={(e) => {
                handleToggle(e);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              onClick={(e) => {
                handleToggle(e);
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Resume"
              onClick={(e) => {
                handleToggle(e);
              }}
            >
              RESUME
            </Link>
          </li>
          <li>
            <Link
              to="/Works"
              onClick={(e) => {
                handleToggle(e);
              }}
            >
              WORKS
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              onClick={(e) => {
                handleToggle(e);
              }}
            >
              CONTACT
            </Link>
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
        <Link
          to="#!"
          className="toggleBtn"
          onClick={(e) => {
            e.preventDefault();
            handleToggle(e);
          }}
        >
          <i className="fas fa-bars"></i>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
