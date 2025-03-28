import React from "react";

const Login = ({ register }) => {
  return (
    <>
      <div className="login__wrapper">
        <div className="login">
          <div className="login__email">
            Email: <input className="login__input" type="text"></input>
          </div>
          <div className="login__password">
            Password: <input className="login__input" type="text"></input>
          </div>
          <button className="login__submit">Login</button>
        </div>
      </div>
    </>
  );
};

export default Login;
