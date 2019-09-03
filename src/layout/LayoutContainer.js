import React, { Component } from "react";
import { Menu, Icon, Layout, Input, Button } from "antd";
import { connect } from "react-redux";
import { renderRoutes, matchRoutes } from "react-router-config";
import HdLayout from "../../components/hd-layout";
import layoutAction from "../redux/layout/layoutAction";
import "../../components/hd-layout/style";
import "../../components/hd-menus/style";
import "../assets/css/layoutPage.pcss";
import logo from "../assets/images/hd_logo.jpg";
import { Map } from "immutable";
import routes from "../router";
import { NavLink, withRouter, Route, Link } from "react-router-dom";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

@withRouter
@connect(
  ({ layoutReducer }) => ({ layoutReducer }),
  { saveMenuIndex: layoutAction.saveMenuIndex }
)
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
      subTitle: "海云前端标准化团队出品"
      // menus: [
      //   {
      //     id: 1,
      //     title: "介绍",
      //     icon: "read",
      //     url: "/",
      //     show: true,
      //     order: 1
      //   },
      //   {
      //     id: 2,
      //     title: "快速上手",
      //     icon: "tool",
      //     url: "/quickly",
      //     show: true,
      //     order: 2
      //   },
      //   {
      //     id: 3,
      //     title: "主题设置",
      //     icon: "bg-colors",
      //     url: "/theme",
      //     show: true,
      //     order: 3
      //   },
      //   {
      //     id: 4,
      //     title: " 组件",
      //     icon: "build",
      //     url: "/components",
      //     show: true,
      //     order: 4,
      //     children: [
      //       {
      //         id: 41,
      //         title: "HdLayout",
      //         icon: null,
      //         url: "/components/hd-layout",
      //         show: true,
      //         order: 1
      //       },
      //       {
      //         id: 42,
      //         title: "HdMaster",
      //         icon: null,
      //         url: "/components/hd-master",
      //         show: true,
      //         order: 2
      //       }
      //     ]
      //   }
      // ]
    };
  }
  clickMenu = ({ item, key, keyPath }) => {
    this.props.saveMenuIndex(keyPath);
  };
  toggleCollapse = () => {
    this.setState({
      sider: this.state.sider.set("collapsed", !this.state.sider.get("collapsed"))
    });
  };
  github = () => {
    window.location.href = "https://github.com/hiynn-com/hiynn-design";
  };
  home = () => {
    window.location.href = "https://hiynn-com.github.io/hiynn-design-landing";
  };
  docs = () => {
    this.props.saveMenuIndex("1");
    this.props.history.push("/docs/introduction");
  };
  render() {
    const { layoutReducer } = this.props;
    return (
      <Layout className="layout-container">
        <Header className="header-container">
          <div className="header-left">
            <img src={logo} width={36}></img>
            <span className="title">Hiynn Design</span>
            {/* <Search placeholder="在 hiynn.design 中搜索" className="search" onSearch={value => console.log(value)} style={{ width: 400 }} /> */}
          </div>
          <div className="header-right">
            <div className="menu">
              <div className="menu-item" onClick={() => this.home()}>
                <a href="javascript:;">首页</a>
              </div>
              <div className="menu-item" onClick={() => this.docs()}>
                <a href="javascript:;" className="selected">
                  组件
                </a>
              </div>
              <div className="menu-item">
                <NavLink to="/about" activeClassName="selected">
                  关于
                </NavLink>
              </div>
              <div className="menu-item">
                <Button type="primary" ghost onClick={() => (window.location.href = "https://github.com/hiynn-com/hiynn-design/releases")}>
                  下载
                </Button>
              </div>
            </div>
            <div className="icon-wrapper">
              <Icon type="github" style={{ fontSize: "28px" }} onClick={() => this.github()} />
            </div>
          </div>
        </Header>
        <Layout className="content-layout-container">
          <Sider theme="light" className="content-layout-sider" width={300}>
            <Menu
              className="content-layout-sider-menu"
              mode="inline"
              theme="light"
              defaultSelectedKeys={[layoutReducer.get("index")]}
              selectedKeys={[layoutReducer.get("index")]}
              defaultOpenKeys={[layoutReducer.get("subIndex")]}
              onClick={this.clickMenu}
            >
              <Menu.Item key="1">
                <NavLink to="/docs/introduction">介绍</NavLink>
              </Menu.Item>
              <Menu.Item key="2">
                <NavLink to="/docs/quickly">快速上手</NavLink>
              </Menu.Item>
              <Menu.Item key="3">
                <NavLink to="/docs/theme">主题设置</NavLink>
              </Menu.Item>
              <SubMenu key="4" title={<span>组件</span>}>
                <Menu.Item key="41">
                  <NavLink to="/docs/components/hd-layout">HdLayout</NavLink>
                </Menu.Item>
                <Menu.Item key="42">
                  <NavLink to="/docs/components/hd-master">HdMaster</NavLink>
                </Menu.Item>
                <Menu.Item key="43">
                  <NavLink to="/docs/components/hd-filter">HdFilter</NavLink>
                </Menu.Item>
                <Menu.Item key="44">
                  <NavLink to="/docs/components/hd-searchForm">HdSearchForm</NavLink>
                </Menu.Item>
                <Menu.Item key="45">
                  <NavLink to="/docs/components/hd-FormModal">HdFormModal</NavLink>
                </Menu.Item>
                <Menu.Item key="46">
                  <NavLink to="/docs/components/hd-card">HdCard</NavLink>
                </Menu.Item>

                <Menu.Item key="47">
                  <NavLink to="/docs/components/hd-hgroup">HdHGroup</NavLink>
                </Menu.Item>
                <Menu.Item key="48">
                  <NavLink to="/docs/components/hd-vgroup">HdVGroup</NavLink>
                </Menu.Item>
                <Menu.Item key="49">
                  <NavLink to="/docs/components/hd-codearea">HdCodeArea</NavLink>
                </Menu.Item>
                <Menu.Item key="50">
                  <NavLink to="/docs/components/hd-panel">HdPanel</NavLink>
                </Menu.Item>
                <Menu.Item key="51">
                  <NavLink to="/docs/components/hd-article">HdArticle</NavLink>
                </Menu.Item>
                <Menu.Item key="52">
                  <NavLink to="/docs/components/hd-comment">HdComment</NavLink>
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
