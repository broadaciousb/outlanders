import React from "react";
import character__img from "../assets/character__img.jpg";

const NewCharacter = () => {
  return (
    <>
      <section className="new__character">
        <div className="new__character__info--wrapper">
          <div className="new__character__info">
            <div className="info__detail">
              <label htmlFor="name">Name:</label>
              <input id="name" type="text" className="info__input" />
            </div>
            <div className="info__detail">
              <label htmlFor="class">Class:</label>
              <input id="class" type="text" className="info__input" />
            </div>
            <div className="info__detail">
              <label htmlFor="Race">Race:</label>
              <input id="Race" type="text" className="info__input" />
            </div>
            <div className="info__detail">
              <label htmlFor="diety">Diety:</label>
              <input id="diety" type="text" className="info__input" />
            </div>
            <div className="info__detail">
              <label htmlFor="homeland">Homeland:</label>
              <input id="homeland" type="text" className="info__input" />
            </div>
            <div className="info__detail">
              <label htmlFor="background">Background:</label>
              <input id="background" type="text" className="info__input" />
            </div>
            <div className="info__detail">
              <label htmlFor="size">Size:</label>
              <input id="size" type="text" className="info__input" />
            </div>
            <div className="info__detail">
              <label htmlFor="age">Age:</label>
              <input id="age" type="text" className="info__input" />
            </div>
            <div className="info__detail">
              <label htmlFor="sex">Sex:</label>
              <input id="sex" type="text" className="info__input" />
            </div>
          </div>
          <div className="new__character__img--wrapper">
            <img className="character__img" src={character__img} alt="" />
          </div>
        </div>
        <div className="character__stats--wrapper">
          <div className="character__stats">
            <div className="stat__column stat__names">
              <div className="stat__name">STAT</div>
              <div className="stat__name">STR</div>
              <div className="stat__name">DEX</div>
              <div className="stat__name">CON</div>
              <div className="stat__name">INT</div>
              <div className="stat__name">WIS</div>
              <div className="stat__name">CHA</div>
            </div>
            <div className="stat__column stat__values">
              <div className="stat__value">SCORE</div>
              <div className="stat__value">6</div>
              <div className="stat__value">5</div>
              <div className="stat__value">5</div>
              <div className="stat__value">4</div>
              <div className="stat__value">3</div>
              <div className="stat__value">3</div>
            </div>
            <div className="stat__column stat__values">
              <div className="stat__value">MOD</div>
              <div className="stat__value">6</div>
              <div className="stat__value">5</div>
              <div className="stat__value">5</div>
              <div className="stat__value">4</div>
              <div className="stat__value">3</div>
              <div className="stat__value">3</div>
            </div>
            <div className="stat__column stat__values">
              <div className="stat__value">BONUS</div>
              <div className="stat__value">6</div>
              <div className="stat__value">5</div>
              <div className="stat__value">5</div>
              <div className="stat__value">4</div>
              <div className="stat__value">3</div>
              <div className="stat__value">3</div>
            </div>
            <div className="stat__column stat__values">
              <div className="stat__value">BASE</div>
              <div className="stat__value">6</div>
              <div className="stat__value">5</div>
              <div className="stat__value">5</div>
              <div className="stat__value">4</div>
              <div className="stat__value">3</div>
              <div className="stat__value">3</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewCharacter;
