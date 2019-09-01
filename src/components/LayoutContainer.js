import React, { Component } from "react";
import { Menu, Icon, Layout } from "antd";
import { renderRoutes, matchRoutes } from "react-router-config";
import HdLayout from "../../components/hd-layout";
import "../../components/hd-layout/style";
import "../../components/hd-menus/style";
import "../assets/css/layoutPage.pcss";
import logo from "../assets/images/hd_logo.jpg";
import { Map } from "immutable";
import routes from "../router";
import { NavLink, withRouter, Route, Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

class LayoutContainer extends Component {
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
  github = () => {
    window.location.href = "https://github.com/hiynn-com/hiynn-design";
  };
  render() {
    return (
      <Layout className="layout-container">
        <Header className="header-container">
          <div className="header-left">
            <img src={logo} width={36}></img>
            <span className="title">Hiynn Design</span>
            <div className="menu">
              <div className="menu-item">
                <NavLink to="/" activeClassName="selected">
                  Home
                </NavLink>
              </div>
              <div className="menu-item">
                <NavLink to="/docs" activeClassName="selected">
                  Documentation
                </NavLink>
              </div>
            </div>
          </div>
          <div className="header-right" onClick={() => this.github()}>
            <Icon type="github" style={{ fontSize: "28px" }} />
          </div>
        </Header>
        <Layout className="content-layout-container">
          <Sider theme="light" className="content-layout-sider" width={300}>
            <Menu className="content-layout-sider-menu" onClick={this.handleClick} defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} mode="inline">
              <Menu.Item key="1">
                <NavLink to="/">介绍</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/quickly">快速上手</NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/theme">主题设置</NavLink>
              </Menu.Item>
              <SubMenu key="4" title={<span>组件</span>}>
                <Menu.Item key="41">
                  <NavLink to="/components/hd-layout">HdLayout</NavLink>
                </Menu.Item>
                <Menu.Item key="42">
                  <NavLink to="/components/hd-master">HdMaster</NavLink>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content className="content">{renderRoutes(routes)}</Content>
        </Layout>
      </Layout>
    );
  }
}

export default LayoutContainer;
