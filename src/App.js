import React, { Component } from "react";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import { Switch, Redirect } from "react-router";
import LayoutPage from "./components/LayoutPage";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={LayoutPage} />} />
        </Switch>
      </HashRouter>
    );
  }
}
export default App;
