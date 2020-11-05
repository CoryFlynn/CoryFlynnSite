import React, { useState, useEffect } from "react";
import "./Ride.css";
import Par from "./Par.js";

export default function Ride() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setHeight(document.getElementsByClassName("ride-container")[0].clientHeight);
    const handleResize = () => {
      setHeight(document.getElementsByClassName("ride-container")[0].clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="ride-container">
      <div className="ride-text-container">
        <h1> Ride To Snow </h1>
        <p>
          Ride To Snow is a ride sharing website designed for snow lovers in the Greater Denver Area. Initially a service I dreamed of having at the University
          of Colorado, Ride To Snow has become a full-time project for me during the off-time provided by the COVID-19 pandemic. Ride To Snow allows for drivers
          to seek out riders and split costs for transportation up to the mountains, and for people without transportation to find a ride.
        </p>
        <p>
          You can find the Ride to Snow application at{" "}
          <a style={{ color: "#231f20" }} href="https://ridetosnow.com/">
            {" "}
            RideToSnow.com
          </a>
          . The application is made with basic HTML, CSS, and JS and runs on Heroku. Heroku provides both hosting and a postgres database for the application.
          In order for riders to find the best conditions quickly, I also integrated a weather bar into the application. The weather section allows users to
          select a mountain and quickly view the conditions. The data for this weather comes from two different API's. The first is the Dark Sky API, which
          gives us basic weather information such as temperature. The other API we used is called Snowline. This API allows us to connect to SNOTEL stations
          nearest to each resort, giving us data on snow depth, snowfall in the last 24 hours, and wind speed.
        </p>
        <p>
          Still under construction, I would like to add are national availabilty using google maps rather than pre determined locations. The weather forecast
          will also be updated to find the data of the nearest snowtell station. I am currently working on transitioning the app from Heroku to the AWS platform
          as it offers a more freedom of development.
        </p>
      </div>
      <div className="ride-image-container">
        <Par height={height}>
          <img className="ride-image" src={"images/RTS.svg"} alt="Ride To Snow Logo" />
        </Par>
      </div>
    </div>
  );
}
