import React from "react";
import Button from "../../Button";
import Link from "next/link";
import "./SideNav.scss";

const SideNav = (props) => {
  return (
    <div className="sideNav">
      <div className="selectItems">
        <ul className="items">
          <li className="item">
            <Link href="app/board">
              <a>Board</a>
            </Link>
            <Link href="app/today">
              <a>Today</a>
            </Link>
            <Link href="app/home">
              <a>Home</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideNav;
