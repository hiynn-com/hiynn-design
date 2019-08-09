"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _demo = _interopRequireDefault(require("./demo"));

exports.Demo = _demo["default"];

var _demo2 = _interopRequireDefault(require("./demo2"));

exports.Demo2 = _demo2["default"];
var _default = {
  Demo: _demo["default"],
  Demo2: _demo2["default"]
};
exports["default"] = _default;