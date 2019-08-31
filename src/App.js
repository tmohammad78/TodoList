import React, { Component, Suspense } from "react";
import { Link, Route } from "react-router-dom";

import asyncComponent from "./hoc/asyncComponent";

// const AsyncPizza = asyncComponent(() => {
//   return import("./containers/Pizza.js");
// });
const Header = React.lazy(() => import("./components/Header"));
const HowPage = React.lazy(() => import("./components/Pages/HowPage"));
const Template = React.lazy(() => import("./components/Pages/Template"));
const Main = React.lazy(()=> import('./components/Main'));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>..loading</div>}>
        <Header />
        <Main />
        <Route path="/how" component={HowPage} />
        <Route path="/template" component={Template} />
      </Suspense>
    );
  }
}
export default App;
