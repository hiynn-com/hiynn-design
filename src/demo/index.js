import React, { Component } from "react";
import { Button } from "antd";

class Demo extends Component {
  render() {
    return (
      <div className="demo-container">
        <div className="demo-wrapper">this is my demo wrapper</div>
        <Button type="primary">this is demo component</Button>
      </div>
    );
  }
}

export default Demo;
