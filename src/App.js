import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

import asyncComponent from "./hoc/asyncComponent";

// const AsyncPizza = asyncComponent(() => {
//   return import("./containers/Pizza.js");
// });
const Header = React.lazy(() => import("./components/Header"));
const HowPage = React.lazy(() => import("./components/Pages/HowPage"));
const Template = React.lazy(() => import("./components/Pages/Template"));
const Portal = React.lazy(() => import("./components/Portal"));
const Modal = React.lazy(() => import("./components/Modal"));
const Login = React.lazy(() => import("./components/Portal/Login"));
const Signup = React.lazy(() => import('./components/Portal/Signup'));
const Main = React.lazy(() => import("./components/Main"));

import "./components/Spinner/Spinner.scss";

class App extends Component {
  render() {
    return (
      <Suspense
        fallback={
          <div className="spinner lds-ring">
            <div />
            <div />
            <div />
            <div />
          </div>
        }
      >
        <Header />
        <Main />
        <Switch>
          <Route path="/how" component={HowPage} />
          <Route path="/template" component={Template} />
        </Switch>
        <Route
          path="/login"
          render={() => (
            <Portal>
              <Modal buttonName="Login">
                <Login />
              </Modal>
            </Portal>
          )}
        />
        <Route
          path="/signup"
          render={() => (
            <Portal>
              <Modal buttonName="sign up">
                <Signup />
              </Modal>
            </Portal>
          )}
        />
      </Suspense>
    );
  }
}
export default App;
