"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

require("./style/index.scss");

var Demo = function (_Component) {
  (0, _inherits2["default"])(Demo, _Component);

  function Demo() {
    (0, _classCallCheck2["default"])(this, Demo);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Demo).apply(this, arguments));
  }

  (0, _createClass2["default"])(Demo, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement("div", {
        className: "demo-container"
      }, _react["default"].createElement("div", {
        className: "demo-wrapper"
      }, "this is my demo wrapper"), _react["default"].createElement(_antd.Button, {
        type: "primary"
      }, "this is demo component"));
    }
  }]);
  return Demo;
}(_react.Component);

var _default = Demo;
exports["default"] = _default;