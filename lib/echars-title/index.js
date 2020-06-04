"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _react = _interopRequireWildcard(require("react"));

var EcharsTitle = function (_Component) {
  (0, _inheritsLoose2.default)(EcharsTitle, _Component);

  function EcharsTitle() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = EcharsTitle.prototype;

  _proto.render = function render() {
    var props = this.props;
    return _react.default.createElement("div", {
      className: "chartTitle_wrap"
    }, _react.default.createElement("div", {
      className: "chartTitle"
    }, _react.default.createElement("div", {
      className: "title",
      style: props.titleStyle
    }, props.titleContent)));
  };

  return EcharsTitle;
}(_react.Component);

var _default = EcharsTitle;
exports.default = _default;
//# sourceMappingURL=index.js.map