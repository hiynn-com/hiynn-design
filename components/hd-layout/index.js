import React, { Component } from "react";
import { Layout, Menu, Icon, Avatar, Dropdown, Spin } from "antd";
import { fromJs, Map, Set } from "immutable";
const { Header, Content, Sider } = Layout;

class HdLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderRightMenu = () => {
    return (
      <Menu>
        <Menu.Item key="password">
          <Icon type="setting" />
          <span>修改密码</span>
        </Menu.Item>
        <Menu.Item key="signout">
          <Icon type="logout" />
          <span>退出登录</span>
        </Menu.Item>
      </Menu>
    );
  };
  render() {
    const { menu } = this.props;
    return (
      <Layout className="layout-container">
        <Sider theme="light" trigger={null} collapsible width={218} breakpoint="lg">
          <div className="logo">
            <img width="32" alt="" />
            <span>logo</span>
          </div>
          {menu}
        </Sider>
        <Layout className="layout-page-right-container">
          <Header className="right-header">
            <div className="right-header-left">
              <Icon className="trigger" />
              <span>sdfsdf</span>
            </div>
            <div className="right-header-right">
              <Dropdown overlay={this.renderRightMenu} placement="bottomRight">
                <div>
                  <Avatar size="default" icon="user" />
                  <span>用户</span>
                </div>
              </Dropdown>
            </div>
          </Header>
          <Content className="layout-page-right-content" />
        </Layout>
      </Layout>
    );
  }
}

export default HdLayout;
