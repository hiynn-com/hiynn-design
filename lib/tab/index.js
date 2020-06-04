"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

require("antd/lib/tabs/style");

var _tabs = _interopRequireDefault(require("antd/lib/tabs"));

var _react = _interopRequireWildcard(require("react"));

var _immutable = require("immutable");

var _propTypes = _interopRequireDefault(require("prop-types"));

var TabPane = _tabs.default.TabPane;

var HdTab = function (_Component) {
  (0, _inheritsLoose2.default)(HdTab, _Component);

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
    return _react.default.createElement("div", null, _react.default.createElement(_tabs.default, {
      animated: animated,
      forceRender: forceRender,
      onTabClick: onTabClick,
      onChange: onChange,
      onNextClick: onNextClick,
      onPrevClick: onPrevClick,
      size: size,
      defaultActiveKey: data ? data[0].namne : ""
    }, data ? data.map(function (item, index) {
      return _react.default.createElement(TabPane, {
        key: item.name,
        tab: item.name
      }, item.render());
    }) : ""));
  };

  return HdTab;
}(_react.Component);

var _default = HdTab;
exports.default = _default;
//# sourceMappingURL=index.js.map