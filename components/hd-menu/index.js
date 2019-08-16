import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";

class HdMenu extends Component {
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
              {menu.icon ? <Icon type={menu.icon} /> : null}
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
              {menu.icon ? <Icon type={menu.icon} /> : null}
              <span>{menu.title}</span>
            </NavLink>
          </Menu.Item>
        )
      )
    );
    console.log("_menus=", _menus);
    return _menus;
  };
  render() {
    const { menus } = this.props;
    let _menus = null;
    if (menus && menus.length > 0) {
      _menus = this.renderMenus(menus);
    }
    return (
      <Menu onClick={this.handleClick} style={{ width: 256 }} defaultSelectedKeys={["1"]} defaultOpenKeys={["sub1"]} mode="inline">
        {_menus}
      </Menu>
    );
  }
}

export default HdMenu;
