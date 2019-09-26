import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Secret from "./Secret";
import Profile from "./Profile";
import Nav from "./Nav";
import PrivateRoute from "./PrivateRoute";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    };
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  toggleLogin() {
    this.setState(st => ({ loggedIn: !st.loggedIn }));
  }

  render() {
    const { loggedIn } = this.state;
    return (
      <div>
        <Nav loggedIn={loggedIn} toggleLogin={this.toggleLogin} />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/about" render={() => <About />} />
          <PrivateRoute
            loggedIn={loggedIn}
            exact
            path="/profile"
            render={() => <Profile />}
          />
          <PrivateRoute
            loggedIn={loggedIn}
            exact
            path="/secret"
            render={() => <Secret />}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Main;
