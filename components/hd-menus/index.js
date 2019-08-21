import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import cls from "classnames";

class HdMenus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: []
    };
  }
  renderMenus = menus => {
    let _menus = menus.map(menu =>
      menu.show && typeof menu.children !== "undefined" && typeof menu.children !== null && menu.children.length > 0 ? (
        <Menu.SubMenu
          key={menu.id}
          title={
            <div>
              {menu.icon ? <Icon type={menu.icon} /> : <Icon type="exclamation-circle" />}
              <span>{menu.title}</span>
            </div>
          }
        >
          {menu.children.map(children => {
            return children.show ? (
              <Menu.Item key={children.id}>
                <NavLink to={children.url}>{children.title}</NavLink>
              </Menu.Item>
            ) : null;
          })}
        </Menu.SubMenu>
      ) : (
        menu.show && (
          <Menu.Item key={menu.id}>
            <NavLink to={menu.url}>
              {menu.icon ? <Icon type={menu.icon} /> : <Icon type="exclamation-circle" />}
              <span>{menu.title}</span>
            </NavLink>
          </Menu.Item>
        )
      )
    );
    return _menus;
  };
  render() {
    const { theme, menus, width, collapsed } = this.props;
    console.log("collapsed=", collapsed);

    let _menus = null;
    if (menus && menus.length > 0) {
      _menus = this.renderMenus(menus);
    }
    return (
      <Menu mode="inline" onClick={this.handleClick} theme={theme} defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} className="hd-sider-menu-container">
        {_menus}
      </Menu>
    );
  }
}

export default HdMenus;
