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
const Signup = React.lazy(() => import("./components/Portal/Signup"));
const Main = React.lazy(() => import("./components/Main"));
import PrivateRoute from './components/privateRoute';
import Dashboard from './components/Dashboard';

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

    console.log(this.props);
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
          <Route path="/how" component={HowPage} />
          <Route path="/template" component={Template} />

          {/* {isModal ? ( */}
          <Route
            path="/login"
            render={() => (
              <Portal>
                <Modal>
                  <Login />
                </Modal>
              </Portal>
            )}
          />
          {/* // ) : null} */}
          <Route
            path="/signup"
            render={() => (
              <Portal>
                <Modal>
                  <Signup />
                </Modal>
              </Portal>
            )}
          />
          <PrivateRoute path='/dashboard' exact strict component={Dashboard}   />
        </Switch>
      </Suspense>
    );
  }
}
export default App;
