import React from "react";
import Advertise from "../components/Advertise";
import Benefits from "../components/Benefits";
import Hero from "../components/Hero";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Advertise />
      <Benefits />
      <Slider />
    </div>
  );
};

export default HomePage;
