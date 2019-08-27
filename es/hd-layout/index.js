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

    _defineProperty(_assertThisInitialized(_this), "renderSider", function () {
      var _this$props = _this.props,
          sider = _this$props.sider,
          theme = _this$props.theme,
          logo = _this$props.logo,
          menus = _this$props.menus,
          title = _this$props.title;
      var titleCls = "title";

      if (sider) {
        titleCls = cls(titleCls, {
          "hide-title": sider.get("collapsed")
        });
      }

      return sider ? React.createElement(Sider, {
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
      })) : null;
    });

    _defineProperty(_assertThisInitialized(_this), "renderSubtitle", function () {
      var _this$props2 = _this.props,
          sider = _this$props2.sider,
          logo = _this$props2.logo,
          title = _this$props2.title,
          subTitle = _this$props2.subTitle;
      var toggleCollapse = _this.props.toggleCollapse;

      if (sider) {
        var icon = typeof sider.get("collapsed") === "undefined" ? null : React.createElement(_Icon, {
          type: sider.get("collapsed") ? "menu-unfold" : "menu-fold",
          className: "collapse-icon",
          onClick: function onClick() {
            return toggleCollapse();
          }
        });
        return React.createElement(React.Fragment, null, icon, React.createElement("span", {
          className: "title"
        }, subTitle));
      } else {
        return React.createElement(React.Fragment, null, logo, React.createElement("span", {
          className: "title"
        }, title));
      }
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
    var _this$props3 = this.props,
        className = _this$props3.className,
        style = _this$props3.style;

    var _this$props4 = this.props,
        children = _this$props4.children,
        theme = _this$props4.theme,
        sider = _this$props4.sider,
        logo = _this$props4.logo,
        title = _this$props4.title,
        subTitle = _this$props4.subTitle,
        menus = _this$props4.menus,
        atr = _objectWithoutPropertiesLoose(_this$props4, ["children", "theme", "sider", "logo", "title", "subTitle", "menus"]);

    var prefixCls = "hd";
    var classnames = cls(prefixCls, className, (_cls = {}, _cls[prefixCls + "-layout-container"] = true, _cls));
    return React.createElement(_Layout, {
      className: classnames
    }, this.renderSider(), React.createElement(_Layout, {
      className: "hd-layout-main"
    }, React.createElement(Header, {
      className: "hd-layout-main-header"
    }, React.createElement("div", {
      className: "hd-layout-main-header-content"
    }, React.createElement("div", {
      className: "hd-layout-main-header-left"
    }, React.createElement("div", {
      className: "hd-layout-main-header-subtitle"
    }, this.renderSubtitle())), React.createElement("div", {
      className: "hd-layout-main-header-right"
    }, React.createElement("div", null), React.createElement("div", {
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
    }, "\u7528\u6237"))))))), React.createElement(Content, {
      className: "hd-layout-main-content"
    }, children)));
  };

  return HdLayout;
}(Component);

HdLayout.contextType = StyleContext;
export default HdLayout;
//# sourceMappingURL=index.js.map