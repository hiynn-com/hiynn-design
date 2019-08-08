import React, { Component } from "react";
import { Button } from "antd";
import "./style/demo.scss";

class Demo2 extends Component {
  render() {
    return (
      <div className="demo-container">
        <Button type="primary">this is demo2 component</Button>
      </div>
    );
  }
}

export default Demo2;
