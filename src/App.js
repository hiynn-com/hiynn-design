import React, { Component } from "react";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import { Switch, Redirect } from "react-router";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router/immutable";
import { PersistGate } from "redux-persist/integration/react";
import { renderRoutes, matchRoutes } from "react-router-config";
import Loading from "./layout/Loading";
import loadable from "@loadable/component";

import configureStore, { history } from "./redux/store";
import LayoutContainer from "./layout/LayoutContainer";
import RouteViewer from "./layout/RouteViewer";
import routes from "./router";
import HomePage from "./pages/home/index";
const { persistor, store } = configureStore(/* provide initial state if any */);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            {/* <HashRouter> */}
            <>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/docs" component={LayoutContainer} />
              </Switch>
            </>
            {/* </HashRouter> */}
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
