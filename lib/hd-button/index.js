"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

require("antd/lib/config-provider/style");

var _configProvider = _interopRequireDefault(require("antd/lib/config-provider"));

require("antd/lib/button/style");

var _button = _interopRequireDefault(require("antd/lib/button"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireDefault(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var HdButton = function (_React$Component) {
  (0, _inheritsLoose2.default)(HdButton, _React$Component);

  function HdButton() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = HdButton.prototype;

  _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.onChange && this.props.title !== nextProps.title) {
      this.props.onChange();
    }
  };

  _proto.render = function render() {
    return _react.default.createElement(_configProvider.default, {
      autoInsertSpaceInButton: false
    }, _react.default.createElement(_button.default, (0, _extends2.default)({
      className: "hd-button",
      type: "primary",
      style: _objectSpread(_objectSpread({}, this.props.style), {}, {
        width: this.props.width,
        height: this.props.height
      })
    }, this.props), this.props.title));
  };

  return HdButton;
}(_react.default.Component);

var _default = HdButton;
exports.default = _default;
//# sourceMappingURL=index.js.map