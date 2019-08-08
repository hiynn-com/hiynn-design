"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Demo", {
  enumerable: true,
  get: function get() {
    return _demo["default"];
  }
});
Object.defineProperty(exports, "Demo2", {
  enumerable: true,
  get: function get() {
    return _demo2["default"];
  }
});
exports["default"] = void 0;

var _demo = _interopRequireDefault(require("./demo"));

var _demo2 = _interopRequireDefault(require("./demo2"));

var _default = {
  Demo: _demo["default"],
  Demo2: _demo2["default"]
};
exports["default"] = _default;