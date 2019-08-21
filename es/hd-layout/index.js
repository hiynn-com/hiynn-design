import "antd/es/dropdown/style/css";
import _Dropdown from "antd/es/dropdown";
import "antd/es/avatar/style/css";
import _Avatar from "antd/es/avatar";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import "antd/es/menu/style/css";
import _Menu from "antd/es/menu";
import "antd/es/icon/style/css";
import _Icon from "antd/es/icon";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import "antd/es/layout/style/css";
import _Layout from "antd/es/layout";
import React, { Component } from "react";
import { fromJs, Map, Set } from "immutable";
import PropTypes from "prop-types";
import cls from "classnames";
import HdMenus from "../hd-menus";
import { StyleContext } from "../context/style-context";
var Header = _Layout.Header,
    Content = _Layout.Content,
    Sider = _Layout.Sider;

var HdLayout =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(HdLayout, _Component);

  function HdLayout(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "renderHeaderMenu", function () {
      return React.createElement(_Menu, null, React.createElement(_Menu.Item, {
        key: "password",
        className: "hd-layout-header-dropdown-menu-item"
      }, React.createElement(_Icon, {
        type: "setting"
      }), React.createElement("span", null, "\u4FEE\u6539\u5BC6\u7801")), React.createElement(_Menu.Item, {
        key: "signout",
        className: "hd-layout-header-dropdown-menu-item"
      }, React.createElement(_Icon, {
        type: "logout"
      }), React.createElement("span", null, "\u9000\u51FA\u767B\u5F55")));
    });

    _this.state = {};
    return _this;
  }

  var _proto = HdLayout.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
  };

  _proto.render = function render() {
    var _cls;

    var styleContext = this.context;
    var _this$props = this.props,
        className = _this$props.className,
        style = _this$props.style;

    var _this$props2 = this.props,
        children = _this$props2.children,
        theme = _this$props2.theme,
        sider = _this$props2.sider,
        logo = _this$props2.logo,
        title = _this$props2.title,
        subTitle = _this$props2.subTitle,
        menus = _this$props2.menus,
        atr = _objectWithoutPropertiesLoose(_this$props2, ["children", "theme", "sider", "logo", "title", "subTitle", "menus"]);

    var toggleCollapse = this.props.toggleCollapse;
    var prefixCls = "hd";
    var classnames = cls(prefixCls, className, (_cls = {}, _cls[prefixCls + "-layout-container"] = true, _cls));
    var titleCls = cls("hd-layout-logo-title", {
      "hide-title": sider.get("collapsed")
    });
    return React.createElement(_Layout, {
      className: classnames
    }, React.createElement(Sider, {
      theme: theme,
      trigger: null,
      collapsible: true,
      width: sider.get("width"),
      collapsed: sider.get("collapsed"),
      breakpoint: sider.breakpoint,
      className: "hd-layout-sider"
    }, React.createElement("div", {
      className: "hd-layout-logo"
    }, logo, React.createElement("span", {
      className: titleCls
    }, title)), React.createElement(HdMenus, {
      theme: theme,
      menus: menus,
      width: sider.get("width"),
      collapsed: sider.get("collapsed")
    })), React.createElement(_Layout, {
      className: "hd-layout-main"
    }, React.createElement(Header, {
      className: "hd-layout-main-header"
    }, React.createElement("div", {
      className: "hd-layout-main-header-content"
    }, React.createElement("div", {
      className: "hd-layout-main-header-subtitle"
    }, typeof sider.get("collapsed") === "undefined" ? null : React.createElement(_Icon, {
      type: sider.get("collapsed") ? "menu-unfold" : "menu-fold",
      className: "collapse-icon",
      onClick: function onClick() {
        return toggleCollapse();
      }
    }), React.createElement("span", {
      className: "sub-title"
    }, subTitle)), React.createElement("div", {
      className: "hd-layout-header-toolbar"
    }, React.createElement(_Dropdown, {
      overlay: this.renderHeaderMenu,
      placement: "bottomRight"
    }, React.createElement("div", {
      className: "hd-layout-header-toolbar-content"
    }, React.createElement(_Avatar, {
      className: "user-avatar",
      icon: "user"
    }), React.createElement("span", {
      className: "user-name"
    }, "\u7528\u6237")))))), React.createElement(Content, {
      className: "hd-layout-main-content"
    }, children)));
  };

  return HdLayout;
}(Component);

HdLayout.contextType = StyleContext;
export default HdLayout;
//# sourceMappingURL=index.js.map