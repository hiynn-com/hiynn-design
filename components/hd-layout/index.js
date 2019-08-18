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
    const { initData, menus } = this.props;
    return (
      <Layout className="layout-container">
        <Sider theme="light" trigger={null} collapsible width={218} breakpoint="lg" className="layout-sider">
          <div className="logo">
            {initData.logos}
            <span>{initData.title}</span>
          </div>
          {menus}
        </Sider>
        <Layout>
          <Header className="layout-header">
            <div>
              <Icon className="trigger" />
              <span>{initData.subTitle}</span>
            </div>
            <div>
              <Dropdown overlay={this.renderRightMenu} placement="bottomRight">
                <div>
                  <Avatar size="default" icon="user" />
                  <span>用户</span>
                </div>
              </Dropdown>
            </div>
          </Header>
          <Content />
        </Layout>
      </Layout>
    );
  }
}

export default HdLayout;
