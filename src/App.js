import React, { Component } from "react";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import { Switch, Redirect } from "react-router";
import HdLayoutPage from "./pages/HdLayoutPage";
import HdHGroupPage from './pages/HdHGroupPage';
import HdVGroupPage from './pages/HdVGroupPage';
import HdCodeAreaPage from './pages/HdCodeAreaPage';
import HdPanelPage from './pages/HdPanelPage';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={HdLayoutPage} />
          <Route path="/HGroup" component={HdHGroupPage} />
          <Route path="/VGroup" component={HdVGroupPage} />
          <Route path="/CodeArea" component={HdCodeAreaPage} />
          <Route path="/Panel" component={HdPanelPage} />
        </Switch>
      </HashRouter>
    );
  }
}
export default App;
