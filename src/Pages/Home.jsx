import React from "react";
import { Link } from "react-router";

import Nav from "../Components/Nav.jsx";
import Login from "../Components/Login.jsx";

import OutlandersMap from "../assets/OutlandersMap.JPEG";

const Home = ({ register, login, logout, user }) => {
  return (
    <div className="landing">
      <div className="landing__left">
        <div className="landing__background"></div>
      </div>
      <div className="landing__right">
        <Login />
        <div className="landing__sub-title">Welcome To</div>
        <div className="landing__title">Outlanders</div>
        <div className="landing__sub-title">{user.email}</div>
        <ul className="landing__links">
          <li>
            <button className="landing__link" onClick={register}>
              Create Account
            </button>
          </li>
          <li>
            <button className="landing__link" onClick={login}>
              Login
            </button>
            <button className="landing__link" onClick={logout}>
              Logout
            </button>
          </li>
          <li>
            <Link to="/characters" className="landing__link">
              Characters
            </Link>
          </li>
          <li>
            <Link to="/guide" className="landing__link">
              Guide
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
