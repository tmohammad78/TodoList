import React from "react";
import Link from "next/link";
// import { Link, withRouter } from "react-router-dom";

// import Logo from "../../assets/logo.svg";

// import "./Styles.scss";
import "./style.scss";

const Header = (props) => {
  return (
    <div>
      <div className="header clearfix ">
        <div className="wrapper clearfix">
          <ul className="main">
            <li className="logo-box">
              <div className="img">{/* <Logo /> */}</div>
            </li>
            <li className="header-tab">
              <ul className="list-tab">
                <li className="item">
                  <Link
                    href="/how"
                    // to={`${props.match.url}/how`}
                    // activeClassName="selected"
                  >
                    <a>How it Works</a>
                  </Link>
                </li>
                <li className="item">
                  <Link
                    href="/template"
                    //  to="/main/template" activeClassName="selected"
                  >
                    <a>Template</a>
                  </Link>
                </li>
                <li className="item">
                  <Link
                    href="/login"
                    // to={{
                    //   pathname: "/main/login",
                    //   state: {
                    //     modal: true
                    //   }
                    // }}
                    // activeClassName="selected"
                  >
                    <a>Login</a>
                  </Link>
                </li>
                <li className="item">
                  <Link
                    href="/signup"
                    // to={{
                    //   pathname: "/main/signup",
                    //   state: {
                    //     modal: true
                    //   }
                    // }}
                    // activeClassName="selected"
                  >
                    <a>Sign up</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div>{props.children}</div>
    </div>
  );
};
export default Header;
