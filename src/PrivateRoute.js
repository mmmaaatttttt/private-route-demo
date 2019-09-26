import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class PrivateRoute extends Component {
  render() {
    const { loggedIn, exact, path, render } = this.props;
    if (!loggedIn) return <Redirect to="/" />;
    return <Route exact={exact} path={path} render={render} />;
  }
}

export default PrivateRoute;
