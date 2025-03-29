import React from "react";

const CreateAccount = () => {
  return (
    <div className="create__account--wrapper">
      <div className="create__account">
        <div className="account__name">
          Username: <input className="account__input" type="text"></input>
        </div>
        <div className="account__password">
          Password: <input className="account__input" type="text"></input>
        </div>
        <button className="account__submit">Create Account</button>
      </div>
    </div>
  )
}

export default CreateAccount