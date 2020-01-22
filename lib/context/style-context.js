"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.StyleContext = exports.style = void 0;

var _react = _interopRequireDefault(require("react"));

var style = {
  prefixCls: "hd",
  theme: "light"
};
exports.style = style;

var StyleContext = _react.default.createContext(style.prefixCls);

exports.StyleContext = StyleContext;
//# sourceMappingURL=style-context.js.map