import React from "react";
// import { Switch, Route } from "react-router-dom";
import Board from "./Board";
import Today from "./Today";
import Home from "./Home";
import './MainSide.scss';

const MainSide = ( props ) => {
  return (
    <div className="rightSide">
      {/* <Switch>
        <Route path={`${props.match.path}/board`} component={Board} />
        <Route path={`${props.match.path}/tody`} component={Today} />
        <Route path={`${props.match.path}/home`} component={Home} />
      </Switch> */}
    </div>
  );
};
export default MainSide;
