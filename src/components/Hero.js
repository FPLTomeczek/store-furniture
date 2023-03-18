import React from "react";
import chair_hero from "../images/chairs.jpg";
import sofa_hero from "../images/sofas.jpg";
import bed_hero from "../images/beds.jpg";

const Hero = () => {
  return (
    <section>
      <div className="hero-container">
        <div className="heros">
          <div className="chair-hero">
            <img src={chair_hero} alt="chair" />
            <h2 className="chair-heading">Chairs</h2>
          </div>
          <div className="sofa-hero">
            <img src={sofa_hero} alt="sofa" />
            <h2 className="sofa-heading">Sofas</h2>
          </div>
          <div className="bed-hero">
            <img src={bed_hero} alt="bed" />
            <h2 className="bed-heading">Beds</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
