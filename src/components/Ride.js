import React, { useState, useEffect } from "react";
import "./Ride.css";
import { Parallax } from "react-scroll-parallax";

export default function Ride() {
  const [off, setOff] = useState(0);
  const handleResize = () => {
    if (window.innerWidth > 1600) setOff(0);
    else if (window.innerWidth > 1200) setOff(500);
    else if (window.innerWidth > 1000) setOff(400);
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
    <div className="ride-container">
      <div className="ride-text-container">
        <h1> Ride To Snow </h1>
        <p>
          Ride To Snow is a ride sharing website designed for snow lovers in the Greater Denver Area. I began developing the site in the latter months of 2019
          and have been slowly making progress during the summer of 2020. Ride To Snow allows for drivers to seek out riders and split costs for transportation
          up to the mountains, and for people without transportation to find a ride.
        </p>
        <p>
          You can find the Ride to Snow application at{" "}
          <a style={{ color: "#231f20" }} href="https://ridetosnow.com/Home.html">
            {" "}
            RideToSnow.com
          </a>
          . The application is made with basic HTML, CSS, and JS and runs on Heroku. Heroku provides both hosting and a postgres database for the application.
          In order for riders to find the best conditions quickly, I also integrated a weather bar into the application. The weather section allows users to
          select a mountain and quickly view the conditions. The data for this weather comes from two different API's. The first is the Dark Sky API, which
          gives us basic weather information such as temperature. The other API we used is called Snowline. This API allows us to connect to SNOTEL stations
          nearest to each resort, giving us data on snow depth, snowfall in the last 24 hours, and wind speed.
        </p>
      </div>
      <div className="ride-image-container">
        {/* <Parallax y={[`-${off}px`, `${off}px`]}> */}
        <img className="ride-image" src={"images/RTS.svg"} alt="Ride To Snow Logo" />
        {/* </Parallax> */}
      </div>
    </div>
  );
}
