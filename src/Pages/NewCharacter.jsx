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

        {/* STATS */}
        {/* STR DEX CON INT WIS CHA */}
        {/* STAT SCORE MOD BONUS BASE */}
        <div className="character__row">
          <h2 className="character__subtitle">STATS</h2>
          <div className="character__stats">
            <div className="stat__row">
              <div className="stat__name">STAT</div>
              <div className="stat__name">SCORE</div>
              <div className="stat__name">MOD</div>
              <div className="stat__name">BONUS</div>
              <div className="stat__name">BASE</div>
            </div>
            <div className="stat__row">
              <div className="stat__value">STR</div>
              <div className="stat__value">6</div>
              <div className="stat__value">3</div>
              <div className="stat__value">1</div>
              <div className="stat__value">10</div>
            </div>
            <div className="stat__row">
              <div className="stat__value">DEX</div>
              <div className="stat__value">6</div>
              <div className="stat__value">3</div>
              <div className="stat__value">1</div>
              <div className="stat__value">10</div>
            </div>
            <div className="stat__row">
              <div className="stat__value">CON</div>
              <div className="stat__value">6</div>
              <div className="stat__value">3</div>
              <div className="stat__value">1</div>
              <div className="stat__value">10</div>
            </div>
            <div className="stat__row">
              <div className="stat__value">INT</div>
              <div className="stat__value">6</div>
              <div className="stat__value">3</div>
              <div className="stat__value">1</div>
              <div className="stat__value">10</div>
            </div>
            <div className="stat__row">
              <div className="stat__value">WIS</div>
              <div className="stat__value">6</div>
              <div className="stat__value">3</div>
              <div className="stat__value">1</div>
              <div className="stat__value">10</div>
            </div>
            <div className="stat__row">
              <div className="stat__value">CHA</div>
              <div className="stat__value">6</div>
              <div className="stat__value">3</div>
              <div className="stat__value">1</div>
              <div className="stat__value">10</div>
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        {/* ARMOR STAMINA HEALTH FOCUS MOVEMENT INSPIRATION */}

        <div className="character__row">
          <h2 className="character__subtitle">ACTION SCORES</h2>
          <div className="character__actions">
            <div className="action">
              <div className="action__name">ARMOR</div>
              <div className="action__score">8</div>
            </div>
            <div className="action">
              <div className="action__name">STAMINA</div>
              <div className="action__score">6</div>
            </div>
            <div className="action">
              <div className="action__name">HEALTH</div>
              <div className="action__score">12</div>
            </div>
            <div className="action">
              <div className="action__name">FOCUS</div>
              <div className="action__score">6</div>
            </div>
            <div className="action">
              <div className="action__name">MOVEMENT</div>
              <div className="action__score">7</div>
            </div>
            <div className="action">
              <div className="action__name">INSPIRATION</div>
              <div className="action__score">8</div>
            </div>
          </div>
        </div>

        {/* SKILLS */}

        <div className="character__row">
          <h2 className="character__subtitle">SKILLS</h2>
          <div className="character__skills">
            <div className="skill__category">
              <h3 className="skill__category--title">GENERAL</h3>
              <div className="skill">
                <div className="skill__stat">
                  <div>DEX</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Acrobatics</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>WIS</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Animal Handling</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>STR</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Athletics</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>WIS</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Cooking</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>CHA</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Deception</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>INT</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">History</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>WIS</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Insight</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>INT</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Intimidation</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>CHA</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Investigation</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>DEX</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Lockpick</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>WIS</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Medicine</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>WIS</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Nature</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>WIS</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Perception</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>CHA</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Performance</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>CHA</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Persuasion</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>WIS</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Religion</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>DEX</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Sleight of Hand</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>WIS</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Streetwise</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>DEX</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Stealth</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
              <div className="skill">
                <div className="skill__stat">
                  <div>WIS</div>
                  <div className="skill__stat--mod">3</div>
                </div>
                <div className="skill__name">Survival</div>
                <div className="skill__score">
                  <div>TOTAL</div>
                  <div className="skill__score--total">10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewCharacter;
