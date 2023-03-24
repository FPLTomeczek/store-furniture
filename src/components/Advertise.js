import React from "react";
import adv from "../images/adv.jpg";

const Advertise = () => {
  return (
    <section>
      <div className="advertise-container">
        <div className="info">
          <h2>
            <span>BEST</span> CRAFTMADE FURNITURE
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
            nulla repudiandae, laborum aut, a illo natus illum ex expedita
            aperiam dicta unde! Aut praesentium hic sapiente, sunt perspiciatis
            veritatis! Dolores iste, commodi iusto, in dolor dolorem maiores
            ipsa ducimus ab, distinctio voluptatibus explicabo minima accusamus.
            Numquam tempore deserunt doloribus veniam voluptates nesciunt
            temporibus qui rerum assumenda blanditiis ratione, necessitatibus
            odio commodi dignissimos. Et delectus eum minus sint? Quas sunt
            commodi adipisci aspernatur sit explicabo tempora dolorem iure
            soluta, natus veniam totam! Eveniet ipsum quod exercitationem dolore
            autem odit non sint, a sed! Reiciendis facilis autem, iusto,
            veritatis consequuntur minus quibusdam error dolor facere nam
            praesentium, distinctio quisquam consequatur aut inventore?
            Repellendus, soluta rem! Sequi culpa amet officiis dolorem, fuga
            nemo!
          </p>
          <button className="btn-primary">Shop Now</button>
        </div>
        <div className="advertise-img">
          <img src={adv} alt="advertise" />
        </div>
      </div>
    </section>
  );
};

export default Advertise;
