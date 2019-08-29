import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { renderRoutes, matchRoutes } from "react-router-config";
import HdLayout from "../../components/hd-layout";
import "../../components/hd-layout/style";
import "../../components/hd-menus/style";
import logo from "../assets/images/hd_logo.jpg";
import { Map } from "immutable";
import routes from "../router";

class HdLayoutPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sider: Map({
        width: 255,
        theme: "light",
        breakpoint: "lg",
        collapsed: false
      }),
      title: "HiynnDesign",
      subTitle: "海云前端标准化团队出品",
      menus: [
        {
          id: 1,
          title: "介绍",
          icon: "read",
          url: "/",
          show: true,
          order: 1
        },
        {
          id: 2,
          title: "快速上手",
          icon: "tool",
          url: "/quickly",
          show: true,
          order: 2
        },
        {
          id: 3,
          title: "主题设置",
          icon: "bg-colors",
          url: "/theme",
          show: true,
          order: 3
        },
        {
          id: 4,
          title: " 组件",
          icon: "build",
          url: "/components",
          show: true,
          order: 4,
          children: [
            {
              id: 41,
              title: "HdLayout",
              icon: null,
              url: "/components/hd-layout",
              show: true,
              order: 1
            },
            {
              id: 42,
              title: "HdMaster",
              icon: null,
              url: "/components/hd-master",
              show: true,
              order: 2
            },
            {
              id: 43,
              title: "HdFilter",
              icon: null,
              url: "/components/hd-filter",
              show: true,
              order: 2
            }
          ]
        }
      ]
    };
  }
  toggleCollapse = () => {
    this.setState({
      sider: this.state.sider.set("collapsed", !this.state.sider.get("collapsed"))
    });
  };
  render() {
    return (
      <HdLayout
        theme="light"
        toggleCollapse={this.toggleCollapse}
        title={this.state.title}
        subTitle={this.state.subTitle}
        sider={this.state.sider}
        logo={<img src={logo} width={40} style={{ borderRadius: "100%" }} />}
        menus={this.state.menus}
        showUserDropdown={true}
      >
        {renderRoutes(routes)}
      </HdLayout>
    );
  }
}

export default HdLayoutPage;
