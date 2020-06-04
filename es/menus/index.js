import "antd/lib/menu/style";
import _Menu from "antd/lib/menu";
import "antd/lib/icon/style";
import _Icon from "antd/lib/icon";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import React, { Component } from "react";
import PropTypes from "prop-types";
import cls from "classnames";

var HdMenus = function (_Component) {
  _inheritsLoose(HdMenus, _Component);

  function HdMenus(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _this.renderMenus = function (menus) {
      var _menus = menus.map(function (menu) {
        return menu.show && typeof menu.children !== "undefined" && typeof menu.children !== null && menu.children.length > 0 ? React.createElement(_Menu.SubMenu, {
          key: menu.id,
          title: React.createElement("div", null, menu.icon ? React.createElement(_Icon, {
            type: menu.icon
          }) : React.createElement(_Icon, {
            type: "exclamation-circle"
          }), React.createElement("span", null, menu.title))
        }, menu.children.map(function (children) {
          return children.show ? React.createElement(_Menu.Item, {
            key: children.id
          }) : null;
        })) : menu.show && React.createElement(_Menu.Item, {
          key: menu.id
        });
      });

      return _menus;
    };

    _this.state = {
      menus: []
    };
    return _this;
  }

  var _proto = HdMenus.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        theme = _this$props.theme,
        menus = _this$props.menus,
        width = _this$props.width,
        collapsed = _this$props.collapsed;
    console.log("collapsed=", collapsed);
    var _menus = null;

    if (menus && menus.length > 0) {
      _menus = this.renderMenus(menus);
    }

    return React.createElement(_Menu, {
      mode: "inline",
      onClick: this.handleClick,
      theme: theme,
      defaultSelectedKeys: ["1"],
      defaultOpenKeys: ["sub1"],
      className: "hd-sider-menu-container"
    }, _menus);
  };

  return HdMenus;
}(Component);

export default HdMenus;
//# sourceMappingURL=index.js.map