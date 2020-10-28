import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Ride from "./components/Ride";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ maxWidth: "100vw", overflowX: "hidden" }}>
      <NavBar />
      <About />
      <Ride />
      <Footer />
    </div>
  );
}

export default App;
