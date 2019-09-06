import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../../Button";

import { auth } from "../../../services/auth/action";

import "../Login/Login.scss";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [Name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState([]);
  const [result, setResult] = useState({
    name: true,
    email: true,
    pass: true
  });
  const [disabled, setDisabled] = useState("");
  const [emailfocused, setEmailfocused] = useState(false);
  const [passfocused, setPassfocused] = useState(false);
  const [namefocused, setNamefocused] = useState(false);

  const dispatch = useDispatch();
  const emailHandler = (e) => {
    // console.log(result);
    // result ? setEmail(e.target.value) : null;
    setEmail(e.target.value);
  };

  const validation = (Name, email, pass) => {
    let emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let nameVal = /^[a-zA-Z]+$/;

    // if (Name) {
    // }
    const nameResult = nameVal.test(Name);
    const emailResult = emailVal.test(email);
    const passResult = pass.length > 6 ? true : false;
    const result = [nameResult, emailResult, passResult];

    return result;
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

  const checkAuth = (email, pass, Name) => {
    dispatch(auth(email, pass, Name));
  };

  const Operation = () => {
    const Result = validation(Name, email, pass);
    console.log("validate", Result[1]);
    console.log("before state", result.name);
    setResult({
      name: Result[0],
      email: Result[1],
      pass: Result[2]
    });

    // result.nameResult
    //   ? setErrorMessage([...errorMessage, ""])
    //   : setErrorMessage([...errorMessage, "Please Enter your Name"]);

    // result.emailResult
    //   ? setErrorMessage([...errorMessage, ""])
    //   : setErrorMessage([...errorMessage, "Please Enter your Email"]);

    // result.passResult
    //   ? setErrorMessage([...errorMessage, ""])
    //   : setErrorMessage([...errorMessage, "Please Enter more 6 character"]);

    // if (!validateEmail) {
    //   alert("email is incorrect");
    // } else {
    //   checkAuth(email, pass, Name);
    // }
  };
  // console.log(errorMessage);
  // Name && email && pass ? setDisabled(null) : null;

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
        {result.name ? null : <div className="error">Name is incorrect</div>}
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
        {result.email ? null : <div className="error">Email is incorrect</div>}
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
        {result.pass ? null : <div className="error">Pass is incorrect</div>}
      </div>
      <div className="buttonBox">
        <Button
          className={`btn btn-md btn-primary `}
          disabled={disabled}
          onClick={Operation}
        >
          Sign up
        </Button>
      </div>
    </div>
  );
};

export default Signup;
