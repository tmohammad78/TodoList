import React from "react";
import { Route } from "react-router-dom";

import PrivateRoute from "../privateRoute";
import Application from "../Application";

const RouteApp = () => {
  return (
    <Route>
      {/* <PrivateRoute path="/app" exact component={Application} /> */}
    </Route>
  );
};
export default RouteApp;
