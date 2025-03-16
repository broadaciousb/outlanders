import logo from "./logo.svg";
import "./App.css";
import { auth } from "./firebase/init.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Pages/Home.jsx";
import Guide from "./Pages/Guide.jsx";


function App() {
  const [user, setUser] = useState({});

useEffect(() => {
    console.log(user)
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        setUser(user);
      }
    })
  }, []);

  const register = () => {
    console.log("register");
    createUserWithEmailAndPassword(auth, "email@email.com", "test618")
      .then(({ user }) => {
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const login = () => {
    signInWithEmailAndPassword(auth, "email@email.com", "test618")
      .then(({ user }) => {
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const logout = () => {
    signOut(auth);
    setUser({});
    console.log('signedout')
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Home
                register={register}
                login={login}
                logout={logout}
                user={user}
              />
            }
          />
          <Route path="/guide" element={<Guide />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
