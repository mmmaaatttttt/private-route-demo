import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    const { loggedIn, toggleLogin } = this.props;
    return (
      <div className="Nav">
        <NavLink exact to="/">
          Home
        </NavLink>
        <NavLink exact to="/about">
          About
        </NavLink>
        <NavLink exact to="/profile">
          My Profile
        </NavLink>
        <NavLink exact to="/secret">
          Secret Page
        </NavLink>
        <button onClick={toggleLogin}>Log {loggedIn ? "out" : "in"}</button>
      </div>
    );
  }
}

export default Nav;
