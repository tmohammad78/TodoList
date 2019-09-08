import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../Button";

import { auth } from "../../../services/auth/action";

import "../Login/Login.scss";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [Name, setName] = useState("");
  const [result, setResult] = useState({
    name: {
      validate: false,
      message: ""
    },
    email: {
      validate: false,
      message: ""
    },
    pass: {
      validate: false,
      message: ""
    }
  });
  const [disabled, setDisabled] = useState("");
  const [emailfocused, setEmailfocused] = useState(false);
  const [passfocused, setPassfocused] = useState(false);
  const [namefocused, setNamefocused] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("effectstate", result);
    if (result.name.validate && result.email.validate && result.pass.validate) {
      // setDisabled("");
      dispatch(auth(email, pass, Name));
    }
  }, [result]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const validation = (Name, email, pass) => {
    let emailVal = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let nameVal = /^[a-zA-Z]+$/;
    const nameResult = nameVal.test(Name);
    const emailResult = emailVal.test(email);
    const passResult = pass.length > 6 ? true : false;
    const result = [
      { validate: nameResult, message: !nameResult ? "incorrect" : null },
      {
        validate: emailResult,
        message: !emailResult ? "Email is incorrect" : null
      },
      {
        validate: passResult,
        message: !passResult ? "Password should be more than 6" : null
      }
    ];

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

  const Operation = () => {
    const Result = validation(Name, email, pass);
    setResult({
      name: {
        validate: Result[0].validate,
        message: Result[0].message
      },
      email: {
        validate: Result[1].validate,
        message: Result[1].message
      },
      pass: {
        validate: Result[2].validate,
        message: Result[2].message
      }
    });
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
      <div className="errorInput">{result.name.message}</div>
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
      <div className="errorInput">{result.email.message}</div>
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
      <div className="errorInput">{result.pass.message}</div>
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
