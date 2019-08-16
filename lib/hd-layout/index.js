"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var HdLayout =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(HdLayout, _Component);

  function HdLayout() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = HdLayout.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      className: "demo-container"
    }, _react["default"].createElement("div", {
      className: "demo-wrapper"
    }, "this is my demo wrapper"), _react["default"].createElement(_antd.Button, {
      type: "primary"
    }, "this is demo component"));
  };

  return HdLayout;
}(_react.Component);

var _default = HdLayout;
exports["default"] = _default;
//# sourceMappingURL=index.js.map