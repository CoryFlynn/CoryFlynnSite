import React, { useState, useEffect } from "react";
import "./About.css";
import { Parallax } from "react-scroll-parallax";

export default function About() {
  const [off, setOff] = useState(0);
  const handleResize = () => {
    if (window.innerWidth > 1070) setOff(0);
    else if (window.innerWidth > 1000) setOff(100);
    else if (window.innerWidth > 900) setOff(150);
    else if (window.innerWidth > 800) setOff(250);
    else if (window.innerWidth > 760) setOff(350);
    else if (window.innerWidth > 700) setOff(240);
    else if (window.innerWidth > 600) setOff(300);
    else if (window.innerWidth >= 400) setOff(200);
  };

  useEffect(() => {
    handleResize();
  });

  window.addEventListener("resize", handleResize);

  return (
    <div className="about-container">
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
        <div className="image-top" />
        <Parallax y={[`-${off}px`, `${off}px`]}>
          <img className="about-image" src={"images/IMG_3449.JPG"} alt="Cory Flynn Fish" />
        </Parallax>
        <div className="image-bottom" />
      </div>
    </div>
  );
}
