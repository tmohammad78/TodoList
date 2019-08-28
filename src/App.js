import React, { Component, Suspense } from "react";
import { Link, Route } from "react-router-dom";

import Users from "./containers/Users";
import asyncComponent from "./hoc/asyncComponent";

const AsyncPizza = asyncComponent(() => {
  return import("./containers/Pizza.js");
});
const Header = React.lazy(() => import("./components/Header"));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>..loading</div>}>
        <Header />
      </Suspense>
    );
  }
}
export default App;
{
  /* <div>
          <div>
              <Link to="/">Users</Link> |
              <Link to="/pizza">Pizza</Link>
          </div>
          <div>
              <Route path="/" exact component={Users} />
              <Route path="/pizza" component={AsyncPizza} />
          </div>
      </div> */
}
