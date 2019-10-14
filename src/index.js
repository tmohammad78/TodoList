import React , { useEffect} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

import Application from "./components/Application";
import Root from "./Root";
import App from "./App";
import Modal from "./components/Modal";
import Portal from "./components/Portal";
import Signup from "./components/Portal/Signup";
// const Test = React.lazy(() => import("./components/sss"));
import Test from './components/sss';
import axios from 'axios';

import "./styles/main.scss";

const app = (

  <Root>
    <BrowserRouter>
      <Route path="/main" exact component={App} />
      <Route
        path="/signup"
        render={() => (
          <Portal>
            <Modal Route>
              <Signup />
            </Modal>
          </Portal>
        )}
      />
      <Route path="/app" component={Application} />
      <Route path="" />
      <Route path="/test" component={Test} />

    </BrowserRouter>
  </Root>
);

ReactDOM.render(app, document.getElementById("root"));
