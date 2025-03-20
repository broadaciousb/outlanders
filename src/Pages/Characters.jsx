import React from "react";
import { Link } from "react-router";
import Nav from "../Components/Nav";
import character__img from "../assets/character__img.jpg";

const Characters = () => {
  return (
    <>
      <section className="characters">
        <Nav />
        <div className="characters__title">
          <Link to="/new-character" className="start__new__character">
            Create New Character
          </Link>
        </div>
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
