import React, { useState } from "react";
import chair_hero from "../images/chairs.jpg";
import sofa_hero from "../images/sofas.jpg";
import bed_hero from "../images/beds.jpg";
import { Link } from "react-router-dom";
import Loading from "./Loading";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  return (
    <section>
      <div className="hero-container">
        <div className="loading">{loading ? <Loading /> : null}</div>
        <div className="heros">
          <div className="chair-hero">
            <Link to="/products" state={{ item: "chair" }}>
              <img
                src={chair_hero}
                alt="chair"
                style={{ display: loading ? "none" : "block" }}
                onLoad={(e) => setLoading(false)}
              />

              <h2 className="chair-heading">Chairs</h2>
            </Link>
          </div>

          <div className="sofa-hero">
            <Link to="/products" state={{ item: "sofa" }}>
              <img
                src={sofa_hero}
                alt="sofa"
                style={{ display: loading ? "none" : "block" }}
                onLoad={(e) => setLoading(false)}
              />
              <h2 className="sofa-heading">Sofas</h2>
            </Link>
          </div>

          <div className="bed-hero">
            <Link to="/products" state={{ item: "bed" }}>
              <img
                src={bed_hero}
                alt="bed"
                style={{ display: loading ? "none" : "block" }}
                onLoad={(e) => setLoading(false)}
              />
              <h2 className="bed-heading">Beds</h2>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
