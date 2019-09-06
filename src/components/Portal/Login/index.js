import React, { useState } from "react";

const Button = React.lazy(() => import("../../Button"));
import "./Login.scss";

const Login = () => {
  let disabled = "disabled";
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailfocused, setEmailfocused] = useState(false);
  const [passfocused, setPassfocused] = useState(false);

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passHandler = (e) => {
    setPass(e.target.value);
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

  email && pass ? "" : "disabled";

  return (
    <div>
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
      <div className="buttonBox">
        <Button className={`btn btn-primary btn-md `} disabled={disabled}>
          Log in
        </Button>
      </div>
    </div>
  );
};

export default Login;
