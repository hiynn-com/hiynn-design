import React from "react";
import { render } from "react-dom";
import MyComponent from "../components/demo";
import "../components/demo/style";
const App = () => <MyComponent />;
render(<App />, document.getElementById("root"));
