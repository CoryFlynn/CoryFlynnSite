import React, { useState, useEffect } from "react";
import "./Border.css";

export default function Border() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  });

  if (width > 960) {
    return (
      <div>
        <div className="about-border1" />
        <div className="about-border2" />
        <div className="about-border3" />
        <div className="about-border4" />
        <div className="about-border5" />
        <div className="about-border6" />
        <div className="about-border7" />
        <video
          className="moving-Img"
          src={"https://coryflynnsiteimages.s3-us-west-1.amazonaws.com/old.mp4"}
          alt="moving img"
          autoPlay={true}
          loop={true}
          muted
        />
      </div>
    );
  }
  return null;
}
