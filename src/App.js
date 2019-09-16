import React, { Component, Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import Routing from "./hoc/Route";
import { routes } from "./Routes";
import { RouteWithSubRoutes } from "./hoc/Route/index";

const Header = React.lazy(() => import("./components/Main/Header"));
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
    return (
        <Router>
          <div>
            <Switch>
              {routes.map((route, i) => {
                return <RouteWithSubRoutes {...route} key={i} />;
              })}
            </Switch>
          </div>
        </Router>
    );
  }
}
export default App;

// let { location } = this.props;
// let isModal = !!(
//   location.state &&
//   location.state.modal &&
//   this.previousLocation !== location
// ); // not initial render
// return (
// <Suspense
//   fallback={
//     <div className="spinner lds-ring">
//       <div />
//       <div />
//       <div />
//       <div />
//     </div>
//   }
// >
// <div>

//   <Switch>
//     {Routes.map((route, i) => {
//       return <WithRoute {...route} key={i} />;
//     })}
//   </Switch>
// </div>

{
  /* <Header />
        <Main />
        <Switch>
          <Route path="/how" component={HowPage} />
          <Route path="/template" component={Template} />
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
          <PrivateRoute path="/app" exact component={Application} />
        </Switch> */
}
// </Suspense>
