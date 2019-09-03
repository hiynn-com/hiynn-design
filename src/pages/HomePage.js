import React, { Component } from "react";
import { NavLink, withRouter, Route, Link } from "react-router-dom";

@withRouter
class HomePage extends Component {
  componentDidMount() {
    this.props.history.push("/docs/introduction");
  }
  render() {
    return <div className="home-page-container"></div>;
  }
}

export default HomePage;
