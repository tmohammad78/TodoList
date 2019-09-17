import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route } from "react-router-dom";
import Root from "./Root";

import App from "./App";
import Application from './components/Application';

import "./styles/main.scss";

const app = (
  <Root>
    <BrowserRouter>
      <Route path="/main" exact component={App} />
      <Route path="/app" component={Application} />
    </BrowserRouter>
  </Root>
);

ReactDOM.render(app, document.getElementById("root"));
