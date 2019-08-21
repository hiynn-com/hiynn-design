import React, { Component } from "react";
import { Button } from "antd";
import PropTypes from "prop-types";
import cls from "classnames";

class HdMaster extends Component {
  render() {
    return (
      <div className="demo-container">
        <Button type="primary">this is master component</Button>
      </div>
    );
  }
}

export default HdMaster;
