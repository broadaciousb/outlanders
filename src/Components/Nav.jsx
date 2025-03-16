import React from "react";
import { Link } from "react-router";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__title">Outlanders</div>
      <ul className="nav__links">
        <li>
          <Link className="nav__link link__hover-effect" to="/">Home</Link>
        </li>
        <li>
          <Link className="nav__link link__hover-effect" to="/characters">Characters</Link>
        </li>
        <li>
          <Link className="nav__link link__hover-effect" to="/guide">Guide</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
