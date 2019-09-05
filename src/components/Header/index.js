import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Portal = React.lazy(() => import("../Portal"));
const Login = React.lazy(() => import("../Portal/Login"));
const Signup = React.lazy(() => import("../Portal/Signup"));

import "./Header.scss";

import Logo from "../../assets/logo.svg";

const Header = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const toggleLoginModal = () => {
    setShowLoginModal((prevState) => {
      return !prevState;
    });
  };
  const toggleSignupModal = () => {
    setShowSignupModal((prevState) => {
      return !prevState;
    });
  };
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
                <NavLink
                  to={{
                    pathname:'/login',
                    state:{
                      modal:true
                    } 
                  }}
                  activeClassName="selected"
                  onClick={toggleLoginModal}
                >
                  Login
                </NavLink>
                {/* {showLoginModal ? (
                  <Portal>
                    <Modal toggleModal={toggleLoginModal}>
                      <Login />
                    </Modal>
                  </Portal>
                ) : null} */}
              </li>
              <li className="item">
                <NavLink
                  to={{
                    pathname:'/signup',
                    state:{
                      modal:true
                    }
                  }}
                  activeClassName="selected"
                  style={{ paddingRight: 0 }}
                  onClick={toggleSignupModal}
                >
                  Sign up
                </NavLink>
                {/* {showSignupModal ? (
                  <Portal>
                    <Modal toggleModal={toggleSignupModal}>
                      <Signup />
                    </Modal>
                  </Portal>
                ) : null} */}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
