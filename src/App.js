import React, { Component } from "react";
import { BrowserRouter as Router, HashRouter, Route } from "react-router-dom";
import { Switch, Redirect } from "react-router";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { PersistGate } from "redux-persist/integration/react";

import configureStore, { history } from "./redux/store";
import LayoutContainer from "./components/LayoutContainer";
const { persistor, store } = configureStore(/* provide initial state if any */);

class App extends Component {
  componentDidMount() {
    console.log("process.env.PUBLIC_URL", process.env.PUBLIC_URL);
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ConnectedRouter history={history}>
            {/* <Router basename={"hiynn-design/"}> */}
            <Switch>
              <Route path="/" component={LayoutContainer} />
            </Switch>
            {/* </Router> */}
          </ConnectedRouter>{" "}
        </PersistGate>
      </Provider>
    );
  }
}
export default App;
