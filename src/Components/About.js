import React, {useState} from 'react';
import img from '../raemerrr.png';
function About(){
  
    return (
      <section id="about">
        <div className="image">
          <img src={img}></img>
        </div>
        <div className="content">
          <div className="aboutMe">
            <h2>About Me</h2>
            {}
          </div>
          <div className="contactDetails"></div>
        </div>
      </section>
    );
}

export default About