import React, { Component, Suspense } from "react";
import { Route, Switch } from "react-router-dom";

const Header = React.lazy(() => import("./components/Header"));
const HowPage = React.lazy(() => import("./components/Pages/HowPage"));
const Template = React.lazy(() => import("./components/Pages/Template"));
const Portal = React.lazy(() => import("./components/Portal"));
const Modal = React.lazy(() => import("./components/Modal"));
const Login = React.lazy(() => import("./components/Portal/Login"));
const Signup = React.lazy(() => import("./components/Portal/Signup"));
const Main = React.lazy(() => import("./components/Main"));
import PrivateRoute from "./components/privateRoute";
import Application from "./components/Application";

import "./components/Spinner/Spinner.scss";

class App extends Component {
  // previousLocation = this.props.location;

  // componentWillUpdate(nextProps) {
  //   let { location } = this.props;

  //   // set previousLocation if props.location is not modal
  //   if (
  //     nextProps.history.action !== "POP" &&
  //     (!location.state || !location.state.modal)
  //   ) {
  //     this.previousLocation = this.props.location;
  //   }
  // }

  render() {

    // let { location } = this.props;
    // let isModal = !!(
    //   location.state &&
    //   location.state.modal &&
    //   this.previousLocation !== location
    // ); // not initial render
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
        {/* location={isModal ? this.previousLocation : location} */}
        <Switch>
          {/* <Route path="/" exact component={Main} /> */}
          <Route path={`main/how`} component={HowPage} />
          <Route path="/main/template" component={Template} />

          {/* {isModal ? ( */}
          <Route
            path="/main/login"
            render={() => (
              <Portal>
                <Modal Route >
                  <Login />
                </Modal>
              </Portal>
            )}
          />

          <Route
            path="/main/signup"
            render={() => (
              <Portal>
                <Modal Route>
                  <Signup />
                </Modal>
              </Portal>
            )}
          />
          {/* <PrivateRoute path="/app" exact component={Application} /> */}
        </Switch>
      </Suspense>
    );
  }
}
export default App;
