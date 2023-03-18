import React from "react";
import Advertise from "../components/Advertise";
import Benefits from "../components/Benefits";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Slider from "../components/Slider";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Advertise />
      <Benefits />
      <Slider />
      <Newsletter />
    </div>
  );
};

export default HomePage;
