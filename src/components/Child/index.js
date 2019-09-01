import React, { useState, useEffect } from "react";
import Cancel from "../../assets/cancel.svg";
import "./Child.scss";

const Child = (props) => {
  let template;

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passHandler = (e) => {
    setPass(e.target.value);
  };
  switch (props.sectionModal) {
    case "login":
      template = (
        <div className="wrapper">
          <div className="ancBox">
            <div className="img" onClick={props.toggleModal}>
              <Cancel />
            </div>
          </div>
          <div className="operation">
            <input type="email" className='input' value={email} onChange={emailHandler} />
            <input type="pass"  className='input'  value={pass} onChange={passHandler} />
          </div>
        </div>
      );
      break;
    case "signup":
      template = <div>sigun up</div>;
      break;

    default:
      break;
  }
  return (
    <div className="parent">
      <div className="modalBox">{template}</div>
      <div className="lightBox" onClick={props.toggleModal}></div>
    </div>
  );
};

export default Child;
