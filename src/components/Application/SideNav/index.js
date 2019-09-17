import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import Button from "../../Button";
import "./SideNav.scss";

const SideNav = (props) => {
  return (
    <div className="sideNav">
      <div className="selectItems">
        <ul className="items">
          <li className="item">
            <NavLink
              className="btn-white"
              activeClassName="selected"
              to={`${props.match.path}/board`}
            >
              Board
            </NavLink>
            <NavLink
              className="btn-white"
              activeClassName="selected"
              to={`${props.match.path}/today`}
            >
              Today
            </NavLink>
            <NavLink
              className="btn-white"
              activeClassName="selected"
              to={`${props.match.path}/home`}
            >
              Home
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default withRouter(SideNav);
