import React, { useState, useEffect } from "react";
import "./About.css";
import Border from "./Border";
import EvoBall from "./EvoBall";

export default function About() {
  const [height, setHeight] = useState(400);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const adjustImage = () => {
      setHeight(document.getElementsByClassName("about-text-container")[0].clientHeight);
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", adjustImage);

    return () => window.removeEventListener("resize", adjustImage);
  }, []);

  return (
    <div className="about-container">
      <Border />
      <div className="about-text-container">
        <h1>About Me</h1>
        <p>
          My name is Cory Flynn and I am a software developer. I specialize in web developement, but recently I have been exploring other aspects of the trade.
          I grew up in Redmond, Washington; a suburb between Seattle and the Cascade Mountains. I have always been a very active person. Growing up, I spent a
          lot of time in the snow leading me to attend the University of Colorado in Boulder, where I earned a Bachelors Degree in Computer Science as well as
          minors in both Mathematics and ATOC. For those unfamiliar, ATOC is the study of Atmospheric and Oceanic Sciences, the study of the physics that lead
          to weather patterns and events. The idea of integrating this knowledge with my knowledge of software is something that excites me on a daily basis.
        </p>
      </div>
      <div className="about-image-container">
        <img src="https://coryflynnsiteimages.s3-us-west-1.amazonaws.com/IMG_3449.jpeg" alt="Fish" className="about-image" />
      </div>
      <EvoBall xPos={200} yPos={height + 155} size={40} safe={0} />
      {width > 650 ? <EvoBall xPos={width / 1.1} yPos={250} size={140} safe={1} /> : null}
      <EvoBall xPos={0} yPos={50} size={100} safe={0} />
    </div>
  );
}
