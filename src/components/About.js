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
          As the domain suggests, my name is Cory Flynn and I am a software developer. I grew up in Sammamish, Washington; a suburb between Seattle and the
          Cascade Mountains. Because of my upbringing, I have always been drawn to the outdoors. I've been skiing for as long as I can remember, but recently I
          have fallen in love with fishing and surfing. I think this love stems from the fact that I can fish and surf when theres no snow around. Beyond the
          outdoors, I am deeply fascinated by science. For a breif stint in my childhood I thought maybe I would pursue becoming a doctor, then I realized how
          much school was required and quickly turned to other professional dreams. Now I am hoping, time and money permits, that I can return to school some
          day to push the boundaries of technolgy.
        </p>
        <p>
          For my education I attended the University of Colorado Boulder, where I struggled to find a major that was a good fit. After switching majors from
          Business to Nueroscience, I finally settled on studying Computer Science and earned a Bachelors Degree in this discipline. In addition to Computer
          Science, I was inclined to pick up two minors. One in Mathematics, a field that for reasons I cannot explain I have always been drawn to, and another
          in Atmospheric and Oceanic Sciences. That one is a little easier to explain given my background as an outdoorsman, as it allowed me to explore the
          science behind the natural phenomena that bring me so much enjoyment.
        </p>
      </div>
      <div className="about-image-container">
        <img src="https://coryflynnsiteimages.s3-us-west-1.amazonaws.com/IMG_3449.jpeg" alt="Fish" className="about-image" />
      </div>
      <EvoBall xPos={200} yPos={height + 155} size={40} safe={0} />
      <EvoBall xPos={width / 1.1} yPos={250} size={140} safe={1} />
      <EvoBall xPos={0} yPos={50} size={100} safe={0} />
    </div>
  );
}
