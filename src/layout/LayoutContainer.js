import React, { Component } from "react";
import { Menu, Icon, Layout, Input, Button } from "antd";
import { connect } from "react-redux";
import { renderRoutes, matchRoutes } from "react-router-config";
import HdLayout from "../../components/layout";
import layoutAction from "../redux/layout/layoutAction";
import "../../components/layout/style";
import "../../components/menus/style";
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
          </div>
          <div className="header-right">
            <div className="menu">
              <div className="menu-item" onClick={() => this.home()}>
                <span className="title">首页</span>
              </div>
              <div className="menu-item" onClick={() => this.docs()}>
                <span className="title selected">组件</span>
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
                  <NavLink to="/docs/components/layout">Layout</NavLink>
                </Menu.Item>
                <Menu.Item key="42">
                  <NavLink to="/docs/components/master">Master</NavLink>
                </Menu.Item>
                <Menu.Item key="43">
                  <NavLink to="/docs/components/filter">Filter</NavLink>
                </Menu.Item>
                <Menu.Item key="44">
                  <NavLink to="/docs/components/searchForm">SearchForm</NavLink>
                </Menu.Item>
                <Menu.Item key="45">
                  <NavLink to="/docs/components/formModal">FormModal</NavLink>
                </Menu.Item>
                <Menu.Item key="46">
                  <NavLink to="/docs/components/card">Card</NavLink>
                </Menu.Item>
                <Menu.Item key="47">
                  <NavLink to="/docs/components/hgroup">HGroup</NavLink>
                </Menu.Item>
                <Menu.Item key="48">
                  <NavLink to="/docs/components/vgroup">VGroup</NavLink>
                </Menu.Item>
                <Menu.Item key="51">
                  <NavLink to="/docs/components/panel">Panel</NavLink>
                </Menu.Item>
                <Menu.Item key="52">
                  <NavLink to="/docs/components/article">Article</NavLink>
                </Menu.Item>
                <Menu.Item key="53">
                  <NavLink to="/docs/components/comment">Comment</NavLink>
                </Menu.Item>
                <Menu.Item key="54">
                  <NavLink to="/docs/components/admin">Admin</NavLink>
                </Menu.Item>
                <Menu.Item key="55">
                  <NavLink to="/docs/components/formValidation">FormValidation</NavLink>
                </Menu.Item>
                <Menu.Item key="56">
                  <NavLink to="/docs/components/editableTable">EditableTable</NavLink>
                </Menu.Item>
                <Menu.Item key="57">
                  <NavLink to="/docs/components/divideBox">DivideBox</NavLink>
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
