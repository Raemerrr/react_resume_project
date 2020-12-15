import React, { Fragment } from "react";
import ParticlesBg from "particles-bg";
import "../styles/Home.css";
import { Tween, SplitWords, Timeline } from "react-gsap";
import { CSSTransitionGroup } from 'react-transition-group'

const Home = () => {
  const description = "Welcome to Raemerrr`s Blog.🙇";

  return (
    <CSSTransitionGroup
      transitionName="homeTransition"
      transitionAppear={true}
      transitionAppearTimeout={500}
      transitionEnter={false}
      transitionLeave={false}
    >
      <section className="home" >
        <ParticlesBg type="circle" bg={true} />
        <div className="animation">
          <Timeline
            target={
              <Fragment>
                <SplitWords wrapper={<div className="wrapper" />}>
                  {description}
                </SplitWords>
              </Fragment>
            }
          >
            <Tween
              to={{ y: "20px" }}
              position={0.5}
              duration={0.1}
              target={1}
            />
            <Tween
              to={{ y: "20px" }}
              position="+=0.5"
              duration={0.1}
              target={3}
            />
          </Timeline>
        </div>
      </section>
    </CSSTransitionGroup>
  );
};

export default Home;
