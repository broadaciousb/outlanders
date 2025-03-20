import React from "react";
import character__img from "../assets/character__img.jpg";

const NewCharacter = () => {
  return (
    <>
      <section className="new__character">
        <div className="new__character__info--wrapper">
          <div className="new__character__info">
            <input
              type="text"
              className="character__info--detail new__name"
              placeholder="Name"
            />
            <input
              type="text"
              className="character__info--detail new__class"
              placeholder="Class"
            />
            <input
              type="text"
              className="character__info--detail new__race"
              placeholder="Race"
            />
            <input
              type="text"
              className="character__info--detail new__diety"
              placeholder="Diety"
            />
            <input
              type="text"
              className="character__info--detail new__homeland"
              placeholder="Homeland"
            />
            <input
              type="text"
              className="character__info--detail new__background"
              placeholder="Background"
            />
            <input
              type="text"
              className="character__info--detail new__size"
              placeholder="Size"
            />
            <input
              type="text"
              className="character__info--detail new__age"
              placeholder="Age"
            />
            <input
              type="text"
              className="character__info--detail new__sex"
              placeholder="Sex"
            />
          </div>
          <div className="new__character__img--wrapper">
            <img className="character__img" src={character__img} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default NewCharacter;
