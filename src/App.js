import React, { Component } from "react";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import { Switch, Redirect } from "react-router";
import HdLayoutPage from "./pages/HdLayoutPage";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" component={HdLayoutPage} />} />
        </Switch>
      </HashRouter>
    );
  }
}
export default App;
