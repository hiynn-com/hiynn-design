import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { Component } from "react";
import { Layout, Menu, Icon, Avatar, Dropdown, Spin } from "antd";
import { fromJs, Map, Set } from "immutable";
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
    var _this$props = this.props,
        initData = _this$props.initData,
        menus = _this$props.menus;
    return React.createElement(Layout, {
      className: "layout-container"
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

export default HdLayout;
//# sourceMappingURL=index.js.map