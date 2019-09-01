import React, { Component, Suspense } from "react";
import { Link, Route, Switch } from "react-router-dom";

import asyncComponent from "./hoc/asyncComponent";

// const AsyncPizza = asyncComponent(() => {
//   return import("./containers/Pizza.js");
// });
const Loader = React.lazy(() => import("./components/Spinner"));
const Header = React.lazy(() => import("./components/Header"));
const HowPage = React.lazy(() => import("./components/Pages/HowPage"));
const Template = React.lazy(() => import("./components/Pages/Template"));
const Main = React.lazy(() => import("./components/Main"));
import './components/Spinner/Spinner.scss';

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
        {/* <Modal>
          <Child/>
        </Modal> */}
      </Suspense>
    );
  }
}
export default App;
