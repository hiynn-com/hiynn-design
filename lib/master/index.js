"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var HdMaster = function (_Component) {
  (0, _inheritsLoose2.default)(HdMaster, _Component);

  function HdMaster() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = HdMaster.prototype;

  _proto.render = function render() {
    return _react.default.createElement("div", {
      className: "demo-container"
    }, _react.default.createElement(_button.default, {
      type: "primary"
    }, "this is master component"));
  };

  return HdMaster;
}(_react.Component);

var _default = HdMaster;
exports.default = _default;
//# sourceMappingURL=index.js.map