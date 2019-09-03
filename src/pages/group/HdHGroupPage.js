import React, { Component } from "react";
import HGroup from "../../../components/hd-HGroup";
import "../../../components/hd-HGroup/style/index";

export default class HdHGroupPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return [
      <HGroup style={{ background: "lightblue" }} key={1}>
        <div>i'm a div</div>
        <p>this is a p</p>
        <span>span span...</span>
      </HGroup>,

      <HGroup width="900" height="200" horizontal-align="right" vertical-align="top" style={{ background: "lightgray" }} key={2}>
        <div>i'm a div</div>
        <p>this is a p</p>
        <span>span span...</span>
      </HGroup>,

      <HGroup width="1100" height="200" horizontal-align="justify" vertical-align="center" style={{ background: "lightblue" }} key={3}>
        <div>i'm a div</div>
        <p>this is a p</p>
        <span>span span...</span>
      </HGroup>,

      <HGroup width="50%" height="200" horizontal-align="between" vertical-align="bottom" style={{ background: "lightgray" }} key={4}>
        <div>i'm a div</div>
        <p>this is a p</p>
        <span>span span...</span>
      </HGroup>
    ];
  }
}
