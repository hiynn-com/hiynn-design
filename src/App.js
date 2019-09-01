import React, { Component } from "react";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import { Switch, Redirect } from "react-router";
import LayoutContainer from "./components/LayoutContainer";

class App extends Component {
  componentDidMount() {
    console.log("process.env.PUBLIC_URL", process.env.PUBLIC_URL);
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={LayoutContainer} />
        </Switch>
      </Router>
    );
  }
}
export default App;
