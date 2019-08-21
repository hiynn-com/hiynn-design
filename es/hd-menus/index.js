import "antd/es/menu/style/css";
import _Menu from "antd/es/menu";
import "antd/es/icon/style/css";
import _Icon from "antd/es/icon";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import cls from "classnames";

var HdMenus =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(HdMenus, _Component);

  function HdMenus(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "renderMenus", function (menus) {
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
          }, React.createElement(NavLink, {
            to: children.url
          }, children.title)) : null;
        })) : menu.show && React.createElement(_Menu.Item, {
          key: menu.id
        }, React.createElement(NavLink, {
          to: menu.url
        }, menu.icon ? React.createElement(_Icon, {
          type: menu.icon
        }) : React.createElement(_Icon, {
          type: "exclamation-circle"
        }), React.createElement("span", null, menu.title)));
      });

      return _menus;
    });

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