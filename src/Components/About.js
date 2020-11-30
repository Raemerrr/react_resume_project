import React, {useState} from 'react';
import img from '../raemerrr.png';
function About(){
    const style = {
        root: {
          width: '100%',
          height: '100vh',
          position: 'relative'
        },
        img:{
          width:'200px',
          height:'180px'
        },
        contents : {
            paddingTop:'100px',
            paddingLeft:'100px'
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
        }
      };
    return(
        <section id='about' style={style.root}>
            <div style={style.contents}>
                <img src={img} style={style.img}></img>
            </div>
        </section>
    );
}

export default About