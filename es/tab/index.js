import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import "antd/lib/tabs/style";
import _Tabs from "antd/lib/tabs";
import React, { Component } from "react";
import { fromJs, Map, Set } from "immutable";
import PropTypes from "prop-types";
var TabPane = _Tabs.TabPane;

var HdTab = function (_Component) {
  _inheritsLoose(HdTab, _Component);

  function HdTab(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {};
    return _this;
  }

  var _proto = HdTab.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        data = _this$props.data,
        size = _this$props.size,
        animated = _this$props.animated,
        forceRender = _this$props.forceRender,
        onTabClick = _this$props.onTabClick,
        onNextClick = _this$props.onNextClick,
        onPrevClick = _this$props.onPrevClick,
        onChange = _this$props.onChange;
    return React.createElement("div", null, React.createElement(_Tabs, {
      animated: animated,
      forceRender: forceRender,
      onTabClick: onTabClick,
      onChange: onChange,
      onNextClick: onNextClick,
      onPrevClick: onPrevClick,
      size: size,
      defaultActiveKey: data ? data[0].namne : ""
    }, data ? data.map(function (item, index) {
      return React.createElement(TabPane, {
        key: item.name,
        tab: item.name
      }, item.render());
    }) : ""));
  };

  return HdTab;
}(Component);

export default HdTab;
//# sourceMappingURL=index.js.map