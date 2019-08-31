import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

import Logo from "../../assets/logo.svg";

const Header = () => {
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
                <NavLink to="/how" activeClassName="selected">
                  How It Works
                </NavLink>
              </li>
              <li className="item">
                <NavLink to="/template" activeClassName="selected">
                  template
                </NavLink>
              </li>
              <li className="item">
                <NavLink to="/login" activeClassName="selected">
                  Login
                </NavLink>
              </li>
              <li className="item">
                <NavLink
                  to="/siginup"
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
