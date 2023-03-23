import React from "react";
import Advertise from "../components/Advertise";
import Benefits from "../components/Benefits";
import Hero from "../components/Hero";
import Slider from "../components/Slider";
import data from "../data";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Advertise />
      <Benefits />
      <Slider products={data} page="home-page" />
    </div>
  );
};

export default HomePage;
