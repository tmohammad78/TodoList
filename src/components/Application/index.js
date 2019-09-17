import React from "react";
import Header from "./Header";
import SideNav from "./SideNav";
import MainSide from "./MainSide";

import "./Application.scss";

const Application = (props) => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="wrapper">
        <SideNav />
        <MainSide {...props} />
      </div>
    </div>
  );
};
export default Application;
