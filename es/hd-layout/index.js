import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { Component } from "react";
import { Layout, Menu, Icon, Avatar, Dropdown, Spin } from "antd";
import { fromJs, Map, Set } from "immutable";
import PropTypes from "prop-types";
import cls from "classnames";
import { StyleContext } from "../context/style-context";
var Header = Layout.Header,
    Content = Layout.Content,
    Sider = Layout.Sider;

var HdLayout =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(HdLayout, _Component);

  function HdLayout(props) {
    var _this;

    _this = _Component.call(this, props) || this;

    _defineProperty(_assertThisInitialized(_this), "renderRightMenu", function () {
      return React.createElement(Menu, null, React.createElement(Menu.Item, {
        key: "password"
      }, React.createElement(Icon, {
        type: "setting"
      }), React.createElement("span", null, "\u4FEE\u6539\u5BC6\u7801")), React.createElement(Menu.Item, {
        key: "signout"
      }, React.createElement(Icon, {
        type: "logout"
      }), React.createElement("span", null, "\u9000\u51FA\u767B\u5F55")));
    });

    _this.state = {};
    return _this;
  }

  var _proto = HdLayout.prototype;

  _proto.render = function render() {
    var styleX = this.context;
    console.log("styleX.prefixCls", styleX);
    var _this$props = this.props,
        prefixCls = _this$props.prefixCls,
        className = _this$props.className,
        style = _this$props.style;

    var _this$props2 = this.props,
        children = _this$props2.children,
        initData = _this$props2.initData,
        menus = _this$props2.menus,
        atr = _objectWithoutPropertiesLoose(_this$props2, ["children", "initData", "menus"]);

    var btnClass = cls(prefixCls, className, {
      "btn-pressed": this.state.isPressed,
      "btn-over": !this.state.isPressed && this.state.isHovered
    });
    return React.createElement(Layout, {
      className: "hd-layout-container"
    }, React.createElement(Sider, {
      theme: "light",
      trigger: null,
      collapsible: true,
      width: 218,
      breakpoint: "lg",
      className: "layout-sider"
    }, React.createElement("div", {
      className: "logo"
    }, initData.logos, React.createElement("span", null, initData.title)), menus), React.createElement(Layout, null, React.createElement(Header, {
      className: "layout-header"
    }, React.createElement("div", null, React.createElement(Icon, {
      className: "trigger"
    }), React.createElement("span", null, initData.subTitle)), React.createElement("div", null, React.createElement(Dropdown, {
      overlay: this.renderRightMenu,
      placement: "bottomRight"
    }, React.createElement("div", null, React.createElement(Avatar, {
      size: "default",
      icon: "user"
    }), React.createElement("span", null, "\u7528\u6237"))))), React.createElement(Content, null)));
  };

  return HdLayout;
}(Component);

HdLayout.contextType = StyleContext;
export default HdLayout;
//# sourceMappingURL=index.js.map