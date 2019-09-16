import React from "react";
import { NavLink, Link } from "react-router-dom";

import Logo from "../../../assets/logo.svg";

import "./Header.scss";

const Header = (props) => {
  console.log("this props", props);
  return (
    <div className="header clearfix ">
      <div className="wrapper clearfix">
        <ul className="main">
          <li className="logo-box">
            <div className="img">
              <Logo />
            </div>
          </li>
          <li className="header-tab">
            <ul className="list-tab">
              <li className="item">
                <NavLink to="/main/how">How It Works</NavLink>
              </li>
              <li className="item">
                <NavLink to="/main/template" activeClassName="selected">
                  template
                </NavLink>
              </li>
              <li className="item">
                <NavLink
                  to={{
                    pathname: "/main/login",
                    state: {
                      modal: true
                    }
                  }}
                  activeClassName="selected"
                >
                  Login
                </NavLink>
              </li>
              <li className="item">
                <NavLink
                  to={{
                    pathname: "/main/signup",
                    state: {
                      modal: true
                    }
                  }}
                  activeClassName="selected"
                  style={{ paddingRight: 0 }}
                >
                  Sign up
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
