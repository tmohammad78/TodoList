import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { auth } from "../../../services/auth/action";

import "../Login/Login.scss";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [Name, setName] = useState("");
  const [emailfocused, setEmailfocused] = useState(false);
  const [passfocused, setPassfocused] = useState(false);
  const [namefocused, setNamefocused] = useState(false);

  const dispatch = useDispatch();
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passHandler = (e) => {
    setPass(e.target.value);
  };

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const toggleEmailClass = () => {
    setEmailfocused((prevState) => {
      if (email) {
        return prevState;
      } else {
        return !prevState;
      }
    });
  };
  const togglePassClass = () => {
    setPassfocused((prevState) => {
      if (pass) {
        return prevState;
      } else {
        return !prevState;
      }
    });
  };
  const toggleNameClass = () => {
    setNamefocused((prevState) => {
      if (Name) {
        return prevState;
      } else {
        return !prevState;
      }
    });
  };

  const checkAuth = () => {
    dispatch(auth(email, pass, Name));
  };

  return (
    <div>
      <div className={`inputValue ${namefocused ? "focused " : ""} `}>
        <label className="inputlabel">
          <span>Name</span>
        </label>
        <input
          type="text"
          className="input"
          value={Name}
          onChange={nameHandler}
          onFocus={toggleNameClass}
          onBlur={toggleNameClass}
        />
      </div>
      <div className={`inputValue ${emailfocused ? "focused " : ""} `}>
        <label className="inputlabel">
          <span>Email</span>
        </label>
        <input
          type="email"
          className="input"
          value={email}
          onChange={emailHandler}
          onFocus={toggleEmailClass}
          onBlur={toggleEmailClass}
        />
      </div>
      <div className={`inputValue ${passfocused ? "focused" : ""} `}>
        <label className="inputlabel">
          <span>Password</span>
        </label>
        <input
          type="password"
          className="input"
          value={pass}
          onChange={passHandler}
          onFocus={togglePassClass}
          onBlur={togglePassClass}
        />
      </div>
      <button onClick={checkAuth}>Sign up</button>
    </div>
  );
};

export default Signup;
