import React, { useEffect, useState } from "react";
import bedroom from "../images/shop-advertise/bedroom.jpg";
import living_room from "../images/shop-advertise/living-room.jpg";
import { loremTextBedroom, loremTextLivingRoom } from "../constants";

const ShopAdvertise = () => {
  const [adBedroom, setAdBedroom] = useState(false);

  useEffect(() => {}, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAdBedroom((adBedroom) => !adBedroom);
    }, 15000);
    return () => clearInterval(interval);
  }, [adBedroom]);

  const shop_advertise_container = (img, type) => {
    return (
      <div className="shop-advertise-container">
        <img src={img} alt="ad" />
        <p>{type === "bedroom" ? loremTextBedroom : loremTextLivingRoom}</p>
        <div className="circles">
          <i
            onClick={() => setAdBedroom(true)}
            className={` ${
              adBedroom ? "fa-solid fa-circle" : "fa-regular fa-circle"
            }`}
          ></i>
          <i
            onClick={() => setAdBedroom(false)}
            className={` ${
              adBedroom ? "fa-regular fa-circle" : " fa-solid fa-circle"
            }`}
          ></i>
        </div>
      </div>
    );
  };

  if (!adBedroom) {
    return shop_advertise_container(living_room, "living-room");
  }

  return shop_advertise_container(bedroom, "bedroom");
};

export default ShopAdvertise;
