import React from "react";
import Nav from "../Components/Nav";
import character__img from "../assets/character__img.jpg";

const Characters = () => {
  return (
    <>
      <Nav />
      <section className="characters">
        <div className="character__list">
          <div className="character">
            <div className="character__img--wrapper">
              <img className="character__img" src={character__img} alt="" />
            </div>
            <div className="character__name">Bane</div>
          </div>
          <div className="character">
            <div className="character__img--wrapper">
              <img className="character__img" src={character__img} alt="" />
            </div>
            <div className="character__name">Bane</div>
          </div>
          <div className="character">
            <div className="character__img--wrapper">
              <img className="character__img" src={character__img} alt="" />
            </div>
            <div className="character__name">Bane</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Characters;
