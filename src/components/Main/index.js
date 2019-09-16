import React, { Fragment, useEffect, Suspense } from "react";
import { Switch, BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import { RouteWithSubRoutes } from "../../hoc/Route/index";
import "../../components/Spinner";

const Main = (props) => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {props.routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
        </Switch>
      </div>
    </Router>
  );
};

export default Main;
