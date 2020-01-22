import React, { Component } from "react";
import CodeZone from "../../../components/codeZone/index";
import "../../../components/codeZone/style/index";

export default class HdCodeZonePage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return <CodeZone width="400" height="300" />;
  }
}
