import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <a href="https://www.linkedin.com/in/cory-flynn-521137186/">
        <img className="link-img" src={"images/linkedin.svg"} alt="LinkedIn" />
      </a>
      <a href="mailto:Flynn.CoryJ@gmail.com" style={{ color: "#231f20", textDecoration: "none" }}>
        Flynn.CoryJ@gmail.com
      </a>
    </div>
  );
}
