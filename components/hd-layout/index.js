import React, { Component } from "react";
import { Layout, Menu, Icon, Avatar, Dropdown, Spin } from "antd";
import { fromJs, Map, Set } from "immutable";
import PropTypes from "prop-types";
import cls from "classnames";
import HdMenus from "../hd-menus";
import { StyleContext } from "../context/style-context";
const { Header, Content, Sider } = Layout;

class HdLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderHeaderMenu = () => {
    return (
      <Menu>
        <Menu.Item key="password" className="hd-layout-header-dropdown-menu-item">
          <Icon type="setting" />
          <span>修改密码</span>
        </Menu.Item>
        <Menu.Item key="signout" className="hd-layout-header-dropdown-menu-item">
          <Icon type="logout" />
          <span>退出登录</span>
        </Menu.Item>
      </Menu>
    );
  };
  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
  }
  render() {
    let styleContext = this.context;

    const { className, style } = this.props;
    const { children, theme, sider, logo, title, subTitle, menus, ...atr } = this.props;
    const { toggleCollapse } = this.props;
    const prefixCls = "hd";
    const classnames = cls(prefixCls, className, {
      [`${prefixCls}-layout-container`]: true
    });

    let titleCls = cls("hd-layout-logo-title", {
      "hide-title": sider.get("collapsed")
    });
    return (
      <Layout className={classnames}>
        <Sider theme={theme} trigger={null} collapsible width={sider.get("width")} collapsed={sider.get("collapsed")} breakpoint={sider.breakpoint} className="hd-layout-sider">
          <div className="hd-layout-logo">
            {logo}
            <span className={titleCls}>{title}</span>
          </div>
          <HdMenus theme={theme} menus={menus} width={sider.get("width")} collapsed={sider.get("collapsed")} />
        </Sider>
        <Layout className="hd-layout-main">
          <Header className="hd-layout-main-header">
            <div className="hd-layout-main-header-content">
              <div className="hd-layout-main-header-subtitle">
                {typeof sider.get("collapsed") === "undefined" ? null : <Icon type={sider.get("collapsed") ? "menu-unfold" : "menu-fold"} className="collapse-icon" onClick={() => toggleCollapse()} />}
                <span className="sub-title">{subTitle}</span>
              </div>
              <div className="hd-layout-header-toolbar">
                <Dropdown overlay={this.renderHeaderMenu} placement="bottomRight">
                  <div className="hd-layout-header-toolbar-content">
                    <Avatar className="user-avatar" icon="user" />
                    <span className="user-name">用户</span>
                  </div>
                </Dropdown>
              </div>
            </div>
          </Header>
          <Content className="hd-layout-main-content">{children}</Content>
        </Layout>
      </Layout>
    );
  }
}

HdLayout.contextType = StyleContext;

export default HdLayout;
