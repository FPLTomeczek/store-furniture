import React from "react";
import deliver from "../images/logos/deliver.png";
import price from "../images/logos/price.png";
import quality from "../images/logos/quality.png";
import stain from "../images/stain.png";
import stain2 from "../images/stain2.png";

const Benefits = () => {
  return (
    <section className="section-benefits">
      <h1>BENEFITS</h1>
      <div className="benefits">
        <div className="quality">
          <img src={quality} alt="" />
          <img src={stain} alt="" className="stain" />
          <h3>Quality</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Consequuntur, tempora, molestiae officiis numquam expedita illum
            laboriosam, ratione saepe molestias repellat culpa! Eveniet tempora
            laboriosam odit.
          </p>
        </div>
        <div className="price">
          <img src={price} alt="price" />
          <img src={stain2} alt="" className="stain" />
          <h3>Price</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            est unde. Eaque exercitationem maxime totam quos doloremque
            voluptate deleniti distinctio!
          </p>
        </div>
        <div className="delivery">
          <img src={deliver} alt="delivery" />
          <img src={stain} alt="" className="stain" />
          <h3>Delivery</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
            architecto est incidunt vel nulla sapiente nihil.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
