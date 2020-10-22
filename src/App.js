import React from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import About from "./components/About";
import Ride from "./components/Ride";
import Footer from "./components/Footer";
import { ParallaxProvider } from "react-scroll-parallax";

function App() {
  return (
    <ParallaxProvider>
      <NavBar />
      <About />
      <Ride />
      <Footer />
    </ParallaxProvider>
  );
}

export default App;
