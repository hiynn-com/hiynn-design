"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

require("./style/index.scss");

var Demo2 =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2["default"])(Demo2, _Component);

  function Demo2() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = Demo2.prototype;

  _proto.render = function render() {
    return _react["default"].createElement("div", {
      className: "demo-container"
    }, _react["default"].createElement(_antd.Button, {
      type: "primary"
    }, "this is demo2 component"));
  };

  return Demo2;
}(_react.Component);

var _default = Demo2;
exports["default"] = _default;
//# sourceMappingURL=index.js.map