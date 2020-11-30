import React, { useState } from "react";
import ParticlesBg from "particles-bg";
import {
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function Header(props) {
  const style = {
    root: {
      width: '100%',
      height: '100vh',
      position: 'relative'
    },
    container:{
      position: 'absolute',
      top: '50%',
      left: '50%',
      textAlign: "center",
      color: "white",
      transform: 'translate(-50%, -50%)'
    },
    p : {
      fontFamily: 'Impact'
    },
    project : {
      marginRight : '10px',
      marginLeft : '10px',
      backgroundColor : '#2debdb',
      color: "white",
      fontFamily: 'Trebuchet MS'
    },
    github : {
      marginRight : '10px',
      marginLeft : '10px',
      backgroundColor : '#6d7575',
      color: "white",
      fontFamily: 'Trebuchet MS'
    },
    i : {
      marginRight : '5px',
      marginLeft : '5px',
    },
    navbar:{
      position: 'fixed',
      top: '0',
      /* width: 100% */
      left: '0',
      right: '0',
      zIndex : '1000'
    }
  };

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
    <header id="home" style={style.root}>
      <ParticlesBg type="circle" bg={true} />
      <Navbar bg="light" expand="lg" fixed="top" >
        <Navbar.Brand href="#home">Raemerrr`s Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navbar navbar-inverse navbar-fixed-top">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#resume">Resume</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <div style={style.container}>
        <h1 style={style.p}>{name}</h1>
          <h3>{description}</h3>
          <hr />
          <ul className="social">
            <a
              target="_blank"
              rel="noreferrer"
              href={project}
              className="button btn project-btn"
              style={style.project}
            >
              <i className="fa fa-book" style={style.i}></i>Project
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href={github}
              className="button btn github-btn"
              style={style.github}
            >
              <i className="fab fa-github" style={style.i}></i>Github
            </a>
          </ul>
      </div>
    </header>
  );
}

export default Header;
