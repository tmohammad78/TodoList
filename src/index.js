import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route } from "react-router-dom";
import Root from "./Root";

import App from "./App";

import "./styles/main.scss";

const app = (
  <Root>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Root>
);

ReactDOM.render(app, document.getElementById("root"));
