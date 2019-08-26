import React, { Component } from "react";
import { Layout, Menu, Icon, Avatar, Dropdown, Spin } from "antd";
import { fromJs, Map, Set } from "immutable";
import PropTypes from "prop-types";
import cls from "classnames";
import HdMenus from "../hd-menus";
import { StyleContext } from "../context/style-context";
const { Header, Content, Sider } = Layout;

class HdFormValidation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let styleContext = this.context;
    console.log(styleContext);

    return <div>{this.props.children}</div>;
  }
}

HdFormValidation.contextType = StyleContext;

export default HdFormValidation;
