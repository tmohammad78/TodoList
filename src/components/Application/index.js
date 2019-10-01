import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import SideNav from "./SideNav";
import MainSide from "./MainSide";
import Test from "./Testt";

import "./Application.scss";

const Application = (props) => {
  const boardName = useSelector((state) => state.board.board);
  return (
    <React.Fragment>
      <div>
        <Header />
      </div>
      {/* <Switch>
        {boardName.map((item) => {
          if (item.name) {
            return (
              <Route
                path={`${props.match.path}/${item.name}`}
                component={() => {
                  return <Test item={item} />;
                }}
              />
            );
          }
        })}
        <Route
          path={`${props.match.path}`}
          render={() => {
            return (
              <div className="wrapper">
                <SideNav />
                <MainSide {...props} />
              </div>
            );
          }}
        />
      </Switch> */}
    </React.Fragment>
  );
};
export default Application;
