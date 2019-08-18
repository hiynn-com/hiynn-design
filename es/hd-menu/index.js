import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { NavLink } from "react-router-dom";

var HdMenu =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(HdMenu, _Component);

  function HdMenu(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "renderMenus", function (menus) {
      var _menus = menus.map(function (menu) {
        return menu.show && typeof menu.children !== "undefined" && typeof menu.children !== null && menu.children.length > 0 ? React.createElement(Menu.SubMenu, {
          key: menu.id,
          title: React.createElement("div", null, menu.icon ? React.createElement(Icon, {
            type: menu.icon
          }) : null, React.createElement("span", null, menu.title))
        }, menu.children.map(function (children) {
          return children.show ? React.createElement(Menu.Item, {
            key: children.id
          }, React.createElement(NavLink, {
            to: children.url
          }, children.title)) : null;
        })) : menu.show && React.createElement(Menu.Item, {
          key: menu.id
        }, React.createElement(NavLink, {
          to: menu.url
        }, menu.icon ? React.createElement(Icon, {
          type: menu.icon
        }) : null, React.createElement("span", null, menu.title)));
      });

      return _menus;
    });

    _this.state = {
      menus: []
    };
    return _this;
  }

  var _proto = HdMenu.prototype;

  _proto.render = function render() {
    var menus = this.props.menus;
    var _menus = null;

    if (menus && menus.length > 0) {
      _menus = this.renderMenus(menus);
    }

    return React.createElement(Menu, {
      onClick: this.handleClick,
      style: {
        width: 256
      },
      defaultSelectedKeys: ["1"],
      defaultOpenKeys: ["sub1"],
      mode: "inline"
    }, _menus);
  };

  return HdMenu;
}(Component);

export default HdMenu;
//# sourceMappingURL=index.js.map